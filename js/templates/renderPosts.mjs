import { getPosts } from "../api/posts/read.mjs";
import { filterByName } from "./filterPosts.mjs";
import { appendPosts } from "./appendPosts.mjs";


export async function renderPosts() {
    console.log("I'm on the posts page");
    const container = document.querySelector("#posts");
    container.innerHTML = '';

    const posts = await getPosts(); 
    try {
        // console.log(posts);
        appendPosts(posts, container);
    } catch (error) {
        console.error("Failed to fetch and render posts:", error);
    }

    const filterBtn = document.getElementById("filterButton");
    filterBtn.addEventListener("click", () => {
        const filterQueryElement = document.getElementById("authorNameInput");
        const filterQuery = filterQueryElement.value;
        filterByName(posts, filterQuery);
    })

}

//posData.reactions.lenght
//postDAta.reactions.lenght når lengden er mer enn 0 så skal den vises