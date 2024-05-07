import { appendPosts } from "../templates/appendPosts.mjs";
import { filterByComments } from "../templates/filterByComments.mjs";

export function filterByCommentsSwitch(posts, container) {
    const switchComments = document.getElementById("switchComments");
    switchComments.addEventListener("change", () => {
        container.innerHTML = ''; 
        if (switchComments.checked) {
            const filteredPosts = filterByComments(posts);  
            appendPosts(filteredPosts, container);  
        } else {
            appendPosts(posts, container); 
        }
    });
}
