import * as helpers from "../../helpers/create/index.mjs"


export function createCommentElement(comment) {

    const commentCard = helpers.createCardContainer(comment);
    commentCard.classList.add("card", "bg-secondary", "m-2", "border-3", "rounded-3", "p-3", "text-white", "col-12", "col-md-8", "col-lg-6", "mx-auto");

    const commentBody = helpers.createCardBodyContainer(comment);

    const userInfo = helpers.createUserInfoContainer(comment);
    userInfo.classList.add();
    commentBody.append(userInfo);

    const commentText = document.createElement("h3");
    commentText.classList.add("card-text", "text-center", "fst-italic", "mb-1", "py-3", "capitalize");
    commentText.textContent = comment.body;



    commentBody.append(commentText);
    commentCard.append(commentBody);

    return commentCard;
}