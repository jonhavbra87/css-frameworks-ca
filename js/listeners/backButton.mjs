export function backButton() {
    const backButton = document.querySelector("#backButton");
    backButton.addEventListener("click", () => {
        window.history.back();
    });
}