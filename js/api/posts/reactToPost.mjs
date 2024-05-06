import { load } from "../../storage/index.mjs";
import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "put";
const react = "/react"
const reaction = "❤️";

export async function reactToPost(postId) {
    const reactURL = `${API_SOCIAL_URL}${action}/${postId}${react}/${reaction}`;
    console.log("reactURL:", reactURL);
    try {
        const response = await authFetch(reactURL, {
            method: method,

        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.statusText}`);
        }

        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.error("Error while reacting to post:", error);
        throw error; 
    }

}
