import { postTemplate } from "./postTemplate.mjs";

export function renderSpecificPostTemplates(postData, parent) {
    const card = postTemplate(postData);
    
    parent.append(card);
}
