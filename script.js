// Wait for the HTML document to fully load
document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. NAVBAR SCROLL EFFECT
    // ==========================================
    const navbar = document.getElementById("mainNavbar");
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Auto-close mobile menu on click
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("navbarContent");
    
    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            if (navbarCollapse.classList.contains("show")) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // ==========================================
    // 2. CONTACT FORM VALIDATION
    // ==========================================
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Prevent page refresh on submit
            event.preventDefault();

            // Get inputs
            const nameInput = document.getElementById("contactName");
            const emailInput = document.getElementById("contactEmail");
            const messageInput = document.getElementById("contactMessage");
            const formAlert = document.getElementById("formAlert");

            // Get values
            const nameValue = nameInput.value.trim();
            const emailValue = emailInput.value.trim();
            const messageValue = messageInput.value.trim();

            let isValid = true;
            
            // Get error text containers
            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const messageError = document.getElementById("messageError");

            // Validate Name
            if (nameValue === "") {
                nameInput.classList.add("is-invalid");
                nameError.textContent = "Name is required. Please don't leave it blank.";
                isValid = false;
            } else if (nameValue.length < 3) {
                nameInput.classList.add("is-invalid");
                nameError.textContent = "Name is too short. Please enter at least 3 characters.";
                isValid = false;
            } else {
                nameInput.classList.remove("is-invalid");
                nameInput.classList.add("is-valid");
            }

            // Validate Email
            if (emailValue === "") {
                emailInput.classList.add("is-invalid");
                emailError.textContent = "Email is required. Please don't leave it blank.";
                isValid = false;
            } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
                emailInput.classList.add("is-invalid");
                emailError.textContent = "Please enter a valid email address containing '@' and '.'.";
                isValid = false;
            } else {
                emailInput.classList.remove("is-invalid");
                emailInput.classList.add("is-valid");
            }

            // Validate Message
            if (messageValue === "") {
                messageInput.classList.add("is-invalid");
                messageError.textContent = "Message is required. Please type something.";
                isValid = false;
            } else {
                messageInput.classList.remove("is-invalid");
                messageInput.classList.add("is-valid");
            }

            // If valid, show success
            if (isValid) {
                // Show success message
                formAlert.className = "alert alert-success mb-4";
                formAlert.innerHTML = "<strong>Success!</strong> Thank you, " + nameValue + ". Message sent.";
                formAlert.classList.remove("d-none");

                // Reset form
                contactForm.reset();
                
                // Clear validation classes
                nameInput.classList.remove("is-valid", "is-invalid");
                emailInput.classList.remove("is-valid", "is-invalid");
                messageInput.classList.remove("is-valid", "is-invalid");
            }
        });
    }

});
