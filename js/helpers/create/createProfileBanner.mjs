export function createProfileBanner(profileData) {
    // Banner Image
    const bannerImg = document.createElement("img");
    bannerImg.classList.add("card-img");
    bannerImg.style.width = "100%";
    bannerImg.style.height = "200px"; 
    bannerImg.style.objectFit = "cover"; 
    if (profileData.banner) {
        bannerImg.src = profileData.banner;
    } else {
    bannerImg.src = "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";  
    }
    // Placeholder banner image
    bannerImg.alt = "Banner";
    return bannerImg;
}