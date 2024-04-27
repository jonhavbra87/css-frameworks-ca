import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
import { doFetch } from "../helpers/doFetch.mjs";

const action = "/posts"
const author = "?_author=true"
const comment = "&_comments=true"
const reactions = "&_reactions=true"
const tag = "?_tag=my_tag"


export async function getPosts() {
    // const updatePostURL = `${API_SOCIAL_URL}${action}${author}`;
    try {
        const posts = await doFetch(API_SOCIAL_URL + action + author + comment + reactions);
        console.log(API_SOCIAL_URL + action + author + comment + reactions);
        return posts;
    } catch (error) {
        throw new Error(error)
    }

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
