gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  autoKill: false,
});

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      document.documentElement.scrollTop = value;
      document.body.scrollTop = value;
    }
    return document.documentElement.scrollTop || document.body.scrollTop;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
});

const scrollContainer = document.body;

ScrollTrigger.addEventListener("scrollStart", () => {
  document.documentElement.style.overflow = "hidden";
});

ScrollTrigger.addEventListener("scrollEnd", () => {
  document.documentElement.style.overflow = "auto";
});

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-1",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    markers: true,
  },
});

timeline.to(".section-1", { y: "-100%", duration: 5 });
timeline.to(".section-2", { y: "-100%", duration: 5 }, "<");
timeline.to(".section-3", { y: "-100%", duration: 5 }, "<");