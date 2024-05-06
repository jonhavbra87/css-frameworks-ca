import { buttonContainer } from "../helpers/create/buttonContainer.mjs";
import { postTemplate } from "./postTemplate.mjs";

//sjekke om man er logget inn if-statement

export function renderSpecificPostTemplates(postData, parent) {

    const card = postTemplate(postData);
    const name = localStorage.getItem("profile")
    const profile = JSON.parse(name);
 
    const profileName = profile.name;
    const authorName = postData.author.name;

    parent.append(card);

    if (authorName === profileName) {
        const buttons = buttonContainer(postData);
        
        card.append(buttons);
    }
}