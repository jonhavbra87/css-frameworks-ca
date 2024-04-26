import { postTemplate } from "./postTemplate.mjs";

export function renderAllPosts(postDataList, parent) {
    try {
        postDataList.forEach(postData => {
            const element = postTemplate(postData);
            if (element) {
                // Add click event on every card
                element.style.cursor = "pointer"; 
                element.addEventListener('click', () => {
                    window.location.href = `/post/?id=${postData.id}`;
                });
                parent.append(element);
            }
        });
    } catch (error) {
    console.error("Failed to render posts:", error);
    }
  
}