import { reactToPost } from "../api/posts/reactToPost.mjs";

/**
 * Adds an event listener to the document to handle reactions.
 */
export async function reactionButton() {
    document.addEventListener("click", async (event) => {
        if (event.target.id === "likeButton") {
            console.log("Reaction button clicked");

            const postId = event.target.getAttribute("data-post-id");

            if (!postId) {
                console.error("No post ID found on the button");
                return;
            }

            try {
                const reactionData = await reactToPost({ id: postId });
                console.log("reactionData:", reactionData);

                // Update the like count if available
                const likeCountSpan = event.target.querySelector("span");
                if (likeCountSpan) {
                    likeCountSpan.textContent = reactionData.newReactionCount;
                }
            } catch (error) {
                console.error("Failed to react to post", error);
            }
        }
    });
}