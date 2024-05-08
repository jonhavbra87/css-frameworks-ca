import { reactToPost } from "../../api/posts/reactToPost.mjs";
import { toggleHeart } from "../../listeners/heartToggle.mjs";
import { createIconElement } from "./createIconElement.mjs";


export function createControlBar(postData) {
    const controlBar = document.createElement("div");
    controlBar.classList.add("d-flex", "flex-nowrap", "flex-row", "justify-content-between", "p-3", "position-absolute", "start-0", "end-0", "bottom-0", "container-fluid", "bg-dark", "bg-opacity-50", "rounded-bottom-1");

    const iconsLeft = document.createElement("div");
    iconsLeft.className = "text-white gap-2";

    const chatIcon = createIconElement("bi bi-chat-dots-fill px-2");

    
    const likeButton = createIconElement("bi bi-balloon-heart px-2");
    likeButton.setAttribute("role", "button");
    likeButton.dataset.likeButton = postData.id;
    likeButton.addEventListener('click', toggleHeart);

    const likeCount = document.createElement("span");
    likeButton.id = "likeButton";
    likeCount.className = "text-white";
    likeCount.dataset.likeButton = postData.id;
    likeCount.textContent = postData._count.reactions;
    likeButton.append(likeCount);

    iconsLeft.append(chatIcon, likeButton, likeCount);

    const iconsRight = document.createElement("div");
    iconsRight.className = "text-white";
    iconsRight.append(createIconElement("bi bi-send-fill px-2"));
    iconsRight.append(createIconElement("bi bi-bookmark-heart-fill px-2"));

    controlBar.append(iconsLeft, iconsRight);
    return controlBar;


}