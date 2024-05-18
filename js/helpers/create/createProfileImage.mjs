import { navigateToSpecificPostProfile } from "../navigateToSpecificPostProfile.mjs";

export function createProfileImage(profileData) {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("p-1", "col-8", "text-center");

    const img = document.createElement("img");
    img.classList.add("rounded-3", "img-fluid", "p-1");
    img.src = profileData.avatar || "https://upload.wikimedia.org/wikipedia/commons/9/9d/Unknown_Member.jpg?20170805162126";
    img.alt = `Profile of ${profileData.name}`;
    img.style.cursor = "pointer"; 
    img.addEventListener("click", () => navigateToSpecificPostProfile(profileData.name)); 

    imgContainer.append(img);
    return imgContainer;
}
