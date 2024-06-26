function registerUser() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;

    // Regular expression for name validation (alphabet characters only)
    let nameRegex = /^[A-Za-z\s]+$/;

    // Regular expression for email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for password validation (minimum 8 characters with at least one lowercase, one uppercase, one symbol, and one number)
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[^\s]{8,}$/;

    // Check if any input field is blank
    if (name === "" || email === "" || pass === "" || cpass === "") {
        alert("All fields are required!");
        return;
    }

    // Check name matches the name regex
    if (!nameRegex.test(name)) {
        alert("Name must contain only alphabet characters!");
        return;
    }

    // Check email matches the email regex
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    // Check password matches the password regex
    if (!passwordRegex.test(pass)) {
        alert("Password must contain at least one lowercase alphabet, one uppercase alphabet, one symbol, one number, and be at least 8 characters long!");
        return;
    }

    if (pass !== cpass) {
        alert("Password and Confirm Password do not match!");
        return;
    }

    // Retrieve existing users data from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists
    if (users.some(user => user.email === email)) {
        alert("User with this email already exists!");
        return;
    }

    // Add the new user to the existing array
    users.push({
        name: name,
        email: email,
        password: pass
    });

    // Store the updated array back in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("User registered successfully!");

    // Store registration status
    localStorage.setItem("registered", "true");

    // Check registration status and redirect if necessary
    checkRegistrationStatus();
}

function checkRegistrationStatus() {
    let registered = localStorage.getItem("registered");
    if (registered === "true") {
        window.location.href = "SignInForm.html";
    }
}

// Initial check for registration status on page load
// window.onload = checkRegistrationStatus;
