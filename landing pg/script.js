document.addEventListener("DOMContentLoaded", function() {
    const signinForm = document.getElementById("signin-form");
    const successSection = document.getElementById("success");

    signinForm.addEventListener("submit", function(event) {
        event.preventDefault();
        successSection.style.display = "block";
    });
});
