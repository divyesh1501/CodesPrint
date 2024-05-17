function signInUser() {
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pass").value;

    // Retrieve existing users data from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by email
    let user = users.find(user => user.email === email);

    if (!user) {
        alert("User not found!");
        return;
    }

    // Check if the password matches
    if (pass === user.password) {
        alert("Sign in successful!");

        // Store the signed-in user details in sessionStorage
        sessionStorage.setItem("currentUser", JSON.stringify(user));

        // Redirect to user details page
        window.location.href = "User.html";
    } else {
        alert("Incorrect password!");
    }
}

// Check if user is already signed in on page load
window.onload = function() {
    let currentUser = sessionStorage.getItem("currentUser");
    if (currentUser) {
        // If user is signed in, redirect to user details page
        window.location.href = "User.html";
    }
};
