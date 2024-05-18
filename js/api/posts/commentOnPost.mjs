/**
 * Sends a comment to a post.
 * 
 * @async - Asynchronous function that ensures the function returns a promise.
 * @function - Function declaration.
 * @param {Object} postData - The data object containing post ID.
 * @param {string} comment - The comment text to be sent.
 * @throws {Error} If the HTTP request fails.
 * @returns {Promise<Object>} A promise that resolves to the comment result.
 */

import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "POST";
const theComment = "/comment";


export async function commentOnPost(postId, comment) {
    if (!postId || !comment) {
        throw new Error(`Post ID and comment text are required. Received postId: ${postId}, comment: ${comment}`);
    }

    const commentURL = `${API_SOCIAL_URL}${action}/${postId}${theComment}`;
    console.log("Comment URL:", commentURL); 
    console.log("Sending comment:", comment); 

    try {
        const response = await authFetch(commentURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ body: comment })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Comment submitted successfully:", result);
        return result;
    } catch (error) {
        console.error("Error while sending comment to post:", error);
        throw error;
    }
}