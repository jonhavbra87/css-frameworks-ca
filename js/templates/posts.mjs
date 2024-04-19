import { postTemplate } from "./postTemplate.mjs";

export function renderAllPostsTemplates(postDataList, parent) {
    try {
        const elements = postDataList.map(postData  => {
            const element = postTemplate(postData);
            if (element) {
                //Add click event on every card
                element.style.cursor = "pointer"; 
                element.addEventListener('click', () => {
                    window.location.href = `/post/?id=${postData.id}`;
                });
            }
            return element;
        }
        
        ).filter(el => el !== null);
        
        parent.append(...elements);
    } catch (error) {
    console.error("Failed to render posts:", error);
    }
  
}