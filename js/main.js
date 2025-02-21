// GSAP Modules
gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);

// Animation GSAP Section 1

gsap.to(".intro", {
    x: 80,
    y: -10,
    rotation: 2,
    duration: 4,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});

// Animation GSAP Section 3

gsap.to(".skills-container", {
    x: 150,
    y: 0,
    duration: 5,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});

// Animation GSAP Section 4

gsap.to(".experience-tag", {
    rotation: 10,
    duration: 2.5,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});

gsap.to(".tag-strategy", {
    rotation: -10,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});

gsap.to(".tag-deceptive", {
    rotation: -10,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});