// ===========================
// Site Initialization
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================
    // Update Copyright Year
    // ===========================
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('year');
    
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // ===========================
    // Mobile Navigation Toggle
    // ===========================
    const navToggle = document.getElementById('nav-toggle');
    const siteNav = document.getElementById('site-nav');
    
    if (navToggle && siteNav) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded attribute
            navToggle.setAttribute('aria-expanded', String(!isExpanded));
            
            // Toggle navigation visibility
            siteNav.classList.toggle('show');
        });
    }

    // ===========================
    // Contact Form Validation
    // ===========================
    const contactForm = document.querySelector('form.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form field values
            const nameField = contactForm.querySelector('[name="name"]');
            const emailField = contactForm.querySelector('[name="email"]');
            const messageField = contactForm.querySelector('[name="message"]');
            
            const name = nameField.value.trim();
            const email = emailField.value.trim();
            const message = messageField.value.trim();
            
            // Validate all fields are filled
            if (!name || !email || !message) {
                alert('Please fill all fields.');
                return;
            }
            
            // Success message (no backend configured)
            alert(`Thanks ${name} — message ready to be sent (no backend configured).`);
            
            // Reset form after submission
            contactForm.reset();
        });
    }
});
