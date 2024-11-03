
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signInForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

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

        if (!isValid) {
            event.preventDefault();
        }
    });
});