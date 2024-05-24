export function displayErrorProfilePosts() {
    const container = document.querySelector("#profilePosts");
    
    const errorContainer = document.createElement("div");

    errorContainer.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center", "p-5", "bg-primary", "text-white", "fs-5", "fw-bold", "rounded-2", "text-center", "my-5", "box-shadow");

    const messageLine1 = document.createElement("h3");
    messageLine1.textContent = "Not any posts to show.";
    
    const messageLine2 = document.createElement("h4");
    messageLine2.textContent = "Please follow someone to see their posts.";

    errorContainer.append(messageLine1);
    errorContainer.append(messageLine2);

    return container.append(errorContainer);
}