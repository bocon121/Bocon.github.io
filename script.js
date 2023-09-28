document.addEventListener("DOMContentLoaded", function () {
    // Hide the loading screen when the content is fully loaded
    setTimeout(function () {
        document.querySelector(".loading-screen").style.display = "none";
    }, 2000); // Adjust the delay (in milliseconds) as needed

    // Show/hide the "Back to Top" button
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll to top when the button is clicked
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // Scroll Animation
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.7,
    };

    const sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("scroll-animation");
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });
});