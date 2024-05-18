/**
 * Navigates to a profile page based on the profile name.
 * 
 * @param {string} profileName - The name of the profile to navigate to.
 * @throws {Error} - Throws an error if the profile name is not provided.    
 **/
export async function navigateToLoggedInProfile() {
    try {
        // Retrieve profile data from localStorage
        const storedProfile = localStorage.getItem('profile');
        
        if (storedProfile) {
            const storedProfileData = JSON.parse(storedProfile);
            console.log("Profile data from localStorage:", storedProfileData);

            if (!storedProfileData || !storedProfileData.name) {
                throw new Error("Profile data is invalid.");
            }

            // Use the name from profile data
            const profileName = storedProfileData.name;
            const profileUrl = `/profile/?name=${profileName}`;
            console.log("Navigating to:", profileUrl);

            // Navigate to the profile page
            window.location.href = profileUrl;
        } else {
            throw new Error("No profile data found in localStorage.");
        }
    } catch (error) {
        alert("Failed to navigate to profile. Please try again.");
        throw new Error(`Error navigating to profile: ${error.message}`);
    }
}
