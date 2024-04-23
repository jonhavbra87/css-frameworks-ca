import { getPost } from "../api/posts/read.mjs";
import { reactToPost } from "../api/posts/reactToPost.mjs";
import { renderSpecificPostTemplates } from "./post.mjs";


export async function renderPost() {
  console.log("I'm on the post page");

  try {
      // Get the blog post id from the URL
      const url = new URL(location.href);
      let id = url.searchParams.get("id");

      const postData = await getPost(id);
      console.log("postData:", postData);

      if (postData) {
          const container = document.querySelector("#post");
          renderSpecificPostTemplates(postData, container);
          reactToPost(postData.id, '👍');
      } else {
          console.log("No post found with ID:", id);
      }
  } catch (error) {
      //Developer console log
      console.log("Unable to fetch api", error);
  }
}
