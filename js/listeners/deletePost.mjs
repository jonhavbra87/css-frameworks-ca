import { getPost } from "../api/posts/read.mjs";
import { removePost } from "../api/posts/delete.mjs";


//make the old post data appear in the form. 
//This is done by getting the post data from the API and then setting the value of the form fields to the data from the API.


export async function setDeletePostListener() {
    const form = document.querySelector("#deletePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const button = form.querySelector("button");
        button.disabled = true;

        const post = await getPost(id);

        button.disabled = false;

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
            console.log("I'm going to delete a post with the following data: ", post)
            post.id = id;

            try {
                const response = await removePost(post);
                console.log("Post deleted successfully", response);
            } catch (error) {
                console.error("Failed to delete the post:", error);
            }
        })
    }
}