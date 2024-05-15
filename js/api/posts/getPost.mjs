import { API_SOCIAL_URL } from "../constants.mjs";
import { doFetch } from "../helpers/doFetch.mjs";
import { action, author, comment, reactions } from "./getPosts.mjs";


/**
 * Fetch a single post from the API using a specified ID.
 * 
 * The function requires a post ID to retrieve a specific post. It fetches
 * the post data, including author information, comments, and reactions.
 * The function returns the post data in JSON format or throws an error if
 * an issue occurs during the request.
 *
 * @async
 * @function
 * @param {number|string} id - The unique identifier of the post to be fetched.
 * @throws {Error} If the `id` is not provided or if an error occurs during fetching.
 * @returns {Promise<Object>} A promise that resolves to the post object.
 **/

export async function getPost(id) {
    if (!id) {
        throw new Error("Get post requires a postID");
    } try {
        const post = await doFetch(`${API_SOCIAL_URL}${action}/${id}${author}${comment}${reactions}`);
        return post;
    } catch (error) {
        throw new Error(error)   
    }
}