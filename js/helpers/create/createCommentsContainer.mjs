
import { createCommentElement } from "./createCommentElement.mjs";

export function createCommentsContainer(postData) {
  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("container", "m-3", "mx-auto", "py-3", "d-flex", "flex-wrap", "align-items-center", "justify-content-center");
  commentsContainer.id = "comments-container";

  // Render eksisterende kommentarer
  if (postData.comments && postData.comments.length > 0) {
      postData.comments.forEach(comment => {
          const commentElement = createCommentElement(comment);
          commentsContainer.append(commentElement);
      });
  }

  return commentsContainer;
}
