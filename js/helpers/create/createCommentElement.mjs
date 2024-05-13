
// Funksjon for å lage et kommentar-element
export function createCommentElement(comment) {
    const commentElement = document.createElement("div");
    commentElement.className = "comment";

    const commentText = document.createElement("p");
    commentText.className = "comment-text";
    commentText.textContent = comment.body;

    // const commentDate = document.createElement("span");
    // commentDate.className = "comment-date";
    // commentDate.textContent = new Date(comment.createdAt).toLocaleString();

    commentElement.append(commentText);

    return commentElement;
}