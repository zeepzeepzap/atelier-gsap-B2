// GSAP Modules
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,Draggable,MotionPathPlugin);

console.log("Bienvenue sur mon site !")

// Animation GSAP Section 1, mouvement pour le texte d'introduction

gsap.to(".intro", {
    x: 80,
    y: -10,
    rotation: 2,
    duration: 4,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});

// Animation GSAP Section 2, scrolltrigger avec un effet de flou

gsap.to(".formation-card", {
    scrollTrigger: {
        trigger: '#section2',
        start: 'top 70%',
        end: 'top 20%',
        scrub: 1,
        toggleActions: 'play none none none',
    },
    filter: "blur(0px)",
});


// Animation GSAP Section 3, mouvement de défilement pour les compétences

gsap.to(".skills-container", {
    x: 150,
    y: 0,
    duration: 5,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});

// Animation GSAP Section 4, mouvement de rotation pour les tags

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

// Animation GSAP Section 5, draggable pour attraper les projets un par un

Draggable.create(".project-card1",{
    type: "x,y",

    onDrag: function(){
        document.querySelector('.project-card1');
    },
    onDragEnd: function(){
        document.querySelector('.project-card1');
    }
})

Draggable.create(".project-card2",{
    type: "x,y",

    onDrag: function(){
        document.querySelector('.project-card2');
    },
    onDragEnd: function(){
        document.querySelector('.project-card2');
    }
})