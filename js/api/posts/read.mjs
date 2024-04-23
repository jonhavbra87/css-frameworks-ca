import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts"
const author = "/?_author=true"
const tag = "?_tag=my_tag"


export async function getPosts() {
    const updatePostURL = `${API_SOCIAL_URL}${action}${author}`;

    const response = await authFetch(updatePostURL)
    return await response.json();
}


export async function getPost(id) {
    if(!id) {
        throw new Error("Get post requires a postID");
    }

    const getPostURL = `${API_SOCIAL_URL}${action}/${id}${author}`;

    const response = await authFetch(getPostURL)
    console.log(response);

    return await response.json();
}
