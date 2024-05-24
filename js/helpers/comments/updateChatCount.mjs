/**
 * Updates the chat count for the specified post ID.
 * 
 * @param {string} postId - The ID of the post to update the chat count for.
 */
export function updateChatCount(postId) {
    const chatButton = document.querySelector(`[data-post-id="${postId}"]`);
    const chatCount = chatButton.querySelector(`[data-chat-button="${postId}"]`);
    if (chatCount) {
        const currentCount = parseInt(chatCount.textContent, 10);
        chatCount.textContent = currentCount + 1;
    }
}