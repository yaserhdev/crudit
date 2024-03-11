// Fuction to delete posts
const deleteHandler = async (event) => {
    event.preventDefault();
    if (event.target.matches('.delete-btn')) {
        const post_id = event.target.getAttribute('data-id');
        try {
            const response = await fetch(`/api/posts/${post_id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                document.location.replace('/');
            } else {
                throw new Error('Failed to delete post!');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('Failed to delete post!');
        }
    }
};
// Event listener for delete button
document
    .querySelector('#post-list')
    .addEventListener('click', deleteHandler);