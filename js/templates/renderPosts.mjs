import { getPosts } from "../api/posts/read.mjs";
import { renderAllPostsTemplates } from "./posts.mjs";

export async function renderPosts() {
    console.log("I'm on the posts page");
    const container = document.querySelector("#posts");
    container.innerHTML = '';

    try {
        const posts = await getPosts(); 
        console.log(posts);
        renderAllPostsTemplates(posts, container);
    } catch (error) {
        console.error("Failed to fetch and render posts:", error);
    }


}
