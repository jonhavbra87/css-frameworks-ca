import { appendPosts } from "../templates/appendPosts.mjs";
import { filterByComments } from "../templates/filterByComments.mjs";

export function filterByReactionsSwitch(posts, container) {
    const switchReactions = document.getElementById("switchReactions");
    switchReactions.addEventListener("change", () => {
        console.log("Switch toggled:", switchReactions.checked); 
        container.innerHTML = ''; 
        if (switchReactions.checked) {
            const filteredPosts = filterByComments(posts);  
            appendPosts(filteredPosts, container);  
        } else {
            appendPosts(posts, container); 
        }
    });
}
