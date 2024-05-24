import { getPost } from "../api/posts/getPost.mjs";
import { reactToPost } from "../api/posts/reactToPost.mjs";
import { createCommentsContainer } from "../helpers/create/index.mjs";
import { renderSpecificPost } from "./renderSpecificPost.mjs";

/**
 * Renders a specific post on the page.
 * 
 * This function retrieves the post ID from the current URL, fetches the post data from the API,
 * and renders the post content in the designated container. If the post has comments, 
 * it also creates and appends a comments container.
 * 
 * @async - Asynchronous function
 * @function renderPost - Renders a specific post on the page.
 * @returns {Promise<void>} - A promise that resolves when the post is rendered.
 * @throws {Error} - Throws an error if there is an issue rendering the post.
 */

export async function renderPost() {

  try {
      const url = new URL(location.href);
      let id = url.searchParams.get("id");

      const postData = await getPost(id);

      if (postData) {
          const container = document.querySelector("#post");

          renderSpecificPost(postData, container);

          if (postData._count.comments > 0) {
              const commentsContainer = createCommentsContainer(postData);
              container.append(commentsContainer);
          }
      }
    } catch (error) {
      throw new Error(`Error rendering post: ${error.message}`);
  }
}
