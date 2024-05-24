import { getPost } from "../api/posts/getPost.mjs";
import { removePost } from "../api/posts/delete.mjs";

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
            const post = Object.fromEntries(formData.entries());
            post.id = id;

            try {
                const response = await removePost(post);
                return response;
            } catch (error) {
                throw new Error("Failed to delete post", error);
            }
        })
    }
}