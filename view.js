document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".section");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Prevent standard anchor jumping behavior
            e.preventDefault();

            // Remove active status from all navigation tabs
            navLinks.forEach(item => item.classList.remove("active"));
            
            // Add active status to clicked tab
            link.classList.add("active");

            // Grab the target section ID from href attribute (e.g., "#mywork")
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            // Hide all views, then show target section
            sections.forEach(section => {
                section.classList.remove("active-section");
            });
            targetSection.classList.add("active-section");
        });
    });

    // Special trigger link inside the Home section hero banner
    const heroBtn = document.querySelector(".hero-content .btn");
    if (heroBtn) {
        heroBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const workTab = document.querySelector('.nav-item[href="#mywork"]');
            if (workTab) workTab.click();
        });
    }
});
