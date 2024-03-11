// var _ = require('lodash');
// Function to signup
const signupFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-signup').value.trim();
    const name = document.querySelector('#name-signup').value.trim();
    // const name = _.upperFirst(document.querySelector('#name-signup').value.trim());
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if (email && name && username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, name, username, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('Successfully created user!');
            document.location.replace('/');
        } else {
            alert('Failed to create user!');
        }
    };
};
// Event listener for signup
document.
    querySelector('.signup-form').
    addEventListener('submit', signupFormHandler);