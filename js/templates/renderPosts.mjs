import { getPosts } from "../api/posts/getPosts.mjs";
import { appendPosts } from "./appendPosts.mjs";
import { filterButton } from "../listeners/filterButton.mjs";
import { filterByCommentsSwitch } from "../listeners/filterByCommentsSwitch.mjs";
import { filterByReactionsSwitch } from "../listeners/filterByReactionsSwitch.mjs";


export async function renderPosts() {
    const container = document.querySelector("#posts");
    container.innerHTML = '';

    try {
        const posts = await getPosts();
        if (!posts || !posts.length) {
            return;
        }
        appendPosts(posts, container);
        filterButton(posts);
        filterByCommentsSwitch(posts, container);
        filterByReactionsSwitch(posts, container);
    } catch (error) {
        throw new Error(`Failed to render posts: ${error.message}`);
    }


}