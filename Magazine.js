// Font size toggle
const articleText = document.querySelector('main');
const toggleButton = document.querySelector('#toggle-button');

let isLargeFont = false;

toggleButton.addEventListener('click', () => {
    isLargeFont = !isLargeFont;
    articleText.style.fontSize = isLargeFont ? '18px' : '16px';
});

// Comment functionality (You'll need to create an HTML form for this)
const commentForm = document.querySelector('#comment-form');
const commentList = document.querySelector('#comment-list');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentInput = document.querySelector('#comment-input');
    const comment = commentInput.value;

    // Create a new comment element and append it to the comment list
    const newComment = document.createElement('p');
    newComment.textContent = comment;
    commentList.appendChild(newComment);

    // Clear the input field
    commentInput.value = '';
});
