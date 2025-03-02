const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from menu
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');

        // Get the target section
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Smooth scroll to section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
