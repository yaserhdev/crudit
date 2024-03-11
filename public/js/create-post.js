// Function for creating new posts
const newPostHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('Successfully created post!');
            document.location.replace('/');
        } else {
            alert('Failed to create post!');
        }
    };
};
// Event listener for submit button
document
    .querySelector('#new-post-form')
    .addEventListener('submit', newPostHandler);