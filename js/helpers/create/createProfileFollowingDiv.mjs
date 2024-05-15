export function createProfileFollowingDiv(followingCount) {
    const followingDiv = document.createElement("div");
    followingDiv.classList.add("text-center", "border", "border-2", "rounded-3", "p-2", "bg-secondary", "text-white", "col-2");

    const followingCountElem = document.createElement("p");
    followingCountElem.classList.add("fw-bold", "fs-2", "my-0");
    followingCountElem.textContent = followingCount;

    const followingText = document.createElement("p");
    followingText.classList.add("text-capitalize", "fs-6");
    followingText.textContent = "following";

    followingDiv.append(followingCountElem, followingText);
    return followingDiv;
}
