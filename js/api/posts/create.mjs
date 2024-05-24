import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";
const method = "POST";

export async function createPost(postData) {
    if (!postData) {
        throw new Error(`Create post requires a post object`);
    }
try {
      const createPostURL = API_SOCIAL_URL + action;
      const response = await authFetch(createPostURL, {
          method,
          body: JSON.stringify(postData)
      });

      const result = await response.json();

      window.location.href = "/posts/";
    
      return result;

  } catch (error) {
    throw new Error(`${response.statusText}`);
  }

}