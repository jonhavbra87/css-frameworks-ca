import { getProfiles } from "../api/profiles/read.mjs";
import { renderAllProfilesTemplates } from "./profiles.mjs";



export async function renderProfiles() {
    try {
        const profiles = await getProfiles();
        if (!Array.isArray(profiles)) {
            console.error("Received data is not an array:", profiles);
            return; // Exit if the data is not an array
        }
        const container = document.querySelector("#profiles");
        renderAllProfilesTemplates(profiles, container);
    } catch (error) {
        console.error("Error loading profiles:", error);
    }
}


// export async function renderProfiles() {
//         console.log("I'm on the posts page");
//         const profiles = await getProfiles();

//         const container = document.querySelector("#profiles");
//         renderAllProfilesTemplates(profiles, container);
//         console.log(profiles);

// }