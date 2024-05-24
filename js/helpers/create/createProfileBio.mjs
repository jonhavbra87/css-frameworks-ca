export function createProfileBio(name) {
    const description = document.createElement("p");
    description.classList.add("text-center", "fs-5");
    description.textContent = `My name is ${name} and I like to teleport to space!`;
    return description;
}
