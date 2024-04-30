import { createProfileImgWrapperContainer } from "./createProfileImgWrapper.mjs";

export function createProfileMediaContainer(profileData) {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("position-relative", "ratio", "ratio-1x1");

    

    const profileImg = document.createElement("img");
    profileImg.classList.add("img-fluid", "rounded");
    profileImg.alt = `Image from ${profileData.name}`;
    

    if (profileData.media) {
        profileImg.src = postData.avatar;
    } else {
        // If the user don't upload a img, then this will create a random img for that post.
        const defaultProfileImg = ["https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1635693206507-1d749cb30ecb?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1548602088-9d12a4f9c10f?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ];
        const randomIndex = Math.floor(Math.random() * defaultMedia.length);
        defaultProfileImg.src = defaultMedia[randomIndex];
    }

    const imgProfileWrapper = createProfileImgWrapperContainer();

    imgContainer.append(defaultProfileImg, imgProfileWrapper);

    return imgContainer;
}
