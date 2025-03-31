function toggleMenu() {
    const menu = document.getElementById("menu");
    const menuIcon = document.getElementById("menu-icon");

    menu.classList.toggle("active");

    // Toggle between hamburger and cross icon
    if (menu.classList.contains("active")) {
        menuIcon.classList.replace("ri-menu-line", "ri-close-line");
    } else {
        menuIcon.classList.replace("ri-close-line", "ri-menu-line");
    }
}



window.onload = function () {
    
    
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    // Gsap for large screen
    mm.add("(min-width: 769px)", () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            start: "top 95%",
            end: "bottom 100%",
            scrub: 1,
        }
    });

         tl.to("#bwhite", { width: "17%", top: "125%", left: "16.5%" }, "sizes")
      .to("#wheat", { top: "132%", rotate: "0deg", left: "36%" }, "sizes")
      .to("#rice", { top: "132%", rotate: "0deg", left: "11%" }, "sizes")
      .to("#water", { top: "164.7%", rotate: "0deg", left: "11%" }, "sizes")
      .to("#pomo", { top: "164.5%", rotate: "180deg", left: "36%" }, "sizes");
        });

      mm.add("(min-width: 769px)", () => {
        var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".three",
            start: "top 80%",
            end: "bottom 130%",
            scrub: 1,
            }
            });

         gsap.set(["#bblack", "#bzero", "#bgray"], { visibility: "visible" });

            tl2.from("#bblack", {width: "9%", height:"11.5%", rotate: "0deg", top: "-95.5%", left: "246.5%", duration: 1 }, "ca")
            .from("#bzero", {width: "9%", height:"15%", rotate: "0deg", top: "-99%", left: "62%", duration: 1 }, "ca")
            .from("#bgray", {width: "9%", height:"18%", rotate: "0deg", top: "-101.4%", left: "-42.7%", duration: 1 }, "ca")
            .to("#bwhite", { width: "14.1%", top: "216.5%", left: "6.6%", duration: 1 }, "ca");
        });
        


    // Gsap for Small screen
    mm.add("(max-width: 769px)", () => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".two",
                start: "top 95%",
                end: "bottom 100%",
                scrub: 1,
            }
        });
    
        tl.to("#bwhite", {rotate: "90deg", width: "38%", top: "130%", left: "31%" }, "sizes")
          .to("#wheat", { top: "115%", rotate: "0deg", left: "35%" }, "sizes")
          .to("#rice", { top: "115%", rotate: "0deg", left: "10%" }, "sizes")
          .to("#water", { top: "115.4%", rotate: "0deg", left: "60%" }, "sizes")
          .to("#pomo", { top: "115%", rotate: "180deg", left: "85%" }, "sizes");

          var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".three",
                start: "top 80%",
                end: "bottom 130%",
                scrub: 1,
            }
            });
    
           
    
            tl2.to("#bwhite", {rotate: "360deg", width: "33%", top: "216%", left: "33%", duration: 1 }, "ca");
    });

    

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);
};
ScrollTrigger.refresh();
