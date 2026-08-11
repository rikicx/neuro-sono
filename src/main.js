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
  }

  if (story && window.innerWidth > 760 && !reducedMotion.matches) {
    const rect = story.getBoundingClientRect();
    const scrollable = story.offsetHeight - window.innerHeight;
    const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
    const active = Math.min(storySteps.length - 1, Math.floor(progress * storySteps.length));
    storySteps.forEach((step, index) => step.classList.toggle("is-active", index === active));
    storyCurrent.textContent = String(active + 1).padStart(2, "0");
    storyProgress.style.transform = `scaleX(${progress})`;
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
