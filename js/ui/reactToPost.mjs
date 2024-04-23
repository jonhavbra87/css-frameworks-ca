import { authFetch } from "../api/authFetch.mjs";
import { API_SOCIAL_URL } from "../api/constants.mjs";


export async function reactToPost(postId, symbol) {
    const reactURL = `${API_SOCIAL_URL}/posts/?id=${postId}/react/${symbol}`;
    console.log("React URL:", reactURL);

    try {
        const response = await authFetch(reactURL, { method: 'PUT' });
        console.log("response reactURL:", response);
        const reactionData = await response.json();
        console.log("reactionData:", reactionData);
        return reactionData;
        
    } catch (error) {
        console.error("Failed to react to post:", error);
    }
}
