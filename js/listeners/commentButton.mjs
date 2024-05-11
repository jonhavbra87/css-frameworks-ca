// Purpose: To listen for the comment button click event and handle it.

export async function commentButton() {
    document.addEventListener("click", async (event) => {
        if (event.target.id === "chatButton") {
            console.log("comment button clicked");

            const postId = event.target.getAttribute("data-post-id");

            if (!postId) {
                console.error("No post ID found on the button");
                return;
            }
            try {
                // toggleChat(event)
            } catch (error) {
                console.error("Failed to submit comment:", error);
            }
        }
    });
}