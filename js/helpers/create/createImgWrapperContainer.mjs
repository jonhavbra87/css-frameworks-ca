import { createControlBar } from "./createControlBar.mjs";

export function createImgWrapperContainer(postData) {


    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("position-absolute", "w-100", "h-100", "top-0", "start-0");
    const controlBar = createControlBar(postData);
    imgWrapper.append(controlBar);
    return imgWrapper;
}