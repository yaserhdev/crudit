const CommentFormHandler = async function (event) {
    /* Stop the form from submitting normally */
    event.preventDefault();

    const blog_id = document.querySelector('.new-comment-form').dataset.blog_id;

    const comment_description = document.querySelector('#comment-description').value.trim();
    
    if(comment_description === ''){
        await fetch('/api/comments', {
            method: 'post', 
            body: JSON.stringify({'blog_id': blog_id}),
            headers: {'Content-Type':'application/json'}
        })
        .then(data => {
            console.log('Failed to post a new comment');
        });
    document.location.reload();
    }
};


document
    .querySelector('.new-comment-form')
    .addEventListener('submit', CommentFormHandler);