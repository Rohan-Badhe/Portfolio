// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

// Function to toggle the menu
function toggleMenu() {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('open');
    body.classList.toggle('no-scroll');
}

// Event listener for menu button
menuBtn.addEventListener('click', toggleMenu);

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !menuBtn.contains(e.target)) {
        toggleMenu();
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        toggleMenu();
    }
});

// Initialize Typed.js for the typing animation
document.addEventListener('DOMContentLoaded', function() {
    const options = {
        strings: [
            'Software Developer',
            'Passionate FullStack Web Developer',
            'Python/Java Programmer',
            'Problem Solver',
            'Web Designer'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        smartBackspace: true
    };
    
    const typed = new Typed('.typed-text', options);
});

// Form submission (prevent default for demo)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (name && email && subject && message) {
            // In a real application, you would send this data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill out all fields');
        }
    });
}

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}); 