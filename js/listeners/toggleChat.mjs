import { commentOnPost } from "../api/posts/commentOnPost.mjs";
import { createCommentsContainer } from "../helpers/create/createCommentsContainer.mjs";

/**
 * Toggles the visibility of the chat input field for submitting comments.
 * 
 * @param {Event} event - The click event triggered by the chat button.
 */

export async function toggleChat(event) {
    const chatButton = event.target.closest('[data-post-id]');
    const postId = chatButton.dataset.postId;
    console.log("postId:", postId);

    // Search for existing chat form under chatButton
    let chatForm = document.querySelector(`#comment-form-${postId}`);

    if (chatForm) {
        console.log("Removing existing comment form");
        chatForm.remove(); // Remove if the form already exists (hide it)
    } else {
        // Create a new comment form
        console.log("Creating new comment form");
        chatForm = document.createElement("form");
        chatForm.id = `comment-form-${postId}`;
        chatForm.className = "comment-form";

        // Create an input field for writing a comment
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.className = "comment-input";
        inputField.placeholder = "Write a comment...";
        inputField.dataset.postId = postId;

        // Create a submit button
        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.className = "btn btn-primary";
        submitButton.textContent = "Comment";

        //Adding inputField and submitButton to the chatForm
        chatForm.append(inputField, submitButton);

        // Adding a eventListener for submitting the comment
        chatForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const commentText = inputField.value.trim();
            if (commentText) {
                try {
                    console.log("Submitting comment:", commentText);
                    await commentOnPost(postId, commentText);
                    inputField.value = "";
                    console.log("Comment submitted successfully");
                    alert(`Success! Your comment: ${commentText}`);    
                    chatForm.remove(); 
                    //Updates the chat count
                    updateChatCount(postId);
                    
                    //Adding new comments to the post feed
                    const commentsContainer = document.querySelector(`#comments-container-${postId}`);
                    createCommentsContainer(postId);

                } catch (error) {
                    alert("Failed to submit comment");
                }
            }
        });        

        // Legg til skjemaet etter chatButton
        chatButton.parentNode.append(chatForm);
    }
}


function updateChatCount(postId) {
    const chatButton = document.querySelector(`[data-post-id="${postId}"]`);
    const chatCount = chatButton.querySelector(`[data-chat-button="${postId}"]`);
    if (chatCount) {
        const currentCount = parseInt(chatCount.textContent, 0);
        chatCount.textContent = currentCount + 1;
        setTimeout(() => {
            location.reload();
          }, 300);
    }
}

// import { commentOnPost } from "../api/posts/commentOnPost.mjs";

// /**
//  * Toggles the visibility of the chat input field for submitting comments.
//  * 
//  * @param {Event} event - The click event triggered by the chat button.
//  */
// export function toggleChat(event) {
//     const chatButton = event.target;
//     const postId = chatButton.dataset.postId;

//     // Søk etter eksisterende chat-skjema under chatButton
//     let chatForm = document.querySelector(`#comment-form-${postId}`);
//     if (chatForm) {
//         chatForm.remove(); // Fjern hvis skjemaet allerede finnes (skjul det)
//     } else {
//         // Opprett et nytt kommentarskjema
//         chatForm = document.createElement("form");
//         chatForm.id = `comment-form-${postId}`;
//         chatForm.className = "comment-form";

//         // Opprett et input-felt for å skrive en kommentar
//         const inputField = document.createElement("input");
//         inputField.type = "text";
//         inputField.className = "comment-input";
//         inputField.placeholder = "Skriv en kommentar...";
//         inputField.dataset.postId = postId;

//         // Opprett en send-knapp
//         const submitButton = document.createElement("button");
//         submitButton.type = "submit";
//         submitButton.className = "btn btn-primary";
//         submitButton.textContent = "Send";

//         // Legg input-feltet og send-knappen til i skjemaet
//         chatForm.append(inputField, submitButton);

//         // Legg til event listener for å sende inn kommentaren
//         chatForm.addEventListener("submit", async (e) => {
//             e.preventDefault();
//             const commentText = inputField.value.trim();
//             if (commentText) {
//                 try {
//                     await commentOnPost(postId, commentText);
//                     inputField.value = ""; // Tøm feltet etter innsending
//                     console.log("Comment submitted successfully");
//                     alert("Comment submitted successfully");
//                 } catch (error) {
//                     console.error("Failed to submit comment:", error);
//                     alert("Failed to submit comment");
//                 }
//             }
//         });

//         // Legg til skjemaet etter chatButton
//         chatButton.parentNode.append
//     }
// }
// ------------------------------------------------------------------------------
// export function toggleChat(event) {
//     const chatButton = event.target;
//     const postId = chatButton.dataset.postId;

//     // Søk etter eksisterende chat-skjema under chatButton
//     let chatForm = document.querySelector(`#comment-form-${postId}`);
//     if (chatForm) {
//         chatForm.remove(); // Fjern hvis skjemaet allerede finnes (skjul det)
//     } else {
//         // Opprett et nytt kommentarskjema
//         chatForm = document.createElement("form");
//         chatForm.id = `comment-form-${postId}`;
//         chatForm.className = "comment-form";

//         // Opprett et input-felt for å skrive en kommentar
//         const inputField = document.createElement("input");
//         inputField.type = "text";
//         inputField.className = "comment-input";
//         inputField.placeholder = "Skriv en kommentar...";
//         inputField.dataset.postId = postId;

//         // Opprett en send-knapp
//         const submitButton = document.createElement("button");
//         submitButton.type = "submit";
//         submitButton.className = "btn btn-primary";
//         submitButton.textContent = "Send";

//         // Legg input-feltet og send-knappen til i skjemaet
//         chatForm.append(inputField, submitButton);

//         // Legg til event listener for å sende inn kommentaren
//         chatForm.addEventListener("submit", async (e) => {
//             e.preventDefault();
//             const commentText = inputField.value.trim();
//             if (commentText) {
//                 await sendComment(postId, commentText);
//                 inputField.value = ""; // Tøm feltet etter innsending
//             }
//         });

//         // Legg til skjemaet etter chatButton
//         chatButton.parentNode.append(chatForm);
//     }
// }



// export function toggleChat(event) {
//     const chatButton = event.target;
//     const postId = chatButton.dataset.postId;
//     console.log("postId:", postId);
//     if (chatButton.classList.contains('bi-balloon-heart')) {
//         chatButton.classList.remove('bi-balloon-heart');
//         chatButton.classList.add('bi-balloon-heart-fill');
//         return;
//     } 
// }