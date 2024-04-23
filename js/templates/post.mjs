import { removePost } from "../api/posts/delete.mjs";
import { reactToPost } from "../ui/reactToPost.mjs";
import { postTemplate } from "./postTemplate.mjs";

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
        try {
            await removePost(postData.id)
        } catch (error) {
            console.log("error delete", error);
        }  
    }

    const reactionContainer = document.createElement("div");
    reactionContainer.className = "reaction-container d-flex justify-content-around mt-2";

    // List of emojis to be used as reactions
    const reactions = ["👍", "❤️", "😂", "🎉", "😢", "🤔"];

    reactions.forEach(symbol => {
        const button = document.createElement("button");
        button.textContent = symbol;
        button.className = "btn btn-light btn-sm";
        button.dataset.postId = postData.id;
        button.dataset.symbol = symbol;
        button.onclick = async (event) => { // Legg til parameter event her
        const button = event.target; // Bruk event.target for å få tak i knappen som ble klikket på
        const postId = button.dataset.postId; // Hent postId fra knappens datasett
        const symbol = button.dataset.symbol; // Hent symbol fra knappens datasett

        const reactionData = await reactToPost(postId, symbol);

        console.log(reactionData);
        };
        reactionContainer.append(button);
    });
    

    buttonContainer.append(editButton, deleteButton, reactionContainer);

    card.append(buttonContainer);

    parent.append(card);
}
