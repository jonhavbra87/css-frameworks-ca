export function createProfileFollowersDiv(followersCount) {
    const followersDiv = document.createElement("div");
    followersDiv.classList.add("text-center", "border", "border-2", "rounded-3", "p-2", "bg-secondary", "text-white", "col-2");

    const followersCountElem = document.createElement("p");
    followersCountElem.classList.add("fw-bold", "fs-2", "fw-bold", "my-0");
    followersCountElem.textContent = followersCount;

    const followersText = document.createElement("p");
    followersText.classList.add("text-capitalize", "fs-6");
    followersText.textContent = "followers";

    followersDiv.append(followersCountElem, followersText);
    return followersDiv;
}
