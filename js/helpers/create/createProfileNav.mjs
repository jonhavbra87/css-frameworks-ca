export function createProfileNav() {
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
    return navContainer;
}
