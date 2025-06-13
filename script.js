document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile nav if open
            const header = document.querySelector('.header');
            if (header.classList.contains('nav-open')) {
                header.classList.remove('nav-open');
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Update current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Hamburger menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const header = document.querySelector('.header'); // Or body, depending on where you apply the class

    if (navToggle && header) {
        navToggle.addEventListener('click', () => {
            header.classList.toggle('nav-open');
        });

        // Close nav when clicking outside (on the overlay)
        document.addEventListener('click', (event) => {
            if (header.classList.contains('nav-open') && !header.contains(event.target) && event.target !== navToggle) {
                header.classList.remove('nav-open');
            }
        });
    }

    // Optional: Add active class to nav links on scroll (more advanced)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) { // Adjust offset as needed
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});