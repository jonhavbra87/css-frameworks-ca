import { postTemplate } from "./postTemplate.mjs";

export function appendPosts(postDataList, parent) {
   
    try {
        postDataList.forEach(postData => {
            const cardContent = postTemplate(postData);
            if (cardContent) {
                // Add click event on every card
                cardContent.style.cursor = "pointer"; 
                cardContent.addEventListener('click', () => {
                window.location.href = `/post/?id=${postData.id}`;
                });
                parent.append(cardContent);
            }
        });
    } catch (error) {
    console.error("Failed to render posts:", error);
    }
}