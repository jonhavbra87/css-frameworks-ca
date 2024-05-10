import { API_SOCIAL_URL } from "../constants.mjs";
import { doFetch } from "../helpers/doFetch.mjs";


export const action = "/posts"
export const author = "?_author=true"
export const comment = "&_comments=true"
export const reactions = "&_reactions=true"
const tag = "?_tag=my_tag"
const commentReply = "/comment"

/**
 * Fetches posts from a social API with detailed query parameters to include authors, comments, and reactions.
 * The function constructs a URL using constants and parameters defined at module level and sends a fetch request
 * using the `doFetch` utility function. If the fetch fails, it throws an error with the failed reason.
 * 
 * @returns {Promise<Object>} A Promise that resolves to the fetched posts data.
 * @throws {Error} Throws an Error object with a message if the fetch operation fails.
 */

export async function getPosts() {
    // const updatePostURL = `${API_SOCIAL_URL}${action}${author}`;
    try {
        const posts = await doFetch(API_SOCIAL_URL + action + author + comment + reactions);
        console.log(posts);
        return posts;
    } catch (error) {
        throw new Error(error)
    }
}
