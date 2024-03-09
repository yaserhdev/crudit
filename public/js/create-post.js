const loginFormHandler = async (event) => {
    event.preventDefault();
    
    document.location.replace('/dashboard');  //redirect to dashboard page after logging in
}
document
    .querySelector('.new-comment-form')
    .addEventListener('submit', loginFormHandler);