import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
    if (!id) {
        throw new Error(`Delete required a postID ${response.text}`);
      }
    
    const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`

    const response = await authFetch(updatePostURL, {
        method
  });


return await response.json();
}