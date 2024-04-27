import { getPosts } from "../api/posts/read.mjs";

import { appendPosts } from "./appendPosts.mjs";
import { filterButton } from "../listeners/filterButton.mjs";
import { filterByComments } from "./filterByComments.mjs";
import { filterByCommentsSwitch } from "../listeners/filterByCommentsSwitch.mjs";


export async function renderPosts() {
    console.log("I'm on the posts page");
    const container = document.querySelector("#posts");
    container.innerHTML = '';

    const posts = await getPosts();
    console.log(posts); 
    try {
        // console.log(posts);
        appendPosts(posts, container);
        filterButton(posts);
        filterByCommentsSwitch(posts, container);
    } catch (error) {
        console.error("Failed to fetch and render posts:", error);
    }


}

//posData.reactions.lenght
//postDAta.reactions.lenght når lengden er mer enn 0 så skal den vises