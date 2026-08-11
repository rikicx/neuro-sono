import "./styles.css";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.querySelector(".menu-overlay");
const menuLinks = [...menuOverlay.querySelectorAll("a[href^='#']")];
const revealItems = [...document.querySelectorAll("[data-reveal]")];
const lineMasks = [...document.querySelectorAll(".line-mask")];
const parallaxItems = [...document.querySelectorAll("[data-parallax]")];
const scrollZoomItems = [...document.querySelectorAll("[data-scroll-zoom]")];
const story = document.querySelector("[data-story]");
const storySteps = [...document.querySelectorAll("[data-story-step]")];
const storyCurrent = document.querySelector("[data-story-current]");
const storyProgress = document.querySelector("[data-story-progress]");
const heroScene = document.querySelector("[data-hero-scene]");
const introScene = document.querySelector("[data-intro-scene]");
const introSymbol = introScene?.querySelector(".intro-symbol");
const storyOrbit = story?.querySelector(".story-orbit");
const storyScanline = story?.querySelector(".story-scanline");
const examsScene = document.querySelector("[data-exams-scene]");
const examTrack = document.querySelector("[data-exam-track]");
const examProgress = document.querySelector("[data-exam-progress]");

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const smoothstep = (start, end, value) => {
  const progress = clamp((value - start) / Math.max(end - start, 0.0001));
  return progress * progress * (3 - 2 * progress);
};

const getSceneProgress = (element) => {
  if (!element) return 0;
  const rect = element.getBoundingClientRect();
  const scrollable = Math.max(element.offsetHeight - window.innerHeight, 1);
  return clamp(-rect.top / scrollable);
};

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const setMenu = (open) => {
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuOverlay.setAttribute("aria-hidden", String(!open));
  if (open) {
    menuOverlay.querySelector("nav a")?.focus();
  } else {
    menuButton.focus({ preventScroll: true });
  }
};

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

menuLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("menu-open")) setMenu(false);
});

if (reducedMotion.matches) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
  lineMasks.forEach((line) => line.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8%" },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
  window.requestAnimationFrame(() => lineMasks.forEach((line, index) => {
    window.setTimeout(() => line.classList.add("is-visible"), 160 + index * 110);
  }));
}

let ticking = false;
let pageVisible = !document.hidden;

const updateScrollEffects = () => {
  ticking = false;
  if (!pageVisible) return;
  const scrollY = window.scrollY;
  header.classList.toggle("is-scrolled", scrollY > 32);

  if (!reducedMotion.matches && window.innerWidth > 760) {
    if (heroScene) {
      const progress = getSceneProgress(heroScene);
      const exit = smoothstep(0.18, 0.86, progress);
      heroScene.style.setProperty("--hero-content-opacity", (1 - smoothstep(0.2, 0.78, progress)).toFixed(3));
      heroScene.style.setProperty("--hero-content-y", `${(-72 * exit).toFixed(1)}px`);
      heroScene.style.setProperty("--hero-line-one-x", `${(-window.innerWidth * 0.17 * exit).toFixed(1)}px`);
      heroScene.style.setProperty("--hero-line-two-x", `${(window.innerWidth * 0.13 * exit).toFixed(1)}px`);
      heroScene.style.setProperty("--hero-media-scale", (1.04 + progress * 0.2).toFixed(3));
      heroScene.style.setProperty("--hero-media-y", `${(progress * 52).toFixed(1)}px`);
      heroScene.style.setProperty("--hero-wave-opacity", (0.35 * (1 - smoothstep(0.35, 0.82, progress))).toFixed(3));
    }

    if (introScene && introSymbol) {
      const progress = getSceneProgress(introScene);
      const settle = smoothstep(0.04, 0.64, progress);
      const copy = smoothstep(0.2, 0.5, progress);
      introScene.style.setProperty("--intro-symbol-x", `${(-settle * 36).toFixed(2)}vw`);
      introScene.style.setProperty("--intro-symbol-scale", (1.7 - settle * 1.02).toFixed(3));
      introScene.style.setProperty("--intro-symbol-blur", `${(14 - settle * 14).toFixed(1)}px`);
      introScene.style.setProperty("--intro-symbol-opacity", (0.68 - settle * 0.36).toFixed(3));
      introScene.style.setProperty("--intro-copy-opacity", copy.toFixed(3));
      introScene.style.setProperty("--intro-copy-y", `${((1 - copy) * 90).toFixed(1)}px`);
    }

    parallaxItems.forEach((item) => {
      const speed = Number(item.dataset.parallax || 0);
      const rect = item.parentElement.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      const offset = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * speed;
      item.style.setProperty("--parallax-y", `${offset.toFixed(1)}px`);
    });

    scrollZoomItems.forEach((item) => {
      const container = item.closest("section") || item.parentElement;
      const rect = container.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height, 1)));
      item.style.setProperty("--scroll-zoom", (1 + progress * 0.13).toFixed(3));
      item.style.setProperty("--zoom-y", `${(progress * 34).toFixed(1)}px`);
    });

    if (story) {
      const progress = getSceneProgress(story);
      const active = Math.min(storySteps.length - 1, Math.floor(Math.min(progress, 0.999) * storySteps.length));

      storySteps.forEach((step, index) => {
        const phase = progress * storySteps.length - index;
        const entry = index === 0 ? 1 : smoothstep(-0.28, 0.04, phase);
        const exit = index === storySteps.length - 1 ? 1 : 1 - smoothstep(0.72, 1.04, phase);
        const opacity = entry * exit;
        const y = (1 - entry) * 90 - (1 - exit) * 84;
        step.style.setProperty("--step-opacity", opacity.toFixed(3));
        step.style.setProperty("--step-y", `${y.toFixed(1)}px`);
        step.style.setProperty("--step-clip-top", `${((1 - entry) * 48).toFixed(2)}%`);
        step.style.setProperty("--step-clip-bottom", `${((1 - exit) * 48).toFixed(2)}%`);
        step.classList.toggle("is-active", index === active);
      });

      storyCurrent.textContent = String(active + 1).padStart(2, "0");
      storyProgress.style.transform = `scaleX(${progress})`;
      storyOrbit?.style.setProperty("--story-orbit-scale", (0.78 + progress * 1.65).toFixed(3));
      storyOrbit?.style.setProperty("--story-orbit-rotate", `${(progress * 46).toFixed(1)}deg`);
      storyOrbit?.style.setProperty("--story-orbit-blur", `${(smoothstep(0.72, 1, progress) * 10).toFixed(1)}px`);
      storyOrbit?.style.setProperty("--story-orbit-opacity", (1 - smoothstep(0.82, 1, progress) * 0.48).toFixed(3));
      storyScanline?.style.setProperty("--story-scan-x", `${(-18 + progress * 136).toFixed(2)}vw`);
    }

    if (examsScene && examTrack) {
      const progress = getSceneProgress(examsScene);
      const trackTravel = Math.max(0, examTrack.scrollWidth - window.innerWidth);
      examTrack.style.setProperty("--exam-track-x", `${(-trackTravel * progress).toFixed(1)}px`);
      examsScene.style.setProperty("--exam-heading-x", `${(-window.innerWidth * 0.055 * progress).toFixed(1)}px`);
      examsScene.style.setProperty("--exam-heading-kicker-x", `${(window.innerWidth * 0.035 * progress).toFixed(1)}px`);
      if (examProgress) examProgress.style.transform = `scaleX(${progress})`;
    }
  } else {
    heroScene?.style.setProperty("--hero-content-opacity", "1");
    heroScene?.style.setProperty("--hero-content-y", "0px");
    heroScene?.style.setProperty("--hero-line-one-x", "0px");
    heroScene?.style.setProperty("--hero-line-two-x", "0px");
    introScene?.style.setProperty("--intro-copy-opacity", "1");
    introScene?.style.setProperty("--intro-copy-y", "0px");
    storySteps.forEach((step) => {
      step.style.setProperty("--step-opacity", "1");
      step.style.setProperty("--step-y", "0px");
      step.style.setProperty("--step-clip-top", "0%");
      step.style.setProperty("--step-clip-bottom", "0%");
    });
    examTrack?.style.setProperty("--exam-track-x", "0px");
  }
};

const requestTick = () => {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(updateScrollEffects);
};

window.addEventListener("scroll", requestTick, { passive: true });
window.addEventListener("resize", requestTick);
document.addEventListener("visibilitychange", () => {
  pageVisible = !document.hidden;
  if (pageVisible) requestTick();
});

reducedMotion.addEventListener("change", () => window.location.reload());
requestTick();
