function displayUserDetails() {
    // Retrieve current user from sessionStorage
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    // Display user details
    document.getElementById("user-name").textContent = currentUser.name;
    document.getElementById("user-email").textContent = currentUser.email;
}

function signOut() {
    // Clear currentUser from sessionStorage and localStorage
    sessionStorage.removeItem("currentUser");
    // localStorage.removeItem("users");
    
    // Redirect to sign-in page
    window.location.href = "SignInForm.html";
    
    alert("You have been logged out.!");
}

// Check if user is already signed in on page load
window.onload = function () {
    let currentUser = sessionStorage.getItem("currentUser");
    if (currentUser) {
        // If user is signed in, display user details
        displayUserDetails();
    } else {
        // If user is not signed in, redirect to sign-in page
        window.location.href = "SignInForm.html";
    }
};
