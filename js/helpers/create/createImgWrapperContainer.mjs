import { createControlBar } from "./createControlBar.mjs";

export function createImgWrapperContainer() {
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("position-absolute", "w-100", "h-100", "top-0", "start-0");
    const controlBar = createControlBar();
    imgWrapper.append(controlBar);
    return imgWrapper;
}