import { API_SOCIAL_URL } from "../api/constants.mjs";
import { doFetch } from "../api/helpers/doFetch.mjs";
import { appendPosts } from "./appendPosts.mjs";
import { displayErrorProfilePosts } from "./displayErrorProfilePosts.mjs";

const author = "?_author=true"
const comment = "&_comments=true"
const reactions = "&_reactions=true"
const action = "/profiles";
const profilePosts = "/posts";
/**
 * Fetches and displays profile posts. If no posts are found, displays a "Not any posts posted yet" message.
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
            console.log("No posts found or failed to load posts.");
            return;
        }
        appendPosts(posts, container);
    } catch (error) {
        console.error("Failed to fetch and render posts:", error);
    }
}