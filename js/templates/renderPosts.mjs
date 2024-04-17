import { getPosts } from "../api/posts/read.mjs";
import { renderAllPostsTemplates } from "./posts.mjs";


export async function renderPosts() {
    console.log("I'm on the posts page");
    const posts = await getPosts();

    const container = document.querySelector("#posts");
    renderAllPostsTemplates(posts, container);
    console.log(posts);
}