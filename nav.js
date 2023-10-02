const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    toggleMenu();
});

links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu();
        }
    });
});

function toggleMenu() {
    // Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    // Hamburger Animation
    hamburger.classList.toggle("toggle");
}

document.addEventListener('DOMContentLoaded', function() {
    function centerOnClick(buttonId, sectionId) {
        const button = document.getElementById(buttonId);
        const section = document.getElementById(sectionId);

        if (!button || !section) return; // exit if elements are not found

        button.addEventListener('click', function(e) {
            e.preventDefault();

            window.scrollTo({
                top: section.offsetTop - (window.innerHeight - section.offsetHeight) / 2,
                behavior: 'smooth'
            });
        });
    }

    // Usage example:
    centerOnClick('contactBtn', 'contactSectionId');
    centerOnClick('contactBtn1', 'contactSectionId');
    centerOnClick('contactBtn2', 'contactSectionId');
    centerOnClick('contactBtn3', 'contactSectionId');
    centerOnClick('aboutBtn', 'aboutSectionId');
    centerOnClick('galleryBtn', 'gallerySectionId');
    centerOnClick('serviceBtn', 'serviceSectionId');

});