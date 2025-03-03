import { appendPosts } from "../templates/appendPosts.mjs";
import { filterByReactions } from "../utilities/filterByReactions.mjs";

export function filterByReactionsSwitch(posts, container) {
    const switchReactions = document.getElementById("switchReactions");
    switchReactions.addEventListener("change", () => {
        container.innerHTML = ''; 
        if (switchReactions.checked) {
            const filteredPosts = filterByReactions(posts);
            appendPosts(filteredPosts, container);
        } else {
            appendPosts(posts, container); 
        }
    });
}
