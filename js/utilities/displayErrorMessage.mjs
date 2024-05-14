export function displayErrorMessage(container, error) {
    const errorContainer = document.createElement("div");
    errorContainer.id = "errorMessage";
    errorContainer.classList.add("toast", "alert-primary", "text-center", "my-3");

    const errorMessageContent = document.createElement("h3");
    errorMessageContent.textContent = `${error}`;
    


    errorContainer.append(errorMessageContent);

    container.innerHTML = "";

    container.append(errorContainer);

    return errorContainer;
}