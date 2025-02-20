// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

// GSAP Demo Animation
gsap.to("#demo",{
    rotation : 360,
    duration : 2,
})

Draggable.create("#demo")

// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

// GSAP Demo Animation
gsap.to(“window1",{
    rotation: 360,
duration: 2,
})

// GSAP Animation - MotionPath

gsap.to("#window3",{
    duration: 5,
    motionPath: {
        path: "",
    },
    onComplete: ()=> {
        document.getElementById('#window')
    }
})


// GSAP Animation - Window 4 Timeline //
let timelineWindow4 = gsap.timeline();

timelineWindow4.to('#window4'?{x:100,})
.to('#window4',{y:100,})
.to('#window4',{x:-100,})
.to('#window4',{y:-100,})
.to(".Michel",{
    opacity:1,
    onComplete: ()=>{
        setTimeout(()=>{
            document.getElementById('Michel').textContent="Cool, cool, cool !";
        })
    }
})

