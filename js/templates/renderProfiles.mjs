import { getProfiles } from "../api/profiles/read.mjs";
import { renderAllProfilesTemplates } from "./profiles.mjs";

// export async function renderProfiles() {
//     console.log("renderProfile is running");
//     const profiles = await getProfiles();

//     const container = document.querySelector("#profiles");
//     renderAllProfilesTemplates(profiles, container);

//     console.error("Error loading profiles:", error);
// }

export async function renderProfiles() {
    await documentReady(); // Forsikrer at dokumentet er klar før den fortsetter.
    const container = document.querySelector("#profiles");

    if (!container) {
        console.error("Container element '#profiles' not found");
        return;
    }

    try {
        const profiles = await getProfiles();
        console.log("Profiles to render:", profiles);

        renderAllProfilesTemplates(profiles, container);
    } catch (error) {
        console.error("Error loading profiles:", error);
    }
}

// Hjelpefunksjon for å vente på at dokumentet skal være klart
function documentReady() {
    return new Promise(resolve => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            window.onload = resolve;
        }
    });
}




// export async function renderProfiles() {
//         console.log("I'm on the posts page");
//         const profiles = await getProfiles();

//         const container = document.querySelector("#profiles");
//         renderAllProfilesTemplates(profiles, container);
//         console.log(profiles);

// }


//return array
        // if (!Array.isArray(profiles)) {
        //     console.error("Received data is not an array:", profiles);
        //     return; // Exit if the data is not an array
        // }