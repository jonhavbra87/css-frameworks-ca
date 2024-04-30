import * as helpers from "../helpers/create/index.mjs"

export function profileTemplate(profileData) {
    const profileCard = helpers.createCardContainer(profileData);
    const profileCardBody = helpers.createCardBodyContainer(profileData);
    const flexContainer = helpers.createProfileTextContent();
    const profileMediaContainer = helpers.createProfileMediaContainer(profileData);
    const profileBanner = helpers.createProfileBanner(profileData);


    const title = document.createElement('h4');
    title.classList.add('card-title', 'text-center', 'fw-bold');
    title.textContent = `@${profileData.name}`;

    const description = document.createElement('p');
    description.classList.add('text-center', 'fs-5');
    description.textContent = `My name is ${profileData.name} and I like to teleport to space!`;

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

    profileCardBody.append(flexContainer, title, description, buttonContainer, navContainer);
    profileCard.append(profileBanner, profileMediaContainer, profileCardBody);

    return profileCard;
}
