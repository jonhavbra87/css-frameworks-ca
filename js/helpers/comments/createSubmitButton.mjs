/**
 * Creates a submit button for the comment form.
 * 
 * @returns {HTMLButtonElement} - The created submit button element.
 */
export function createSubmitButton() {
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className = "btn btn-primary";
    submitButton.textContent = "Comment";

    return submitButton;
}