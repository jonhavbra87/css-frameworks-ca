import { API_SOCIAL_URL } from "../api/constants.mjs";

export function profileTemplate(profile) {
    // Opprette hovedkortet
    const card = document.createElement('div');
    card.classList.add('card', 'mx-auto', 'border', 'border-3', 'rounded', 'position-relative', 'col-10', 'col-md-10', 'col-lg-8', 'col-xl-6');

    const img = document.createElement('img');
    img.classList.add('position-absolute', 'top-0', 'start-50', 'translate-middle', 'rounded', 'border', 'border-2', 'col-2', 'img-fluid', 'col-4', 'col-md-3');
    img.src = profile.avatar;
    img.alt = 'profile picture';

    // Opprette card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'py-0');

    // Følgere og oppfølging
    const followersDiv = document.createElement('div');
    followersDiv.classList.add('d-flex', 'flex-row', 'justify-content-between');

    // Followers info
    const followersInfo = document.createElement('div');
    const followersCount = document.createElement('p');
    followersCount.classList.add('fw-bold', 'fs-2', 'raleway-bold');
    followersCount.textContent = '203K';
    const followersText = document.createElement('p');
    followersText.classList.add('text-capitalize', 'justify-content-start');
    followersText.textContent = 'followers';

    followersInfo.append(followersCount, followersText);
    followersDiv.append(followersInfo);

    // Following info
    const followingInfo = document.createElement('div');
    const followingCount = document.createElement('p');
    followingCount.classList.add('fw-bold', 'fs-2', 'raleway-bold');
    followingCount.textContent = '1.3K';
    const followingText = document.createElement('p');
    followingText.classList.add('text-capitalize');
    followingText.textContent = 'following';

    followingInfo.append(followingCount, followingText);
    followersDiv.append(followingInfo);

    // Card title and description
    const title = document.createElement('h5');
    title.classList.add('card-title', 'text-center', 'raleway-bold');
    title.textContent = `${profile.name}`;

    const description = document.createElement('p');
    description.classList.add('text-center', 'fs-5');
    description.textContent = 'My name is Jon Are and I like to teleport to space!';

    cardBody.append(followersDiv, title, description);

    // Buttons for follow and message
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('d-flex', 'flex-row', 'justify-content-around');

    const followButton = document.createElement('button');
    followButton.type = 'button';
    followButton.classList.add('btn', 'btn-dark', 'rounded-4', 'py-2', 'px-4');
    followButton.textContent = 'follow';

    const messageButton = document.createElement('button');
    messageButton.type = 'button';
    messageButton.classList.add('btn', 'btn-outline-dark', 'rounded-4', 'py-2', 'px-4');
    messageButton.textContent = 'message';

    buttonsDiv.append(followButton, messageButton);

    // Tab buttons
    const tabButtonsDiv = document.createElement('div');
    tabButtonsDiv.classList.add('d-flex', 'justify-content-around', 'p-3');

    const allButton = document.createElement('button');
    allButton.type = 'button';
    allButton.classList.add('btn', 'btn-outline-dark', 'text-capitalize', 'border-0');
    allButton.textContent = 'all';

    const photosButton = document.createElement('button');
    photosButton.type = 'button';
    photosButton.classList.add('btn', 'border-bottom', 'text-capitalize', 'link-underline');
    photosButton.textContent = 'photos';

    const videosButton = document.createElement('button');
    videosButton.type = 'button';
    videosButton.classList.add('btn', 'btn-outline-dark', 'text-capitalize', 'border-0');
    videosButton.textContent = 'videos';

    tabButtonsDiv.append(allButton, photosButton, videosButton);

    cardBody.append(buttonsDiv, tabButtonsDiv);
    card.append(img, cardBody);
    return card;
}
