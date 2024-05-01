// import { createIconElement } from "./createIconElement.mjs";

// export function createControlBar() {
//     const controlBar = document.createElement("div");
//     controlBar.classList.add("d-flex", "flex-nowrap", "flex-row", "justify-content-between", "p-3", "position-absolute", "start-0", "end-0", "bottom-0", "container-fluid", "bg-dark", "bg-opacity-50", "rounded-bottom-1");

//     const iconsLeft = document.createElement("div");
//     iconsLeft.className = "text-white gap-2";
//     iconsLeft.append(createIconElement("bi bi-chat-dots-fill px-2"));
//     iconsLeft.append(createIconElement("bi bi-hearts px-2"));

//     const iconsRight = document.createElement("div");
//     iconsRight.className = "text-white";
//     iconsRight.append(createIconElement("bi bi-send-fill px-2"));
//     iconsRight.append(createIconElement("bi bi-bookmark-heart-fill px-2"));

//     controlBar.append(iconsLeft, iconsRight);
//     return controlBar;
// }

import { createIconElement } from "./createIconElement.mjs";

export function createControlBar() {
    const controlBar = document.createElement("div");
    controlBar.classList.add("d-flex", "flex-nowrap", "flex-row", "justify-content-between", "p-3", "position-absolute", "start-0", "end-0", "bottom-0", "container-fluid", "bg-dark", "bg-opacity-50", "rounded-bottom-1");

    const iconsLeft = document.createElement("div");
    iconsLeft.className = "text-white gap-2";
    const chatIcon = createIconElement("bi bi-chat-dots-fill px-2");
    const heartIcon = createIconElement("bi bi-hearts px-2");
    heartIcon.setAttribute('role', 'button');
    

    // Dynamically show reactions when heart icon is clicked
    heartIcon.onclick = () => {
        const reactionContainer = document.querySelector('.reaction-container');
        console.log('Before toggle:', reactionContainer.style.display); // Sjekk nåværende tilstand før toggle
        if (reactionContainer.style.display === 'none' || reactionContainer.style.display === '') {
            reactionContainer.style.display = 'flex';
        } else {
            reactionContainer.style.display = 'none';
        }
        console.log('After toggle:', reactionContainer.style.display); // Sjekk tilstand etter toggle
    };


    iconsLeft.append(chatIcon, heartIcon);

    const iconsRight = document.createElement("div");
    iconsRight.className = "text-white";
    iconsRight.append(createIconElement("bi bi-send-fill px-2"));
    iconsRight.append(createIconElement("bi bi-bookmark-heart-fill px-2"));

    controlBar.append(iconsLeft, iconsRight);
    return controlBar;
}

export function reactionListener(event) {
    const postId = event.target.dataset.postId;
    const reactionType = event.target.dataset.symbol;
    console.log(`Post ID: ${postId} Reagert med: ${reactionType}`);
    // Implementer serverkommunikasjon eller annen logikk her
}