export function reactionButton() {
    document.addEventListener("click", async (event) => {
        if (event.target.id === "likeButton") {
            console.log("Reaction button clicked");
            const postId = event.target.getAttribute("post-id");
            const reactionSymbol = "❤️";  // Definerer symbolet som skal sendes

            try {
                const reactionData = await reactToPost(postId, reactionSymbol);  // Sender symbol som en parameter
                const likeCountElement = document.getElementById("likeCount");
                likeCountElement.textContent = reactionData.count;  // Oppdaterer antallet på siden
            } catch (error) {
                console.error("Failed to react to post", error);
            }
        }
    });
}
