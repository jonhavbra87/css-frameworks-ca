import { getPost } from "../api/posts/read.mjs";
import { reactToPost } from "../ui/reactToPost.mjs";
import { renderSpecificPostTemplates } from "./post.mjs";


export async function renderPost() {
    console.log("I'm on the post page");

    try {
      // Get the blog post id from the URL
    const url = new URL(location.href);
    let id = url.searchParams.get("id");

    const post = await getPost(id);
    console.log(post);

    const container = document.querySelector("#post");
    renderSpecificPostTemplates(post, container);
    post.forEach(postData => {
      reactToPost(postData.id, '👍');
  });

    } catch (error) {
        //Developer console log
        console.log("Unable to fetch api", error);
    }
}