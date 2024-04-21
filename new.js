// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


// Function to handle form submission
function submitForm() {
    // Get form inputs
    var name = document.querySelector('#contact input[type="text"]').value;
    var email = document.querySelector('#contact input[type="email"]').value;
    var subject = document.querySelector('#contact input[type="text"]').value;
    var message = document.querySelector('#contact textarea').value;

    // Simple validation
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Assuming you want to perform an AJAX request here, you can customize this part
    // Example AJAX request using fetch API
    fetch('your-server-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
    })
    .then(response => {
        if (response.ok) {
            alert("Form submitted successfully!");
            // Reset form after successful submission
            document.querySelector('#contact form').reset();
        } else {
            alert("Form submission failed. Please try again later.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred. Please try again later.");
    });
}

// Attach click event listener to the "Contact Me" button
document.querySelector('#contact button').addEventListener('click', submitForm);
