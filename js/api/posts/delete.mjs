import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "DELETE";

export async function removePost(id) {
    if (!id) {
        throw new Error(`Delete required a postID`);
      }
    try {
    const deletePostURL = `${API_SOCIAL_URL}${action}/${id}`

    const response = await authFetch(deletePostURL, {
        method
  });

  const result = await response.json();
  
  window.location.href = "/posts/";

  return result;

  } catch (error) {

    throw new Error(`${response.statusText}`);
  }

}