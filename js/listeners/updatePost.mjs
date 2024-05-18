import { getPost } from "../api/posts/getPost.mjs";
import { updatePost } from "../api/posts/update.mjs";

/**
 * Sets up an event listener for updating a post.
 * 
 * This function initializes the update post form by populating it with the current post data.
 * It also adds a submit event listener to the form to handle the post update process.
 * 
 * @async - Asynchronous function
 * @function setUpdatePostListener - Sets up an event listener for updating a post.
 * @returns {Promise<void>} - A promise that resolves if the post is updated successfully.
 * @throws {Error} - Throws an error if there is an issue fetching the post or updating the post.
 **/


export async function setUpdatePostListener() {
    const form = document.querySelector("#updatePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const button =  form.querySelector("button");
        button.disabled = true;   

        const post = await getPost(id);

        form.title.value = post.title;
        form.body.value = post.body;
        form.tags.value = post.tags.join(", ");
        form.media.value = post.media;

        button.disabled = false;

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
 
            post.id = id;

            
            if (post.tags) {
                const tagsArray = post.tags = post.tags
                   .split(",")
                   .map((tag) => tag.trim())
                   .filter((tag) => tag !== "");
         
                 post.tags = tagsArray.length > 0 ? tagsArray : [];
               } else {
                 post.tags = [];
               }

            try {
                const response = await updatePost(post); 
                console.log("Post created successfully", response);
            } catch (error) {
                throw new Error("Failed to create the post: " + error);
            }
        })
    }
}
