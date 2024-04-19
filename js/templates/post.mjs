import { removePost } from "../api/posts/delete.mjs";
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


    buttonContainer.append(editButton, deleteButton);

    card.append(buttonContainer);

    parent.append(card);
}
