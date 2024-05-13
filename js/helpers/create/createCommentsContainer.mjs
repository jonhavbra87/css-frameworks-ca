import * as helpers from "../../helpers/create/index.mjs"
import { createCommentElement } from "./createCommentElement.mjs";

export function createCommentsContainer(postData) {

    const card = helpers.createCardContainer(postData);

    const cardBody = helpers.createCardBodyContainer(postData);

    const headerInfo = helpers.createHeaderInfoContainer(postData);

    const userInfo = helpers.createUserInfoContainer(postData);

    const commentsContainer = document.createElement("div");
    commentsContainer.className = "comments-container";
    commentsContainer.id = "comments-container";

      // Render eksisterende kommentarer
    if (postData.comments && postData.comments.length > 0) {
    postData.comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsContainer.append(commentElement);
    });
    }

    headerInfo.append(userInfo);
    cardBody.append(headerInfo, commentsContainer);
    card.append(cardBody);
    
    return card;
}
