import { appendPosts } from "../templates/appendPosts.mjs";
import { filterByComments } from "../utilities/filterByComments.mjs";

/**
 * Sets up a switch to filter posts based on the presence of comments.
 * 
 * This function adds an event listener to a switch element. When the switch is toggled,
 * it filters the provided posts to show only those with comments or all posts, and then
 * appends the resulting posts to the specified container.
 *
 * @function filterByCommentsSwitch - Sets up a switch to filter posts based on the presence of comments.
 * @param {Array} posts - The array of posts to be filtered and displayed.
 * @param {HTMLElement} container - The container element where the posts will be appended.
 * @returns {void} - The function does not return a value.
 
 **/

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
