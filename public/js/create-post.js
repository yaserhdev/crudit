const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    
    if (title && content) {
        // sends a POST request to the server with the data included in the form
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }
        });
        // checks the response status  
        if (response.ok) {
            console.log('Successfully created post!');
            // redirects to dashboard after successful account creation
            document.location.replace('/');
        } else {
            alert('Failed to create post!');
        }
    };
};
document
    .querySelector('#new-post-form')
    .addEventListener('submit', newPostHandler);

