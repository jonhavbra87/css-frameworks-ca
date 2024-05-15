import { getPost } from "../api/posts/getPost.mjs";
import { reactToPost } from "../api/posts/reactToPost.mjs";
import { createCommentsContainer } from "../helpers/create/index.mjs";

import { renderSpecificPostTemplates } from "./post.mjs";

//fetching med loop, 500 stk, så filtrere.

export async function renderPost() {

  try {
      // Get the blog post id from the URL
      const url = new URL(location.href);
      let id = url.searchParams.get("id");

      const postData = await getPost(id);

      if (postData) {
          const container = document.querySelector("#post");

          renderSpecificPostTemplates(postData, container);

          if (postData._count.comments > 0) {
              const commentsContainer = createCommentsContainer(postData);
              container.append(commentsContainer);
          }
      }
    } catch (error) {
      throw new Error(`Error rendering post: ${error.message}`);
  }
}
