export function postTemplate(postData) {


    const card = document.createElement("div");
    card.classList.add("card", "mx-auto", "pb-2", "border", "border-1", "rounded", "col-12", "col-md-6", "col-lg-4");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "px-1", "m-0");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title", "d-flex", "flex-column", "align-items-start", "py-1");
    const userInfo = document.createElement("div");
    userInfo.classList.add("d-flex", "flex-column");
    
    const userName = document.createElement("h4");
    userName.classList.add("fw-bold", "col-12");
    userName.textContent = postData.title;


    const userTags = document.createElement("p");
    userTags.classList.add("text-wrap", "fw-light", "col-12");
    
        // Add # in fornt of each tag
    if (postData.tags && postData.tags.length) {
        const formattedTags = postData.tags.map(tag => `#${tag}`).join(" ");
        userTags.textContent = formattedTags;
    } else {
        userTags.textContent = "#Image"; // Håndter tilfelle der det ikke finnes tags
    }

    userInfo.append(userName, userTags);
    cardTitle.append(userInfo);
    
    // Image: a div with bootstraps 4:3 ratio class, a wrapper inside that is absolute positioned, and an image inside imgContainer.
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("position-relative", "ratio", "ratio-4x3");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("position-absolute", "w-100", "h-100", "top-0", "start-0");

    const img = document.createElement("img");
    img.src = postData.media;
    img.classList.add("img-fluid", "rounded-1");
    img.alt = `Image from ${postData.title}`;
    imgContainer.append(img);
    
    // Control bar: a div with bootstrap classes, two divs inside that are flex containers with icons.
    const controlBar = document.createElement("div");
    controlBar.className = "d-flex flex-nowrap flex-row justify-content-between p-3 position-absolute start-0 end-0 bottom-0 container-fluid bg-dark bg-opacity-50 rounded-bottom-1";
    const iconsLeft = document.createElement("div");
    iconsLeft.className = "text-white gap-2";
    iconsLeft.innerHTML = `<i class="bi bi-chat-dots-fill px-2"></i><i class="bi bi-hearts px-2"></i>`;
    const iconsRight = document.createElement("div");
    iconsRight.className = "text-white";
    iconsRight.innerHTML = `<i class="bi bi-send-fill px-2"></i><i class="bi bi-bookmark-heart-fill px-2"></i>`;
    

    controlBar.append(iconsLeft, iconsRight);
    imgWrapper.append(controlBar);
    
    imgContainer.append(imgWrapper); 

    cardBody.append(imgContainer);

    card.append(cardBody, cardTitle, imgContainer);
    return card;
}

export function renderSpecificPostTemplates(postData, parent) {
postData.postTemplate(postData, parent);
    parent.append(...elements);
}
