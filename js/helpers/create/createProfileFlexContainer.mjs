export function createProfileFlexContainer() {
    const flexContainer = document.createElement("div");
    flexContainer.classList.add("d-flex", "flex-row", "justify-content-between", "align-items-center");
    return flexContainer;
}
