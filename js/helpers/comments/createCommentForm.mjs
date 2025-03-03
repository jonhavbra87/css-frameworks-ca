import { createInputField } from "./createInputField.mjs";
import { createSubmitButton } from "./createSubmitButton.mjs";
import { handleCommentSubmit } from "./handleCommentSubmit.mjs";

/**
 * Creates a new comment form for the specified post ID.
 * 
 * @param {string} postId - The ID of the post to comment on.
 * @returns {HTMLFormElement} - The created comment form element.
 */
export function createCommentForm(postId) {
    const chatForm = document.createElement("form");
    chatForm.id = `comment-form-${postId}`;
    chatForm.className = "comment-form";

    const inputField = createInputField(postId);
    const submitButton = createSubmitButton();

    chatForm.append(inputField, submitButton);

    chatForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        await handleCommentSubmit(e, postId, chatForm);
    });

    return chatForm;
}
