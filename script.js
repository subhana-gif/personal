document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#navbar .nav-link');

    // Add active class to Home link by default
    navLinks.forEach(link => {
        if (link.getAttribute('href') === '#home') {
            link.classList.add('active');
        }
    });

    // Add click event listeners to all nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to the clicked link
            this.classList.add('active');
            
            // Optional: Scroll to the section corresponding to the clicked link
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


 



document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('gform');
    const emailInput = form.elements['email'];
    const emailError = document.getElementById('emailError');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Validate the form fields
        if (validateForm()) {
            // Submit the form via AJAX
            submitForm();
        }
    });

    function validateForm() {
        const name = form.elements['name'].value.trim();
        const email = form.elements['email'].value.trim();
        const message = form.elements['message'].value.trim();

        // Reset error messages
        emailError.textContent = '';

        // Basic validation: Check if required fields are not empty
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return false;
        }

        // Additional email validation using regex
        const emailRegex = /^[^\s@]+@gmail\.com$/;
if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid Gmail address.';
    return false;
}


        // Validation passed
        return true;
    }

    function submitForm() {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzsJuCugbDc8z_TUT8E5BP9kVieZVlc6g7HqukHmO3CzI5X53gJzi0NZSRhuc0JXAdC/exec",
            data: $(form).serialize(),
            method: "POST",
            success: function (response) {
                alert("Form submitted successfully");
                form.reset(); // Reset the form after successful submission
            },
            error: function (err) {
                alert("Something went wrong. Please try again.");
            }
        });
    }

    // Custom email validation on input event
    emailInput.addEventListener('input', function () {
        const email = emailInput.value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
        } else {
            emailError.textContent = '';
        }
    });
});




