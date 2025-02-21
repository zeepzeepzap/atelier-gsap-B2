// GSAP Modules
gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);

gsap.to(".intro", {
    x: 80,
    y: -10,
    rotation: 2,
    duration: 4,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});