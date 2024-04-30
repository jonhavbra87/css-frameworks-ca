import { getProfile } from "../api/profiles/read.mjs";
import { profileTemplate } from "./profileTemplate.mjs";

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
 
    
    // if (!name) {
    //     console.error("No username specified");
    //     return;
    // }
    // try {
        // const profile = await getProfile(name);
        // const container = document.querySelector("#profileContainer");
        // const profileCard = profileTemplate(profile, container);  
        // container.innerHTML = '';
        // container.append(profileCard);  
        // console.log(profile);
    // } catch (error) {
    //     console.error("Failed to load profile:", error);
    // }
}