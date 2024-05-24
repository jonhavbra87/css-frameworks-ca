import { removePost } from "../../api/posts/delete.mjs";

export function buttonContainer(postData) {
    
    const buttonContainer = document.createElement ("div")
    buttonContainer.classList.add("d-flex", "justify-content-around", "align-content-center", "p-2")


    const editButton = document.createElement("a");
    editButton.href = `/post/edit/?id=${postData.id}`
    editButton.textContent = "Edit Post";
    editButton.classList.add("btn", "btn-primary", "mx-1", "px-3", "py-2", "text-center");

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

    buttonContainer.append(editButton, deleteButton);

    return buttonContainer;
}

