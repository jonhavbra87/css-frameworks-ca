import { createCommentForm } from "../helpers/comments/createCommentForm.mjs";

/**
 * Toggles the visibility of the chat input field for submitting comments.
 * 
 * @param {Event} event - The click event triggered by the chat button.
 */

export async function toggleComment(event) {
    const chatButton = event.target.closest('[data-post-id]');
    const postId = chatButton.dataset.postId;

    // Search for existing chat form under chatButton
    let chatForm = document.querySelector(`#comment-form-${postId}`);

    if (chatForm) {
        chatForm.remove(); 
    } else {
        chatForm = createCommentForm(postId);
        chatButton.parentNode.append(chatForm);
    }
}