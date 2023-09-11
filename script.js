var cr=document.querySelector("#cursor");
var cr_blur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",(dest)=>{
    cr.style.left=dest.x+"px";
    cr.style.top=dest.y+"px";
    cr_blur.style.left=dest.x-250+"px";
    cr_blur.style.top=dest.y-250+"px";
})


gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }

})