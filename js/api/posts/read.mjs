import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
import { doFetch } from "../helpers/doFetch.mjs";


const action = "/posts"
const author = "?_author=true"
const comment = "&_comments=true"
const reactions = "&_reactions=true"
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

        console.log(API_SOCIAL_URL + action + author + comment + reactions);
        console.log(posts);
        return posts;
    } catch (error) {
        throw new Error(error)
    }

}


export async function getPost(id) {
    if(!id) {
        throw new Error("Get post requires a postID");
    }

    const getPostURL = `${API_SOCIAL_URL}${action}/${id}${author}`;

    const response = await authFetch(getPostURL);
    console.log(response);
    return await response.json();
}
