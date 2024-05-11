import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

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
export async function commentOnPost(postData, comment) {
    if (!postData || !postData.id || !comment) {
        throw new Error("Post data must include an ID and comment text");
    }

    const action = "/posts";
    const method = "POST";
    const comments = "/comment";
    const commentURL = `${API_SOCIAL_URL}${action}/${postData.id}${comments}`;

    try {
        const response = await authFetch(commentURL, {
            method: method,
            headers: {
                'Content-Type': 'application/json', // Ensure JSON header is set
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}` // Include Authorization header
            },
            body: JSON.stringify({ body: comment }) // Send the comment text
        });

        console.log("response from authFetch inside sendComment:", response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("sendComment result:", result);
        return result;
    } catch (error) {
        console.error("Error while sending comment to post:", error);
        throw error;
    }
}


// import { authFetch } from "../authFetch.mjs";
// import { API_SOCIAL_URL } from "../constants.mjs";


// export async function commentOnPost(postId, comments, replyToId = null) {
//     if (!postId || !comments) {
//         throw new Error("Post data must include an ID");
//     }

//     const action = "/posts";
//     const method = "POST";
//     const comment = "/comment";
//     const commentURL = `${API_SOCIAL_URL}${action}/${postId}${comment}`;


//      // Konstruer forespørselens body basert på API-formatet
//      const requestBody = {
//         body: comments,
//         replyToId: replyToId
//     };

//     try {
//         const response = await authFetch(commentURL, {
//             method: method,
//             headers: {
//                 'Content-Type': 'application/json', // Ensure JSON header is set
//                 'Authorization': `Bearer ${localStorage.getItem("accessToken")}` // Include Authorization header
//             },
//             body: JSON.stringify(requestBody) // Send body and replyToId if available in request body
//         });

//         console.log("response from authFetch inside commentToPost:", response);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.statusText}`);
//         }

//         const result = await response.json();
//         console.log("commentToPost result:", result);
//         return result;
//     } catch (error) {
//         console.error("Error while commenting to post:", error);
//         throw error;
//     }
// }
