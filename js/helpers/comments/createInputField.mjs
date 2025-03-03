/**
 * Creates an input field for the comment form.
 * 
 * @param {string} postId - The ID of the post to comment on.
 * @returns {HTMLInputElement} - The created input field element.
 */
export function createInputField(postId) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.className = "comment-input";
    inputField.placeholder = "Write a comment...";
    inputField.dataset.postId = postId;

    return inputField;
}