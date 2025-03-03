import { appendPosts } from "../templates/appendPosts.mjs";
import { filterByName } from "../templates/filterByName.mjs";

export function filterByNameListener(posts, container) {
    const filterInputName = document.getElementById("filterButton");
    filterInputName.addEventListener("submit", () => {
        const name = filterInputName.value;
        container.innerHTML = ''; 
        if (name) {
            const filteredPosts = filterByName(posts, name);
            appendPosts(filteredPosts, container);
        } else {
            appendPosts(posts, container); 
        }
    });
}
