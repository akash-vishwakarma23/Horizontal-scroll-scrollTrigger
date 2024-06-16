gsap.to("#page2 h1",{
    transform: "translateX(-122%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        marker:true,
        top: "0",
        start:"top 0",
        end:"top -100%",
        scrub:5,
        pin:true

    }
})