import { load } from "../storage/index.mjs";

/**
 * Retrieves headers required for authentication.
 * @returns {Promise<Object>} A promise that resolves to the headers object.
 * @throws {Error} If an access token cannot be found.
 */
export async function headers() {
    try {
        // Load access token from storage
        const accessToken = load("accessToken");
        if (!accessToken) {
            console.error("No access token available.");
            throw new Error("No access token available. Please log in to continue.");
        } else {
            console.log("Access token available");
        }

        // Return headers object if token exists
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        };

    } catch (error) {
        // Catch any errors in the token loading process and throw a meaningful error
        console.error("Error retrieving headers:", error.message);
        throw new Error("Unable to retrieve headers due to an access token issue.");
    }
}

/**
 * Makes an authenticated fetch request.
 * @param {string} url - The API URL to make the request to. 
 * @param {Object} [options] - Spreadable options object for the fetch request. Options include method, body, etc.
 * @returns {Promise<Response>} A promise that resolves to the fetch response object.
 * @throws {Error} If there's an error during the fetch request.
 */

export async function authFetch(url, options = {}) {
    try {
        // Resolve headers for authenticated requests
        const resolvedHeaders = await headers();

        // Make the fetch request with the resolved headers
        const response = await fetch(url, {
            ...options,
            headers: resolvedHeaders
        });

        // Check if the response is not OK and throw a specific error
        if (!response.ok) {
            console.error(`Fetch failed with status ${response.status}: ${response.statusText}`);
            throw new Error(`Fetch request failed with status ${response.status} - ${response.statusText}`);
        }

        // Return the response object if successful
        return response;

    } catch (error) {
        // Catch any errors during the fetch process and log them
        console.error("Error during authenticated fetch:", error.message);
        throw new Error("Unable to complete the authenticated request due to an error.");
    }
}
