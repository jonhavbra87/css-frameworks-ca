import { appendPosts } from "../templates/appendPosts.mjs";
import { filterByReactions } from "../templates/filterByReactions.mjs";

export function filterByReactionsSwitch(posts, container) {
    const switchReactions = document.getElementById("switchReactions");
    switchReactions.addEventListener("change", () => {
        console.log("Switch toggled:", switchReactions.checked); 
        container.innerHTML = ''; 
        let filteredPosts;
        if (switchReactions.checked) {
            filteredPosts = filterByReactions (posts);  
            
        } else {
            appendPosts(posts, container); 
        }
        appendPosts(filteredPosts, container); 
    });
}
