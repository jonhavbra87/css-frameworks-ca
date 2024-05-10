import { getPosts } from "../api/posts/getPosts.mjs";
import { appendPosts } from "./appendPosts.mjs";
import { filterButton } from "../listeners/filterButton.mjs";
import { filterByCommentsSwitch } from "../listeners/filterByCommentsSwitch.mjs";
import { filterByReactionsSwitch } from "../listeners/filterByReactionsSwitch.mjs";


export async function renderPosts() {
    console.log("I'm on the posts page");
    const container = document.querySelector("#posts");
    container.innerHTML = '';

  
    //console.log(posts); 
    try {
        const posts = await getPosts();
        if (!posts || !posts.length) {
            console.log("No posts found or failed to load posts.");
            return;
        }
        appendPosts(posts, container);
        filterButton(posts);
        filterByCommentsSwitch(posts, container);
        filterByReactionsSwitch(posts, container);
    } catch (error) {
        console.error("Failed to fetch and render posts:", error);
    }


}

//posData.reactions.lenght
//postDAta.reactions.lenght når lengden er mer enn 0 så skal den vises