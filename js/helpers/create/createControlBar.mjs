import { createIconElement } from "./createIconElement.mjs";

export function createControlBar() {
    const controlBar = document.createElement("div");
    controlBar.classList.add("d-flex", "flex-nowrap", "flex-row", "justify-content-between", "p-3", "position-absolute", "start-0", "end-0", "bottom-0", "container-fluid", "bg-dark", "bg-opacity-50", "rounded-bottom-1");

    const iconsLeft = document.createElement("div");
    iconsLeft.className = "text-white gap-2";
    iconsLeft.append(createIconElement("bi bi-chat-dots-fill px-2"));
    iconsLeft.append(createIconElement("bi bi-hearts px-2"));

    const iconsRight = document.createElement("div");
    iconsRight.className = "text-white";
    iconsRight.append(createIconElement("bi bi-send-fill px-2"));
    iconsRight.append(createIconElement("bi bi-bookmark-heart-fill px-2"));

    controlBar.append(iconsLeft, iconsRight);
    return controlBar;
}

