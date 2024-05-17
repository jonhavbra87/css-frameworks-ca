import { commentOnPost } from "../../api/posts/commentOnPost.mjs";
import { createCommentsContainer } from "../create/index.mjs";
import { refreshPage } from "../refreshPage.mjs";
import { updateChatCount } from "./updateChatCount.mjs";

/**
 * Handles the comment form submission.
 * 
 * @param {Event} event - The submit event triggered by the comment form.
 * @param {string} postId - The ID of the post to comment on.
 * @param {HTMLFormElement} chatForm - The comment form element.
 */
export async function handleCommentSubmit(event, postId, chatForm) {
    const inputField = chatForm.querySelector(".comment-input");
    const commentText = inputField.value.trim();

    if (commentText) {
        try {
            console.log("Submitting comment:", commentText);
            await commentOnPost(postId, commentText);
            inputField.value = "";
            console.log("Comment submitted successfully");
            alert(`Success! Your comment: ${commentText}`);
            chatForm.remove();
            updateChatCount(postId);
            refreshPage();
            createCommentsContainer(postId);
        } catch (error) {
            alert("Failed to submit comment");
        }
    }
}
