import { navigateToLoggedInProfile } from "./index.mjs";

export function navigateToLoggedInProfileListener() {
    const navigateToProfile = document.querySelector("#profileLink");
    navigateToProfile.addEventListener("click", () => {
        navigateToLoggedInProfile();
        
    });
}