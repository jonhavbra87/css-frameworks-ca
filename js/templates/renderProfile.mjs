import { getProfile } from "../api/profiles/getProfile.mjs";
import { profileTemplate } from "./profileTemplate.mjs";

/**
 * Renders a user profile on the page.
 * 
 * This function retrieves the profile name from the current URL, fetches the profile data from the API,
 * and renders the profile content in the designated container. If the profile data is not found,
 * it logs an appropriate message to the console.
 * 
 * @async - Asynchronous function
 * @function renderProfile - Renders a user profile on the page.
 * @returns {Promise<void>} - A promise that resolves when the profile is rendered.
 * @throws {Error} - Throws an error if there is an issue loading the profile.
 */

export async function renderProfile() {

    try {
        const url = new URL(location.href);
        let name = url.searchParams.get("name"); 

        const profileData = await getProfile(name);
        console.log("profileData:", profileData);

     if (profileData) {
        const container = document.querySelector("#profileContainer");

        const profileCard = profileTemplate(profileData, container);  
        
        container.append(profileCard);  
    } else {
        console.log("No profile found with name-id:", name);
    } 
 } catch (error) {
        console.error("Failed to load profile:", error);
    }
 

}