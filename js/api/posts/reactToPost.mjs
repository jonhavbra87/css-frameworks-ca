import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "put";
const react = "/react"

export async function reactToPost(postId, symbol) {
    const reactURL = `${API_SOCIAL_URL}${action}/${postId}${react}/${(encodeURIComponent(symbol))}`;

      // Define the data that should be sent
      const reactionData = {
        reaction: symbol
    };
    
    try {
        const response = await authFetch(reactURL, {
            method: method,
            body: JSON.stringify(reactionData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.statusText}`);
        }

        const result = await response.json();
        console.log(result);
        let likeReaction = result.reactions.find(count);
        return likeReaction ? likeReaction.count : 0; 
    } catch (error) {
        console.error("Error while reacting to post:", error);
        throw error; 
    }

}
