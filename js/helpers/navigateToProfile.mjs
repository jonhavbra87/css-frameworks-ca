/**
 * Navigates to a profile page based on the profile name.
 * 
 * @param {string} profileName - The name of the profile to navigate to.
 */
export async function navigateToProfile() {
    try {
        // Retrieve profile data from localStorage
        const storedProfile = localStorage.getItem('profile');
        
        if (storedProfile) {
            const profileData = JSON.parse(storedProfile);
            console.log("Profile data from localStorage:", profileData);

            if (!profileData || !profileData.name) {
                throw new Error("Profile data is invalid.");
            }

            // Use the name from profile data
            const profileName = profileData.name;
            const profileUrl = `/profile/?name=${profileName}`;
            console.log("Navigating to:", profileUrl);

            // Navigate to the profile page
            window.location.href = profileUrl;
        } else {
            throw new Error("No profile data found in localStorage.");
        }
    } catch (error) {
        console.error("Error navigating to profile:", error);
        // Optionally display an error message to the user
        alert("Failed to navigate to profile. Please try again.");
    }
}
