import { removePost } from "../api/posts/delete.mjs";
import { postTemplate } from "./postTemplate.mjs";

export function renderSpecificPostTemplates(postData, parent) {
    const card = postTemplate(postData);
    
    //Add button for edit post
    const editButton = document.createElement("a");
    editButton.href = `/post/edit/?id=${postData.id}`
    editButton.textContent = "Edit Post";
    editButton.classList.add("btn", "btn-primary", "mx-1");

    //Add button for deleting a post
    const deleteButton = document.createElement("a");
    deleteButton.textContent = "Delete Post";
    deleteButton.classList.add("btn", "btn-danger", "mx-1");
    deleteButton.setAttribute("data-id", postData.id);
    deleteButton.onclick = async () => { removePost() }


    card.append(editButton, deleteButton);

    parent.append(card);
}
