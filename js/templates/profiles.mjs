import { profileTemplate } from "./profileTemplate.mjs";


export function renderAllProfilesTemplates(profileDataList, parent) {
    console.log("Received profiles for rendering:", profileDataList);
    if (!Array.isArray(profileDataList)) {
        console.error("Invalid profileDataList passed to renderAllProfilesTemplates:", profileDataList);
        return;
    }
    try {
        const elements = profileDataList.map(profileData => profileTemplate(profileData)).filter(el => el !== null);
        console.log("Elements to append:", elements);
        parent.append(...elements);
    } catch (error) {
        console.error("Failed to render profiles:", error);
    }
}


// export function renderAllProfilesTemplates(profileDataList, parent) {
//     try {
//         const elements = profileDataList.map(profileData => profileTemplate(profileData)).filter(el => el !== null);
//         console.log("Elements to render:", elements);

//         if (elements.length === 0) {
//             console.log("No profiles with avatars to render.");
//             return;
//         }
//         parent.append(...elements);

//     } catch (error) {
//         console.error("Failed to render profiles:", error);
//     }
// }


//map(profileData => profileTemplate(profileData)).filter(el => el !== null)