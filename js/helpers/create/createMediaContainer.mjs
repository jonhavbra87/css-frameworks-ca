import { createControlBar } from "./createControlBar.mjs";
import { createImgWrapperContainer } from "./createImgWrapperContainer.mjs";

export function createMediaContainer(postData) {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("position-relative", "ratio", "ratio-4x3");

    

    const img = document.createElement("img");
    img.classList.add("img-fluid", "rounded-1");
    img.alt = `Image from ${postData.title}`;
    

    if (postData.media) {
        img.src = postData.media;
    } else {
        // Array of default images
        const defaultMedia = [
            "https://images.unsplash.com/photo-1620038971473-a02bef66653e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VwaWF8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1522657732287-211e69b4788c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VwaWF8ZW58MHx8MHx8fDA%3D",
            "https://plus.unsplash.com/premium_photo-1667238363194-82b904a723fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VwaWF8ZW58MHx8MHx8fDA%3D"
        ];
        const randomIndex = Math.floor(Math.random() * defaultMedia.length);
        img.src = defaultMedia[randomIndex];
    }
    
    const imgWrapper = createImgWrapperContainer();
    const controlBar = createControlBar(); 
    imgWrapper.append(img);
    imgWrapper.append(controlBar);
    imgContainer.append(imgWrapper);
    return imgContainer;
}
