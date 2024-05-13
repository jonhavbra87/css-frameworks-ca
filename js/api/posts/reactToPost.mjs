import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

/**
 * Reacts to a post with a heart reaction.
 * 
 * @async - Asynchronous function that insures the function returns a promise.
 * @function - Function declaration. 
 * @param {Object} postData - The data object containing post ID.
 * @param {string} [reaction='❤️'] - The reaction symbol to use. Symbol: ❤️
 * @throws {Error} If the HTTP request fails.
 * @returns {Promise<Object>} A promise that resolves to the reaction result.
 */

export async function reactToPost(postData, reaction = "❤️") {
    if (!postData || !postData.id) {
        throw new Error("Post data must include an ID");
    }

    const action = "/posts";
    const method = "PUT";
    const react = "/react";
    const reactURL = `${API_SOCIAL_URL}${action}/${postData.id}${react}/${reaction}`;

    try {
        const response = await authFetch(reactURL, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}` // Include Authorization header
            },
            body: JSON.stringify({}) 
        });

        console.log("response from authFetch inside reactToPost:", response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("reactToPost result:", result);
        return result;
    } catch (error) {
        console.error("Error while reacting to post:", error);
        throw error;
    }
}