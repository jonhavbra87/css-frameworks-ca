export function createProfileTextContent() {
    
    const flexContainer = document.createElement('div');
    flexContainer.classList.add('d-flex', 'flex-row', 'justify-content-between');

    const followersDiv = document.createElement('div');
    const followersCount = document.createElement('p');
    followersCount.classList.add('fw-bold', 'fs-2', 'fw-bold');
    followersCount.textContent = "203K";
    const followersText = document.createElement('p');
    followersText.classList.add('text-capitalize', 'justify-content-start');
    followersText.textContent = "followers";

    followersDiv.append(followersCount, followersText);

    const followingDiv = document.createElement('div');
    const followingCount = document.createElement('p');
    followingCount.classList.add('fw-bold', 'fs-2', 'fw-bold');
    followingCount.textContent = "1.3K";
    const followingText = document.createElement('p');
    followingText.classList.add('text-capitalize');
    followingText.textContent = "following";

    followingDiv.append(followingCount, followingText);

    flexContainer.append(followersDiv, followingDiv);
    
    return flexContainer;
}