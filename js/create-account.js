document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('createAccountForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        if (username.value.trim() === '') {
            isValid = false;
            usernameError.textContent = "Le nom d'utilisateur est requis.";
            username.classList.add('invalid');
        } else {
            usernameError.textContent = '';
            username.classList.remove('invalid');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            isValid = false;
            emailError.textContent = "L'email est requis.";
            email.classList.add('invalid');
        } else if (!emailRegex.test(email.value.trim())) {
            isValid = false;
            emailError.textContent = "Veuillez entrer une adresse e-mail valide.";
            email.classList.add('invalid');
        } else {
            emailError.textContent = '';
            email.classList.remove('invalid');
        }

        if (password.value.trim() === '') {
            isValid = false;
            passwordError.textContent = "Le mot de passe est requis.";
            password.classList.add('invalid');
        } else if (password.value.length < 6) {
            isValid = false;
            passwordError.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
            password.classList.add('invalid');
        } else {
            passwordError.textContent = '';
            password.classList.remove('invalid');
        }

        if (confirmPassword.value.trim() === '') {
            isValid = false;
            confirmPasswordError.textContent = "Veuillez confirmer votre mot de passe.";
            confirmPassword.classList.add('invalid');
        } else if (password.value !== confirmPassword.value) {
            isValid = false;
            confirmPasswordError.textContent = "Les mots de passe ne correspondent pas.";
            confirmPassword.classList.add('invalid');
        } else {
            confirmPasswordError.textContent = '';
            confirmPassword.classList.remove('invalid');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});