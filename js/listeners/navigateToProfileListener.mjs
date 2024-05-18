import { navigateToLoggedInProfile } from "./index.mjs";

export function navigateToLoggedInProfileListener() {
    const navigateToProfile = document.querySelector("#profileLink");
    navigateToProfile.addEventListener("click", () => {
        console.log("Navigating to profile...");
        navigateToLoggedInProfile();
        
    });
}