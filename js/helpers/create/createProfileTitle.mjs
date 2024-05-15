export function createProfileTitle(name) {
    const title = document.createElement("h4");
    title.classList.add("card-title", "text-center", "fw-bold");
    title.textContent = `@${name}`;
    return title;
}
