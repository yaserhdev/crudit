// Fuction to edit posts
const editHandler = async (event) => {
    event.preventDefault();
    const updatedTitle = document.querySelector('#updated-title').value.trim();
    const updatedContent = document.querySelector('#updated-content').value.trim();
    if (event.target.matches('.edit-btn')) {
        const post_id = event.target.getAttribute('data-id');
        try {
            const response = await fetch(`/api/posts/${post_id}`, {
                method: 'GET',
                body: JSON.stringify({ updatedTitle, updatedContent }),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                console.log('Successfully updated post!');
                document.location.replace('/');
            } else {
                throw new Error('Failed to update post!');
            }
        } catch (error) {
            console.error('Error updating post:', error);
            alert('Failed to update post!');
        }
    }
};
// Event listener for edit button
document
    .querySelector('#post-list')
    .addEventListener('click', editHandler);