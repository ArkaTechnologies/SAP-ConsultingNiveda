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

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        navbar.classList.add('scrolled');

        if (scrollTop > lastScrollTop) {
            // Scroll down - hide navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up - show navbar
            navbar.style.transform = 'translateY(0)';
        }
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.transform = 'translateY(0)';
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

// Contact modal functionality
const contactLinks = document.querySelectorAll('#contact-link, #contact-btn, #contact-btn-2, #demo-btn, #demo-btn-2');
const contactModal = document.getElementById('contact-modal');
const closeModal = document.getElementById('close-modal');

contactLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', function () {
    contactModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
contactModal.addEventListener('click', function (e) {
    if (e.target === contactModal) {
        contactModal.classList.remove('active');
        document.body.style.overflow = 'auto';
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