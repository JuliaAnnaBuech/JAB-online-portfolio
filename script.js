document.addEventListener("DOMContentLoaded", function () {
    // Parallax-Effekt für About Me Bilder
    const parallaxItems = document.querySelectorAll(".parallax-item");
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        parallaxItems.forEach((item, index) => {
            let speed = (index + 1) * 0.3;
            item.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    });

    // Navigation Farbwechsel je nach Seite
    const bodyClass = document.body.classList;
    const navLinks = document.querySelectorAll("nav a");
    if (bodyClass.contains("subpage")) {
        navLinks.forEach(link => link.style.color = "white");
    } else {
        navLinks.forEach(link => link.style.color = "black");
    }

    // Lightbox für Portfolio-Bilder
    const portfolioImages = document.querySelectorAll(".categories a");
    portfolioImages.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const imageUrl = this.getAttribute("href");
            openLightbox(imageUrl);
        });
    });

    function openLightbox(imageUrl) {
        let lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100vw";
        lightbox.style.height = "100vh";
        lightbox.style.background = "rgba(0, 0, 0, 0.8)";
        lightbox.style.display = "flex";
        lightbox.style.alignItems = "center";
        lightbox.style.justifyContent = "center";
        lightbox.style.zIndex = "1000";

        let img = document.createElement("img");
        img.src = imageUrl;
        img.style.maxWidth = "90%";
        img.style.maxHeight = "90%";
        img.style.border = "5px solid white";
        img.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.5)";

        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", function () {
            document.body.removeChild(lightbox);
        });
    }
});
