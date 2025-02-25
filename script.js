document.addEventListener("DOMContentLoaded", function() {
    let stoerer = document.querySelector(".interactive-element img");
    if (stoerer) {
        stoerer.addEventListener("click", function() {
            window.location.href = "aboutme.html";
        });
    }

    let navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.color = "gray";
        });
        link.addEventListener("mouseout", function() {
            link.style.color = "black";
        });
    });
});
