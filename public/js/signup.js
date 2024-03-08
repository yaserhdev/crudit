const signupFormHandler = async(event) => {
    // prevents the page from reloading upon submit
    event.preventDefault();


    // grabs values entered in the form fields 
    const name = document.querySelector('#name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if (name && password) {
        // sends a POST request to the server with the data included in the form
        const response = await fetch('/api/users', {
            method: 'POST', 
            body: JSON.stringify({ name, password }),  
            headers: {'Content-Type': 'application/json'}   
        });
        // checks the response status  
        if (response.ok) {
            console.log('Successfully created user');
            // redirects to dashboard after successful account creation
            document.location.replace('/dashboard   ');
        } else {
            alert('Failed to create user');
        }
    };
};
// adds an event listener for when the form is submitted
document.
    querySelector('.signup-form'). 
    addEventListener('submit', signupFormHandler);