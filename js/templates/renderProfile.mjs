import { getProfile } from "../api/profiles/read.mjs";
import { profileTemplate } from "./profileTemplate.mjs";

export async function renderProfile() {

    const url = new URL(location.href);
    let name = url.searchParams.get("name"); 
    
    if (!name) {
        console.error("No username specified");
        return;  // Avslutt funksjonen hvis det ikke finnes et brukernavn
    }
    try {
        const profile = await getProfile(name);
        const container = document.querySelector("#profileContainer");
        const profileCard = profileTemplate(profile, container);  // Generate the card
        container.innerHTML = '';  // Clear existing content
        container.append(profileCard);  
        console.log(profile);
    } catch (error) {
        console.error("Failed to load profile:", error);
    }
}