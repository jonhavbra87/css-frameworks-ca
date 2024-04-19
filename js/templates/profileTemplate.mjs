export function profileTemplate(profileData) {
    if (!profileData.avatar) {
        return null; // Return null, so that if a profile without avatar is passed, it is not rendered
    }

    const profileContainer = document.createElement("div");
    profileContainer.className = "position-relative bg-dark bg-opacity-50 rounded-circle gradient-border";

    // const link = document.createElement("a");
    // link.href = `?name=${profileData.name}`; 
    // link.className = "d-block";

    const img = document.createElement("img");
    img.className = "rounded-circle object-fit-cover";
    img.style.width = "4rem";
    img.style.height = "4rem";
    img.src = profileData.avatar;
    img.alt = `Profile of ${profileData.name}`;

    // link.append(img);
    // profileContainer.append(link);
    profileContainer.append(img);
    
    return profileContainer;
}
