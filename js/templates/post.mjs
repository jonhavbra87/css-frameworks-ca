import { removePost } from "../api/posts/delete.mjs";
import { reactionListener } from "../listeners/reaction.mjs";
import { reactToPost } from "../api/posts/reactToPost.mjs";
import { postTemplate } from "./postTemplate.mjs";
import { createReaction } from "../helpers/create/createReactions.mjs";

export function renderSpecificPostTemplates(postData, parent) {
    const card = postTemplate(postData);
    
    const buttonContainer = document.createElement ("div")
    buttonContainer.classList.add("d-flex", "justify-content-around", "align-content-center", "p-2")

    //Add button for edit post
    const editButton = document.createElement("a");
    editButton.href = `/post/edit/?id=${postData.id}`
    editButton.textContent = "Edit Post";
    editButton.classList.add("btn", "btn-primary", "mx-1", "px-3", "py-2", "text-center");

    //Add button for deleting a post
    const deleteButton = document.createElement("a");
    deleteButton.textContent = "Delete Post";
    deleteButton.classList.add("btn", "btn-danger", "mx-1");
    deleteButton.setAttribute("post-id", postData.id);
    deleteButton.onclick = async () => {
        if (confirm("Are you sure you want to delete this post?")) {
            try {
                await removePost(postData.id);
                alert("Post deleted successfully!");
                location.href = "/posts/";
            } catch (error) {
                console.error("Error deleting post", error);
                alert("Failed to delete the post."); 
            }
        }
    }

    // const reactionContainer = document.createElement("div");
    // reactionContainer.className = "reaction-container d-flex justify-content-around mt-2";

    // List of emojis to be used as reactions
    // const reactions = ["👍", "❤️", "😂", "🎉", "😢", "🤔"];

    // reactions.forEach(symbol => {
    //     const button = document.createElement("button");
    //     button.textContent = symbol;
    //     button.className = "btn btn-light btn-sm";
    //     button.dataset.postId = postData.id;
    //     button.dataset.symbol = symbol;
    //     button.addEventListener('click', reactionListener); // Attaching event listener directly
    //     reactionContainer.append(button);
    // });

    const reactionContainer = createReaction(postData.id);
    card.append(reactionContainer);

    buttonContainer.append(editButton, deleteButton);

    card.append(buttonContainer);

    parent.append(card);
}
