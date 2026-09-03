const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const source = readFileSync(path.join(root, "components/ReactionTest.jsx"), "utf8");
// Exercise the component's real handlers with deterministic clocks/hooks, without a browser.
// Browser rendering and physical display latency are deliberately not simulated here.
const logic = source.slice(source.indexOf("const TOTAL_ROUNDS"), source.indexOf("\n  return ("))
  .replace("export default function ReactionTest()", "function ReactionTest()")
  + `\n return { startPractice, startTest, handlePointerDown, handleKeyDown, handleKeyUp,
    handleAccessibleClick, phase, light, times, average, view, message, isEarly, round };
  }`;

function harness() {
  let now = 1000, cursor = 0, id = 0, mounted = false, cleanup;
  const slots = [], timers = new Map(), frames = new Map(), listeners = new Map();
  const document = { hidden: false, addEventListener: (name, fn) => listeners.set(name, fn), removeEventListener: name => listeners.delete(name) };
  const window = {
    setTimeout: fn => { timers.set(++id, fn); return id; },
    clearTimeout: key => timers.delete(key),
    requestAnimationFrame: fn => { frames.set(++id, fn); return id; },
    cancelAnimationFrame: key => frames.delete(key),
    addEventListener: (name, fn) => listeners.set(name, fn),
    removeEventListener: name => listeners.delete(name),
  };
  const context = vm.createContext({
    document, window, performance: { now: () => now },
    useState(initial) { const i = cursor++; if (!(i in slots)) slots[i] = initial; return [slots[i], value => { slots[i] = value; }]; },
    useRef(initial) { const i = cursor++; return slots[i] ??= { current: initial }; },
    useEffect(fn) { if (!mounted) cleanup = fn(); },
    flushSync(fn) { fn(); now += 2; render(); },
  });
  vm.runInContext(logic, context);
  function render() { cursor = 0; const state = vm.runInContext("ReactionTest()", context); mounted = true; return state; }
  const runQueue = queue => { const callbacks = [...queue.values()]; queue.clear(); callbacks.forEach(fn => fn()); };
  const pointer = (overrides = {}) => render().handlePointerDown({ button: 0, isPrimary: true, timeStamp: now, ...overrides });
  const click = (detail = 1) => render().handleAccessibleClick({ detail, timeStamp: now });
  const key = (key = " ", repeat = false) => {
    let prevented = false;
    render().handleKeyDown({ key, repeat, timeStamp: now, preventDefault() { prevented = true; } });
    return prevented;
  };
  render();
  return {
    render, pointer, click, key, timers, frames,
    advance: ms => { now += ms; },
    time: () => now,
    timer: () => runQueue(timers),
    frame: () => runQueue(frames),
    green() { runQueue(timers); assert.equal(render().phase, "waiting"); runQueue(frames); assert.equal(render().phase, "go"); },
    hide() { document.hidden = true; listeners.get("visibilitychange")(); },
    blur() { listeners.get("blur")(); },
    unmount() { cleanup(); },
  };
}

function readyRound() { const h = harness(); h.render().startTest(); h.pointer(); h.green(); return h; }

test("pointer press records immediately; release duration and subsequent click do not change the result", () => {
  for (const holdMs of [0, 50, 100, 150, 500]) {
    const h = readyRound(); h.advance(250); h.pointer();
    assert.equal(h.render().times[0], 0.25);
    h.advance(holdMs); h.click();
    assert.equal(h.render().times.length, 1);
    assert.equal(h.render().phase, "ready");
    assert.equal(h.render().average, 0.25);
  }
});

test("clock starts after frame commit, not during random waiting or simulated render work", () => {
  const h = harness(); h.render().startTest(); h.pointer(); h.advance(5000); h.timer();
  h.advance(100); h.frame(); h.advance(250); h.pointer();
  assert.equal(h.render().times[0], 0.25);
});

test("input timestamp excludes time spent waiting for the handler to run", () => {
  const h = readyRound(); h.advance(250); const timeStamp = h.time(); h.advance(80);
  h.pointer({ timeStamp }); assert.equal(h.render().times[0], 0.25);
});

test("invalid timestamp falls back to the monotonic clock without subtracting an offset", () => {
  for (const timeStamp of [undefined, NaN, 0, -1, 1e15]) {
    const h = readyRound(); h.advance(386.25); h.pointer({ timeStamp });
    assert.equal(h.render().times[0], 0.38625);
  }
});

test("early press cancels the timeout, does not score, and its click does not restart", () => {
  const h = harness(); h.render().startTest(); h.pointer(); h.pointer(); h.click();
  assert.equal(h.render().isEarly, true); assert.equal(h.render().phase, "ready");
  assert.equal(h.timers.size, 0); assert.equal(h.render().times.length, 0);
});

test("early press also cancels a queued animation frame", () => {
  const h = harness(); h.render().startTest(); h.pointer(); h.timer(); h.pointer();
  assert.equal(h.frames.size, 0); h.frame(); assert.equal(h.render().light, "red");
});

test("an input queued before green cannot score as a positive reaction", () => {
  const h = readyRound(); h.pointer({ timeStamp: h.time() - 10 });
  assert.equal(h.render().isEarly, true); assert.equal(h.render().times.length, 0);
});

test("primary mouse, touch and pen record; secondary buttons and additional touches do not", () => {
  for (const pointerType of ["mouse", "touch", "pen"]) {
    const h = readyRound(); h.advance(250);
    h.pointer({ button: 2, pointerType }); h.pointer({ isPrimary: false, pointerType });
    assert.equal(h.render().times.length, 0);
    h.pointer({ pointerType }); h.click(); assert.equal(h.render().times[0], 0.25);
  }
});

test("Space and Enter record on keydown, suppress defaults and ignore auto-repeat/key release", () => {
  for (const key of [" ", "Enter"]) {
    const h = readyRound(); h.advance(250); assert.equal(h.key(key), true);
    h.advance(100); h.key(key, true);
    let prevented = false;
    h.render().handleKeyUp({ key, preventDefault() { prevented = true; } });
    assert.equal(prevented, true); assert.equal(h.render().phase, "ready");
    assert.equal(h.render().times[0], 0.25); assert.equal(h.render().times.length, 1);
  }
});

test("unrelated keys do not activate the test; virtual assistive click remains supported", () => {
  const h = readyRound(); assert.equal(h.key("a"), false); h.advance(250); h.click(0);
  assert.equal(h.render().times[0], 0.25);
});

test("practice is excluded; exactly five test rounds produce the unadjusted mean", () => {
  const h = harness(); h.render().startPractice(); h.pointer(); h.green(); h.advance(900); h.pointer(); h.click();
  assert.equal(h.render().phase, "practice-done"); assert.equal(h.render().times.length, 0);
  h.pointer(); h.click();
  for (const ms of [461, 335, 408, 365, 361]) { h.pointer(); h.green(); h.advance(ms); h.pointer(); h.click(); }
  assert.equal(h.render().view, "results"); assert.equal(h.render().times.length, 5);
  assert.ok(Math.abs(h.render().average - 0.386) < 1e-12);
  h.render().startTest(); assert.equal(h.render().times.length, 0);
});

test("leaving the tab or window invalidates only the active attempt", () => {
  for (const interrupt of ["hide", "blur"]) {
    const h = readyRound(); h.advance(250); h.pointer();
    h.pointer(); h.green(); h[interrupt]();
    assert.equal(h.render().phase, "ready"); assert.equal(h.render().light, "red");
    assert.equal(h.render().times.length, 1);
  }
  const h = harness(); h.render().startTest(); h.pointer(); h.timer(); h.hide();
  assert.equal(h.frames.size, 0); assert.equal(h.render().times.length, 0);
});

test("unmount cancels pending callbacks", () => {
  const h = harness(); h.render().startTest(); h.pointer(); h.timer(); h.unmount();
  assert.equal(h.timers.size, 0); assert.equal(h.frames.size, 0);
});

test("JSX binds the tested handlers and stimulus styles have no color transition", () => {
  for (const binding of ["onPointerDown={handlePointerDown}", "onKeyDown={handleKeyDown}", "onKeyUp={handleKeyUp}", "onClick={handleAccessibleClick}"]) assert.ok(source.includes(binding));
  const css = readFileSync(path.join(root, "app/teste-de-reacao/reaction-test.css"), "utf8");
  assert.match(css.match(/\.light \{[^}]+\}/)[0], /transition: none/);
  assert.match(css.match(/\.reaction-arrow \{[^}]+\}/)[0], /transition: none/);
  assert.match(css.match(/\.reaction-trigger \{[^}]+\}/)[0], /transition: transform 220ms/);
});
