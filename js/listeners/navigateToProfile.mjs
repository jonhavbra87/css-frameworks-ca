/**
 * Navigates to a profile page based on the profile name.
 * 
 * @param {string} profileName - The name of the profile to navigate to.
 */

import { getProfile } from "../api/profiles/getProfile.mjs";

export async function navigateToProfile(name) {
    console.log("Navigating to profile:", name);

    if (!name) {
        console.error("Profile name is required to navigate.");
        return;
    }
  
    try {
        // Fetch the profile to ensure it exists
        const profileData = await getProfile(name);
        console.log("Profile data:", profileData);
        
        const profileUrl = `/profile/?name=${name}`;
        console.log("Navigating to:", profileUrl);

        // Navigate to the profile page
        window.location.href = profileUrl;
    } catch (error) {
        console.error("Error navigating to profile:", error);
        // Optionally display an error message to the user
        alert("Failed to navigate to profile. Please try again.");
    }

    // const profileUrl = `/profile/?name=${name}`;
    // console.log("Navigating to:", profileUrl);

    // // Navigate to the profile page
    // window.location.href = profileUrl;
}
