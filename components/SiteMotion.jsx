"use client";

import { useEffect } from "react";

const pointerLightQuery =
  ".hero-stage, .story-sticky, .exam-card-primary, .manifesto, .contact, .subpage-hero, .technical-team";

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

export default function SiteMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const header = document.querySelector("[data-header]");
    const menuButton = document.querySelector(".menu-button");
    const menuOverlay = document.querySelector(".menu-overlay");
    if (!header || !menuButton || !menuOverlay) return undefined;

    const menuLinks = [...menuOverlay.querySelectorAll("a[href^='#']")];
    const revealItems = [...document.querySelectorAll("[data-reveal]")];
    const lineMasks = [...document.querySelectorAll(".line-mask")];
    const parallaxItems = [...document.querySelectorAll("[data-parallax]")];
    const scrollZoomItems = [...document.querySelectorAll("[data-scroll-zoom]")];
    const story = document.querySelector("[data-story]");
    const storySteps = [...document.querySelectorAll("[data-story-step]")];
    const storyPhotos = [...document.querySelectorAll("[data-story-photo]")];
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

    const onMenuButtonClick = () => {
      setMenu(menuButton.getAttribute("aria-expanded") !== "true");
    };
    menuButton.addEventListener("click", onMenuButtonClick);

    const menuLinkHandlers = menuLinks.map((link) => {
      const handler = () => setMenu(false);
      link.addEventListener("click", handler);
      return { link, handler };
    });

    const onKeydown = (event) => {
      if (event.key === "Escape" && document.body.classList.contains("menu-open")) setMenu(false);
    };
    document.addEventListener("keydown", onKeydown);

    // Anchor links (#sobre, #contato, ...) rely on native scroll-into-view, which gets
    // interrupted partway when the target sits past deeply nested `position: sticky`
    // scroll-jacked sections. Drive the scroll manually so it always reaches the target.
    let scrollAnimationFrame = 0;
    const smoothScrollTo = (targetY, duration = 900) => {
      window.cancelAnimationFrame(scrollAnimationFrame);
      const startY = window.scrollY;
      const diff = targetY - startY;
      if (Math.abs(diff) < 1) return;
      const startTime = performance.now();
      const step = (now) => {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        window.scrollTo({ top: startY + diff * eased, behavior: "instant" });
        if (t < 1) scrollAnimationFrame = window.requestAnimationFrame(step);
      };
      scrollAnimationFrame = window.requestAnimationFrame(step);
    };

    const hashLinks = [...document.querySelectorAll("a[href^='#']")];
    const hashLinkHandlers = hashLinks.map((link) => {
      const handler = (event) => {
        const hash = link.getAttribute("href");
        const id = hash.slice(1);
        const target = id ? document.getElementById(id) : null;
        if (!target) return;
        event.preventDefault();
        const targetY = target.getBoundingClientRect().top + window.scrollY;
        if (reducedMotion.matches) {
          window.scrollTo({ top: targetY, behavior: "instant" });
        } else {
          smoothScrollTo(targetY);
        }
        window.history.pushState(null, "", hash);
      };
      link.addEventListener("click", handler);
      return { link, handler };
    });

    const servicesTrack = document.querySelector("[data-services-track]");
    const servicesPrev = document.querySelector("[data-services-prev]");
    const servicesNext = document.querySelector("[data-services-next]");
    let cleanupServices = () => {};

    if (servicesTrack && servicesPrev && servicesNext) {
      const scrollServices = (direction) => {
        const card = servicesTrack.querySelector(".exam-card");
        const distance = card ? card.getBoundingClientRect().width + 18 : servicesTrack.clientWidth * 0.8;
        servicesTrack.scrollBy({ left: distance * direction, behavior: reducedMotion.matches ? "auto" : "smooth" });
      };

      const updateServicesNav = () => {
        const cards = servicesTrack.querySelectorAll(".exam-card");
        const lastCard = cards[cards.length - 1];
        const trackRect = servicesTrack.getBoundingClientRect();
        servicesPrev.disabled = servicesTrack.scrollLeft <= 4;
        servicesNext.disabled = !lastCard || lastCard.getBoundingClientRect().right <= trackRect.right + 4;
      };

      const onPrev = () => scrollServices(-1);
      const onNext = () => scrollServices(1);
      servicesPrev.addEventListener("click", onPrev);
      servicesNext.addEventListener("click", onNext);
      servicesTrack.addEventListener("scroll", updateServicesNav, { passive: true });
      window.addEventListener("resize", updateServicesNav);
      updateServicesNav();

      cleanupServices = () => {
        servicesPrev.removeEventListener("click", onPrev);
        servicesNext.removeEventListener("click", onNext);
        servicesTrack.removeEventListener("scroll", updateServicesNav);
        window.removeEventListener("resize", updateServicesNav);
      };
    }

    let cleanupPointerLight = () => {};
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reducedMotion.matches) {
      let pointerLightFrame = 0;
      let pointerX = 0;
      let pointerY = 0;
      let pointerIsLit = false;

      const onPointerMove = (event) => {
        const target = event.target instanceof Element ? event.target.closest(pointerLightQuery) : null;
        pointerX = event.clientX;
        pointerY = event.clientY;
        pointerIsLit = Boolean(target);
        if (pointerLightFrame) return;

        pointerLightFrame = window.requestAnimationFrame(() => {
          document.body.style.setProperty("--pointer-x", `${pointerX}px`);
          document.body.style.setProperty("--pointer-y", `${pointerY}px`);
          document.body.classList.toggle("is-pointer-lit", pointerIsLit);
          pointerLightFrame = 0;
        });
      };
      window.addEventListener("pointermove", onPointerMove, { passive: true });

      const onMouseLeave = () => {
        document.body.classList.remove("is-pointer-lit");
      };
      document.documentElement.addEventListener("mouseleave", onMouseLeave);

      cleanupPointerLight = () => {
        window.removeEventListener("pointermove", onPointerMove);
        document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      };
    }

    let revealObserver;
    if (reducedMotion.matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      lineMasks.forEach((line) => line.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
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
      window.requestAnimationFrame(() =>
        lineMasks.forEach((line, index) => {
          window.setTimeout(() => line.classList.add("is-visible"), 160 + index * 110);
        }),
      );
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
          heroScene.style.setProperty("--hero-wave-opacity", (0.64 * (1 - smoothstep(0.35, 0.82, progress))).toFixed(3));
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

          storyPhotos.forEach((photo) => {
            photo.classList.toggle("is-active", Number(photo.dataset.storyPhoto) === active);
          });

          if (storyCurrent) storyCurrent.textContent = String(active + 1).padStart(2, "0");
          if (storyProgress) storyProgress.style.transform = `scaleX(${progress})`;
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
    const onVisibilityChange = () => {
      pageVisible = !document.hidden;
      if (pageVisible) requestTick();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const onReducedMotionChange = () => window.location.reload();
    reducedMotion.addEventListener("change", onReducedMotionChange);

    requestTick();

    return () => {
      menuButton.removeEventListener("click", onMenuButtonClick);
      menuLinkHandlers.forEach(({ link, handler }) => link.removeEventListener("click", handler));
      document.removeEventListener("keydown", onKeydown);
      hashLinkHandlers.forEach(({ link, handler }) => link.removeEventListener("click", handler));
      window.cancelAnimationFrame(scrollAnimationFrame);
      cleanupServices();
      cleanupPointerLight();
      revealObserver?.disconnect();
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reducedMotion.removeEventListener("change", onReducedMotionChange);
    };
  }, []);

  return null;
}
