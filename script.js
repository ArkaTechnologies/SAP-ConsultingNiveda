// Wait for page to fully load
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(function () {
        loadingScreen.style.opacity = '0';
        setTimeout(function () {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// Navbar scroll behavior
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const navbarbrand = document.querySelector('.navbar-brand');
const navlink = document.querySelector('.nav-link');
const offcanvas = document.querySelector('.offcanvas-nav');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
        navbarbrand.classList.add('scrolled');
        navlink.classList.add('scrolled');
        offcanvas.classList.add('scrolled');


        if (scrollTop > lastScrollTop) {
            // Scroll down - hide navbar
            navbar.style.transform = 'translateY(-100%)';
            navbarbrand.style.transform = 'translateY(-100%)';
            navlink.style.transform = 'translateY(-100%)';
            offcanvas.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up - show navbar
            navbar.style.transform = 'translateY(0)';
            navbarbrand.style.transform = 'translateY(0)';
            navlink.style.transform = 'translateY(0)';
            offcanvas.style.transform = 'translateY(0)';
        }
    } else {
        navbar.classList.remove('scrolled');
        navbarbrand.classList.remove('scrolled');
        navlink.classList.remove('scrolled');
        offcanvas.classList.remove('scrolled');
        
        navbar.style.transform = 'translateY(0)';
        navbarbrand.style.transform = 'translateY(0)';
        navlink.style.transform = 'translateY(0)';
        offcanvas.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;

    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Navbar toggle for mobile
    const navToggle = document.getElementById("navToggle");
    const navbarLinks = document.getElementById("navbarLinks");

    // Toggle open/close
    navToggle.addEventListener("click", () => {
        navbarLinks.classList.toggle("show");
    });

    // Close on scroll
    window.addEventListener("scroll", () => {
        if (navbarLinks.classList.contains("show")) {
        navbarLinks.classList.remove("show");
        }
    });

// Back to top functionality
document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});


// Why-Choose-Us
// Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to handle scroll animation
        function handleScrollAnimation() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                if (isInViewport(element)) {
                    element.classList.add('visible');
                }
            });
        }

        // Initial check on page load
        document.addEventListener('DOMContentLoaded', handleScrollAnimation);
        
        // Check on scroll
        window.addEventListener('scroll', handleScrollAnimation);