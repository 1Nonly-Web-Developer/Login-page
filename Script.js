// Animate the login box when page loads
document.addEventListener('DOMContentLoaded', () => {
    const loginBox = document.querySelector('.login-box');
    setTimeout(() => {
        loginBox.style.opacity = 1;
        loginBox.style.transform = 'translateY(0)';
    }, 500);
});

// Toggle Password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.password-toggle');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = "🙈";  // Change to a closed eye or different emoji
    } else {
        passwordInput.type = "password";
        toggleIcon.textContent = "👁";  // Change back to open eye emoji
    }
}