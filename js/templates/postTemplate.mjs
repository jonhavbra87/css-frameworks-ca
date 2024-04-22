export function postTemplate(postData) {

    if (!postData.media) {
        return null;  // Return null, so that if a post without media is passed, it is not rendered
    }
    
    // Card: a div with bootstrap classes
    const card = document.createElement("div");
    card.classList.add("card", "mx-auto", "pb-2", "border", "border-1", "rounded", "col-12", "col-md-6", "col-lg-4");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "px-1", "m-0");

    const headerInfo = document.createElement("div");
    headerInfo.classList.add("d-flex", "justify-content-between", "align-items-center")
    // Div for title and tags
    const cardTitleAndTags = document.createElement("div");
    cardTitleAndTags.classList.add("d-flex", "flex-column", "align-items-start", "py-1");

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("fw-bold", "mb-1");
    cardTitle.textContent = postData.title; // Assuming postData.title is available
    
    const cardTags = document.createElement("p");
    cardTags.classList.add("text-wrap", "fw-light");
    if (postData.tags && postData.tags.length) {
        const formattedTags = postData.tags.map(tag => `#${tag}`).join(" ");
        cardTags.textContent = formattedTags;
    } else {
        cardTags.textContent = "#Image"; // Default tag in case there are no tags
    }
    
    cardTitleAndTags.append(cardTitle, cardTags);

    // Div for username and image
    const userInfo = document.createElement("div");
    userInfo.classList.add("d-flex", "flex-column", "justify-content-between", "align-items-center", "mt-2");

    const userNameElement = document.createElement("h6");
    userNameElement.classList.add("fw-bold");
    userNameElement.textContent = postData.author.name; // Assuming postData.userName is available
    userNameElement.textContent = postData.author && postData.author.name ? postData.author.name : "Unknown Author";

    const userImage = document.createElement("img");
    userImage.classList.add("rounded-circle");
     // Set a default image if author or avatar is missing
    if (postData.author && postData.author.avatar) {
        // If postData.author and postData.author.avatar exist and are truthy
        userImage.src = postData.author.avatar;
    } else {
        // If either postData.author is falsy or postData.author.avatar is falsy
        userImage.src = "https://upload.wikimedia.org/wikipedia/commons/9/9d/Unknown_Member.jpg?20170805162126";
    }

    //  userImage.src = postData.author && postData.author.avatar ? postData.author.avatar : "https://upload.wikimedia.org/wikipedia/commons/9/9d/Unknown_Member.jpg?20170805162126";
    userImage.alt = `Profile of ${postData.author ? postData.author.name : "Unknown"}`;
    userImage.style.width = "40px"; // Set image width
    userImage.style.height = "40px"; // Set image height

    userInfo.append(userImage, userNameElement);

    headerInfo.append(cardTitleAndTags, userInfo);
    
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

    card.append(cardBody, headerInfo, imgContainer);

    return card;
}