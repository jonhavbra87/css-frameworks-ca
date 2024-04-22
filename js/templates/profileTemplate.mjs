export function profileTemplate(profileData) {

    const profileContainer = document.createElement("div");
    profileContainer.classList.add("card", "mx-auto", "border", "border-3", "rounded", "position-relative", "col-10", "col-md-10", "col-lg-8", "col-xl-6");
 
    // const link = document.createElement("a");
    // link.href = `?name=${profileData.name}`; 
    // link.className = "d-block";

        // Banner Image
    const bannerImg = document.createElement("img");
    bannerImg.classList.add("card-img");
    bannerImg.style.width = "100%"; // Cover the entire card width
    bannerImg.style.height = "200px"; // Fixed height for the banner
    bannerImg.style.objectFit = "cover"; // Ensure the image covers the area without distortion
    bannerImg.src = "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Placeholder banner image
    bannerImg.alt = "Banner";

    const img = document.createElement("img");
    img.classList.add("rounded", "position-absolute", "top-0", "start-50", "translate-middle", "rounded-1", "object-fit-cover");
    img.style.width = "4rem";
    img.style.height = "4rem";
    if (profileData.avatar) {
        img.src = profileData.avatar;
    } else {
        img.src = "https://upload.wikimedia.org/wikipedia/commons/9/9d/Unknown_Member.jpg?20170805162126";
    }
    img.alt = `Profile of ${profileData.name}`;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'py-0');

    const flexContainer = document.createElement('div');
    flexContainer.classList.add('d-flex', 'flex-row', 'justify-content-between');

    const followersDiv = document.createElement('div');
    const followersCount = document.createElement('p');
    followersCount.classList.add('fw-bold', 'fs-2', 'raleway-bold');
    followersCount.textContent = "203K";
    const followersText = document.createElement('p');
    followersText.classList.add('text-capitalize', 'justify-content-start');
    followersText.textContent = "followers";

    followersDiv.append(followersCount, followersText);

    const followingDiv = document.createElement('div');
    const followingCount = document.createElement('p');
    followingCount.classList.add('fw-bold', 'fs-2', 'raleway-bold');
    followingCount.textContent = "1.3K";
    const followingText = document.createElement('p');
    followingText.classList.add('text-capitalize');
    followingText.textContent = "following";

    followingDiv.append(followingCount, followingText);

    flexContainer.append(followersDiv, followingDiv);

    const title = document.createElement('h4');
    title.classList.add('card-title', 'text-center', 'fw-bold');
    title.textContent = `@${profileData.name}`;

    const description = document.createElement('p');
    description.classList.add('text-center', 'fs-5');
    description.textContent = "My name is Jon Are and I like to teleport to space!";

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('d-flex', 'flex-row', 'justify-content-around');

    const followButton = document.createElement('button');
    followButton.type = "button";
    followButton.classList.add('btn', 'btn-dark', 'rounded-4', 'py-2', 'px-4');
    followButton.textContent = "follow";

    const messageButton = document.createElement('button');
    messageButton.type = "button";
    messageButton.classList.add('btn', 'btn-outline-dark', 'rounded-4', 'py-2', 'px-4');
    messageButton.textContent = "message";

    buttonContainer.append(followButton, messageButton);

    const navContainer = document.createElement('div');
    navContainer.classList.add('d-flex', 'justify-content-around', 'p-3');

    const allButton = document.createElement('button');
    allButton.type = "button";
    allButton.classList.add('btn', 'btn-outline-dark', 'text-capitalize', 'border-0');
    allButton.textContent = "all";

    const photosButton = document.createElement('button');
    photosButton.type = "button";
    photosButton.classList.add('btn', 'border-bottom', 'text-capitalize', 'link-underline');
    photosButton.textContent = "photos";

    const videosButton = document.createElement('button');
    videosButton.type = "button";
    videosButton.classList.add('btn', 'btn-outline-dark', 'text-capitalize', 'border-0');
    videosButton.textContent = "videos";

    navContainer.append(allButton, photosButton, videosButton);

    cardBody.append(flexContainer, title, description, buttonContainer, navContainer);
    profileContainer.append(bannerImg, img, cardBody);

    // link.append(img);
    // profileContainer.append(link);
    // profileContainer.append(img);
    
    return profileContainer;
}
