// // Initialize the Quill editor
// var editor = new Quill('#editor', {
//   modules: {
//     toolbar: '#toolbar'
//   },
//   theme: 'snow'
// });

// // Get the hidden textarea in the form
// var formContent = document.querySelector('#content');

// // Update the Quill editor content when the form content changes
// editor.on('text-change', function() {
//   formContent.value = editor.root.innerHTML;
// });

// // Update the Quill editor content when the form is submitted
// document.querySelector('#new-post-form').addEventListener('submit', function(event) {
//   // Prevent the default form submission
//   event.preventDefault();
  
//   // Update the hidden textarea value with the Quill editor content
//   formContent.value = editor.root.innerHTML;
  
//   // Submit the form normally
//   this.submit();
// });