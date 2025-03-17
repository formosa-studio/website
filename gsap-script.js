gsap.registerPlugin(ScrollTrigger);

        let horizontalSection = document.querySelector(".horizontal-section");

        gsap.to(horizontalSection, {
            x: () => -(horizontalSection.scrollWidth - window.innerWidth) + "px",
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontal-wrapper",
                start: "top top",
                end: () => "+=" + (horizontalSection.scrollWidth - window.innerWidth),
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });

        gsap.utils.toArray(".panel").forEach((panel, index) => {
            gsap.to(panel, {
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: panel,
                    start: "left 80%",
                    toggleActions: "play none none none"
                }
            });
        });

        gsap.to(".line-left", {
            height: "100%",
            duration: 1.5,
            scrollTrigger: {
                trigger: ".route-section",
                start: "top center",
                toggleActions: "play none none none"
            }
        });

        gsap.to(".line-right", {
            height: "100%",
            duration: 1.5,
            scrollTrigger: {
                trigger: ".route-section",
                start: "top center",
                toggleActions: "play none none none"
            }
        });

        gsap.to(".line-horizontal-left", {
            width: "60vw",
            duration: 1.5,
            scrollTrigger: {
                trigger: ".route-section",
                start: "top center",
                toggleActions: "play none none none"
            }
        });

        gsap.to(".line-horizontal-right", {
            width: "60vw",
            duration: 1.5,
            scrollTrigger: {
                trigger: ".route-section",
                start: "top center",
                toggleActions: "play none none none"
            }
        });

let lastScrollY = window.scrollY;
        let navbar = document.getElementById("navbar");
        let isHidden = false;

        window.addEventListener("scroll", () => {
            if (window.scrollY > lastScrollY && !isHidden) {
                gsap.to(navbar, { top: "-80px", duration: 0.5, ease: "power2.out" });
                isHidden = true;
            } else if (window.scrollY < lastScrollY && isHidden) {
                gsap.to(navbar, { top: "10px", duration: 0.5, ease: "power2.out" });
                isHidden = false;
            }
            lastScrollY = window.scrollY;
        });
