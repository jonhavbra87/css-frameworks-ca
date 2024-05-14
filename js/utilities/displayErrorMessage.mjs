export function displayErrorMessage(error) {
    const container = document.querySelector("#errorMessage");
    
    const errorContainer = document.createElement("div");
    errorContainer.classList.add("alert", "alert-primary");

    const errorMessageContent = document.createElement("h3");
    errorMessageContent.textContent = `${error}`;
    


    errorContainer.append(errorMessageContent);

    return container.append(errorContainer);
}