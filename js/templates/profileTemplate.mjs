import { navigateToProfile } from "../listeners/navigateToProfile.mjs";

export function profileTemplate(profileData) {
    const profileContainer = document.createElement("div");
    profileContainer.classList.add("card", "bg-primary", "px-0", "mx-auto", "border", "border-3", "rounded", "col-12");

    // Banner Image
    const bannerImg = document.createElement("img");
    bannerImg.classList.add("img-fluid", "card-img-top", "w-100", "px-0");
    bannerImg.style.height = "200px";
    bannerImg.src = profileData.banner || "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1111&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    bannerImg.alt = "Banner";
    
    // Other elements remain the same
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "py-0");

    const flexContainer = document.createElement("div");
    flexContainer.classList.add("d-flex", "flex-row", "justify-content-between", "align-items-center");

    const followersDiv = document.createElement("div");
    followersDiv.classList.add("text-center", "border", "border-2", "rounded-3", "p-2", "bg-secondary", "text-white",  "col-2");

    const followersCount = document.createElement("p");
    followersCount.classList.add("fw-bold", "fs-2", "fw-bold", "my-0");
    followersCount.textContent = profileData._count.followers;

    const followersText = document.createElement("p");
    followersText.classList.add("text-capitalize", "fs-6");
    followersText.textContent = "followers";

    followersDiv.append(followersCount, followersText);

    // Profile Image (Clickable to navigate to profile)
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("p-1", "col-8", "text-center");

    const img = document.createElement("img");
    img.classList.add("rounded-3", "img-fluid", "p-1");
    img.src = profileData.avatar || "https://upload.wikimedia.org/wikipedia/commons/9/9d/Unknown_Member.jpg?20170805162126";
    img.alt = `Profile of ${profileData.name}`;
    img.style.cursor = "pointer"; 
    img.addEventListener("click", () => navigateToProfile(profileData.name)); 

    imgContainer.append(img);

    const followingDiv = document.createElement("div");
    followingDiv.classList.add("text-center", "border", "border-2", "rounded-3", "p-2", "bg-secondary", "text-white", "col-2");
    
    const followingCount = document.createElement("p");
    followingCount.classList.add("fw-bold", "fs-2", "my-0");
    followingCount.textContent = profileData._count.following;
    const followingText = document.createElement("p");
    followingText.classList.add("text-capitalize", "fs-6");
    followingText.textContent = "following";

    followingDiv.append(followingCount, followingText);

    flexContainer.append(followersDiv, imgContainer, followingDiv);

    const title = document.createElement("h4");
    title.classList.add("card-title", "text-center", "fw-bold");
    title.textContent = `@${profileData.name}`;

    const description = document.createElement("p");
    description.classList.add("text-center", "fs-5");
    description.textContent = `My name is ${profileData.name} and I like to teleport to space!`;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-flex", "flex-row", "justify-content-around");

    const followButton = document.createElement("button");
    followButton.type = "button";
    followButton.classList.add("btn", "btn-dark", "rounded-4", "py-2", "px-4");
    followButton.id = "followButton";
    followButton.textContent = "Follow";

    const unfollowButton = document.createElement("button");
    unfollowButton.type = "button";
    unfollowButton.classList.add("btn", "btn-outline-dark", "rounded-4", "py-2", "px-4");
    unfollowButton.id = "unfollowButton";
    unfollowButton.textContent = "Unfollow";

    buttonContainer.append(followButton, unfollowButton);

    const navContainer = document.createElement("div");
    navContainer.classList.add("d-flex", "justify-content-around", "p-3");

    const allButton = document.createElement("button");
    allButton.type = "button";
    allButton.classList.add("btn", "btn-outline-dark", "text-capitalize", "border-0");
    allButton.textContent = "all";

    const photosButton = document.createElement("button");
    photosButton.type = "button";
    photosButton.classList.add("btn", "border-bottom", "text-capitalize", "link-underline");
    photosButton.textContent = "photos";

    const videosButton = document.createElement("button");
    videosButton.type = "button";
    videosButton.classList.add("btn", "btn-outline-dark", "text-capitalize", "border-0");
    videosButton.textContent = "videos";

    navContainer.append(allButton, photosButton, videosButton);

    cardBody.append(flexContainer, title, description, buttonContainer, navContainer);
    profileContainer.append(bannerImg, cardBody);

    return profileContainer;
}
