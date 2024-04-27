import { appendPosts } from "../templates/appendPosts.mjs";
import { filterByComments } from "../templates/filterByComments.mjs";

export function filterByCommentsSwitch(posts, container) {
    const SwitchComments = document.getElementById("SwitchComments");
    SwitchComments.addEventListener("change", () => {
        console.log("Switch toggled:", SwitchComments.checked); 
        container.innerHTML = ''; 
        if (SwitchComments.checked) {
            const filteredPosts = filterByComments(posts);  
            appendPosts(filteredPosts, container);  
        } else {
            appendPosts(posts, container); 
        }
    });
}
