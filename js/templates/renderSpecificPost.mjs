import { buttonContainer } from "../helpers/create/buttonContainer.mjs";
import { postTemplate } from "./postTemplate.mjs";

/**
 * Renders a specific post in the provided parent container.
 * 
 * This function creates a post card using the post data and appends it to the parent container.
 * If the post author is the same as the logged-in user, it also adds action buttons to the post card.
 * 
 * @function renderSpecificPost - Renders a specific post in the provided parent container.
 * @param {Object} postData - The data of the post to be rendered.
 * @param {HTMLElement} parent - The parent container where the post will be appended.
 * @returns {void} - The function does not return a value.
 */

export function renderSpecificPost(postData, parent) {

    const card = postTemplate(postData);
    const name = localStorage.getItem("profile")
    const profile = JSON.parse(name);
 
    const profileName = profile.name;
    const authorName = postData.author.name;

    parent.append(card);

    if (authorName === profileName) {
        const buttons = buttonContainer(postData);
        
        card.append(buttons);
    }
}