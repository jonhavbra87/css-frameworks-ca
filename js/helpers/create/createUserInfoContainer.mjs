import { navigateToSpecificPostProfile } from "../navigateToSpecificPostProfile.mjs";

export function createUserInfoContainer(postData) {
        // Div for username and image
        const userInfo = document.createElement("div");
        userInfo.classList.add("d-flex", "flex-column", "justify-content-between", "align-items-center", "mt-2");
    
        const userNameElement = document.createElement("h6");
        userNameElement.classList.add("fw-bold");
        userNameElement.textContent = postData.author.name; // Assuming postData.userName is available
        userNameElement.textContent = postData.author && postData.author.name ? postData.author.name : "Unknown Author";
    
        const userImage = document.createElement("img");
        userImage.classList.add("rounded-circle");
    
            // Set a default image if author or avatar is missing
        if (postData.author && postData.author.avatar) {
            userImage.src = postData.author.avatar;
        } else {
            userImage.src = "https://upload.wikimedia.org/wikipedia/commons/9/9d/Unknown_Member.jpg?20170805162126";
        }
        userImage.alt = `Profile of ${postData.author ? postData.author.name : "Unknown"}`;
        userImage.style.width = "40px";
        userImage.style.height = "40px";
        

        userInfo.append(userImage, userNameElement);
        userInfo.addEventListener("click", () => navigateToSpecificPostProfile(postData.author.name));
        userInfo.style.cursor = "pointer";

       return userInfo;
}