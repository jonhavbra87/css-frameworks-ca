/**
 * Navigates to a profile page based on the profile name.
 * 
 * @param {string} profileName - The name of the profile to navigate to.
 */

export function navigateToProfile(name) {
    if (!name) {
        console.error("Profile name is required to navigate.");
        return;
    }
  
    // Construct the URL for the profile page with the given name
    const profileUrl = `/profile.html?name=${encodeURIComponent(name)}`;
    console.log("Navigating to:", profileUrl);

    // Navigate to the profile page
    window.location.href = profileUrl;
}


// export function viewProfile() {
//     const viewProfileButton = document.getElementById("profileLink");
//     viewProfileButton.addEventListener("click", async () => {
//         console.log("View profile button clicked");
//         location.href = "/profile/";
//     });
// }

// /**
//  * Navigates to the profile page of the clicked user.
//  * 
//  * @param {Event} event - The event object from the click event.
//  */
// function navigateToProfile(event) {
//     const profileElement = event.target;
//     const userId = profileElement.dataset.userId;

//     if (!userId) {
//         console.error("No user ID found on the clicked element.");
//         return;
//     }

//     // Construct the URL for the profile page
//     const profileUrl = `/profile.html?userId=${userId}`;
//     console.log("Navigating to:", profileUrl);

//     // Navigate to the profile page
//     window.location.href = profileUrl;
// }