import { API_SOCIAL_URL } from "../api/constants.mjs";
import { doFetch } from "../api/helpers/doFetch.mjs";
import { appendPosts } from "./appendPosts.mjs";
import { displayErrorProfilePosts } from "../utilities/displayErrorProfilePosts.mjs";

const author = "?_author=true"
const comment = "&_comments=true"
const reactions = "&_reactions=true"
const action = "/profiles";
const profilePosts = "/posts";

/**
 * Fetches and displays posts for a specific profile.
 * 
 * This function retrieves the profile name from the current URL, fetches the posts data 
 * for that profile from the API, and renders the posts in the designated container. 
 * If no posts are found or if there is an error, it displays an error message.
 * 
 * @async - Asynchronous function
 * @function viewProfilePosts - Fetches and displays posts for a specific profile.
 * @returns {Promise<void>} - A promise that resolves when the posts are fetched and rendered.
 * @throws {Error} - Throws an error if there is an issue fetching or rendering the posts.
 */

export async function viewProfilePosts() {
    const container = document.querySelector("#profilePosts");
    container.innerHTML = '';

    // Get the blog post id from the URL
    const url = new URL(location.href);
    const searchParams = url.searchParams;
    const profileName = searchParams.get("name");

    try {
        const posts = await doFetch(`${API_SOCIAL_URL}${action}/${profileName}${profilePosts}${author}${comment}${reactions}`)

        if (!posts) {
            displayErrorProfilePosts();
            return;
        }
        appendPosts(posts, container);
    } catch (error) {
        throw new Error(`Failed to fetch and render profile posts: ${error.message}`);
    }
}