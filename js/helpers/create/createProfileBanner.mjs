export function createProfileBanner(banner) {
    const bannerImg = document.createElement("img");
    bannerImg.classList.add("img-fluid", "card-img-top", "w-100", "px-0");
    bannerImg.style.height = "200px";
    bannerImg.src = banner || "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1111&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    bannerImg.alt = "Banner";
    return bannerImg;
}
