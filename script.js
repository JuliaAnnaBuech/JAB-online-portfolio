document.addEventListener("DOMContentLoaded", function () {
    // Parallax-Scrolling für About Me
    const parallaxContainer = document.querySelector(".parallax-container");
    if (parallaxContainer) {
        window.addEventListener("scroll", function () {
            let scrollPosition = window.scrollY;
            document.querySelectorAll(".hover-image").forEach((image, index) => {
                image.style.transform = `translateY(${scrollPosition * 0.2}px)`;
            });

            // Opacity-Änderung für Hintergrund, Quote, Navigation und Header
            const aboutMeSection = document.getElementById("about-me");
            if (scrollPosition > 50) {
                aboutMeSection.style.opacity = "0.5";
            } else {
                aboutMeSection.style.opacity = "1";
            }
        });
    }

    // Smooth-Scrolling für Selected Works (zwischen Kategorien)
    const sections = document.querySelectorAll(".categories");
    if (sections.length > 0) {
        let currentIndex = 0;
        document.addEventListener("wheel", (event) => {
            event.preventDefault();
            if (event.deltaY > 0 && currentIndex < sections.length - 1) {
                currentIndex++;
            } else if (event.deltaY < 0 && currentIndex > 0) {
                currentIndex--;
            }
            sections[currentIndex].scrollIntoView({ behavior: "smooth" });
        }, { passive: false });
    }

    // Lightbox für Portfolio-Bilder
    document.querySelectorAll(".work-gallery a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            lightbox.innerHTML = `<img src="${this.href}" alt="Portfolio Image">`;
            document.body.appendChild(lightbox);
            lightbox.addEventListener("click", () => {
                lightbox.remove();
            });
        });
    });

    // Hover-Effekt für Stoerer (Landing Page)
    const stoererElement = document.querySelector(".interactive-element");
    if (stoererElement) {
        stoererElement.addEventListener("mouseenter", () => {
            document.getElementById("stoerer-click").style.opacity = "1";
        });
        stoererElement.addEventListener("mouseleave", () => {
            document.getElementById("stoerer-click").style.opacity = "0";
        });
    }

    // Hover-Effekt für About Me Images (Quote-Bilder erscheinen)
    document.querySelectorAll(".hover-image").forEach(container => {
        const defaultImg = container.querySelector(".default-img");
        const hoverImg = container.querySelector(".hover-img");

        container.addEventListener("mouseenter", () => {
            defaultImg.style.opacity = "0";
            hoverImg.style.opacity = "1";
        });

        container.addEventListener("mouseleave", () => {
            defaultImg.style.opacity = "1";
            hoverImg.style.opacity = "0";
        });
    });
});
