import { profileTemplate } from "./profileTemplate.mjs";


export function renderAllProfilesTemplates(profileDataList, parent) {
    try {
        const elements = profileDataList.map(profileData => profileTemplate(profileData)).filter(el => el !== null);
       
        parent.append(...elements);
    } catch (error) {
        console.error("Failed to render profiles:", error);
    }
}
