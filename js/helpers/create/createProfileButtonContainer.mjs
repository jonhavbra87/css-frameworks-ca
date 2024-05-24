export function createProfileButtonContainer() {
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
    return buttonContainer;
}
