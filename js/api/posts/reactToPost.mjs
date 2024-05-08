import { load } from "../../storage/index.mjs";
import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

export async function reactToPost(postData) {
    const action = "/posts";
    const method = "put";
    const react = "/react";
    const reaction = "👍";
    const reactURL = `${API_SOCIAL_URL}${action}/${postData.id}${react}/${reaction}`;

    try {
        const response = await authFetch(reactURL, {
            method: method,
        });
        console.log("response from authfetch inside reactToPost:", response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("reactToPost result", result);
        return result;

    } catch (error) {
        console.error("Error while reacting to post:", error);
        throw error;
    }
}
// export async function reactToPost(postData, reaction) {
//     const action = "/posts";
//     const method = "put";
//     const react = "/react"
//     const reaction = "❤️";
//     const reactURL = `${API_SOCIAL_URL}${action}/${postData.id}${react}/${reaction}`;
//     console.log("reactURL:", reactURL);
//     try {
//         const response = await authFetch(reactURL, {
//             method: method,

//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.statusText}`);
//         }

//         const result = await response.json();
//         console.log(result);
//         return result;
//     } catch (error) {
//         console.error("Error while reacting to post:", error);
//         throw error; 
//     }

// }
