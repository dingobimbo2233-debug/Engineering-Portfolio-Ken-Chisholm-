/* ==========================================
   Portfolio Website JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Cached Elements
    ========================================== */

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".nav-links a");

    const quickLinks = document.querySelectorAll("#quick-nav a");

    const header = document.querySelector("header");

    /* ==========================================
       Navbar Shadow
    ========================================== */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 2px 20px rgba(0,0,0,0.08)";

        }

        else {

            header.style.boxShadow = "none";

        }

    });

    /* ==========================================
       Active Navigation
    ========================================== */

    function updateNavigation() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const bottom = top + section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < bottom) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

        quickLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateNavigation);

    updateNavigation();

    /* ==========================================
       Fade In Animation
    ========================================== */

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                    }

                });

            },

            {

                threshold: 0.15

            }

        );

        document.querySelectorAll(".content-section")
            .forEach(section => {

                section.classList.add("hidden");

                observer.observe(section);

            });

    }

});