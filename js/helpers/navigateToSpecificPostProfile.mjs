/**
 * Navigates to a profile page based on the given profile name.
 *
 * @param {string} profileName - The name of the profile to navigate to.
 * @returns {Promise<void>} - A promise that resolves when navigation is complete.
 * @throws {error} - Will throw an error if navigation fails.
 **/

export async function navigateToSpecificPostProfile(profileName) {
    try {
            const profileUrl = `/profile/?name=${profileName}`;
            console.log("Navigating to:", profileUrl);

            window.location.href = profileUrl;
        }
     catch (error) {
        console.error("Error navigating to profile:", error);

        
        alert("Failed to navigate to profile. Please try again.");
        throw new Error(`Error navigating to profile: ${error.message}`);
    }
}
