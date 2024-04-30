export function createProfileImgWrapperContainer() {
    const profileImgWrapper = document.createElement("div");
    profileImgWrapper.classList.add("position-absolute", "w-100", "h-100", "top-0", "start-50");
    return profileImgWrapper;
}