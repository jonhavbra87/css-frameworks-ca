export function postTemplate(postData) {
    if (!postData.media) {
        return null;  // Return null, so that if a post without media is passed, it is not rendered
    }

    const card = document.createElement("div");
    card.classList.add("card", "mx-auto", "pb-2", "border", "border-1", "rounded", "col-12", "col-md-6", "col-lg-4");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "px-1", "m-0");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title", "d-flex", "flex-column", "align-items-start", "justify-content-between", "py-1");
    const userInfo = document.createElement("div");
    userInfo.classList.add("d-flex", "flex-column");
    
    const userName = document.createElement("h4");
    userName.classList.add("fw-bold", "col-12");
    userName.textContent = postData.title;


    const userTags = document.createElement("p");
    userTags.classList.add("text-wrap", "fw-light", "col-12");
    
        // Legge til # foran hver tag og konvertere listen til en streng
    if (postData.tags && postData.tags.length) {
        const formattedTags = postData.tags.map(tag => `#${tag}`).join(" ");
        userTags.textContent = formattedTags;
    } else {
        userTags.textContent = "No tags"; // Håndter tilfelle der det ikke finnes tags
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

export function renderPostTemplates(postDataList, parent) {
    const elements = postDataList.map(postTemplate).filter(el => el !== null);
    parent.append(...elements);
}



/* export function postTemplate(postData) {
    if (!postData.media) {
        return null;  // Return null, so that if a post without media is passed, it is not rendered
    }

    const card = document.createElement("div");
    card.classList = "card mx-auto border border-1 rounded col-12 col-md-6 col-lg-4";

    const cardBody = document.createElement("div");
    cardBody.classList = "card-body px-1 m-0";

    // TTitle and Body
    const cardTitle = document.createElement("div");
    cardTitle.classList = "card-title d-flex flex-row align-items-start justify-content-between py-1";
    const userInfo = document.createElement("div");
    userInfo.classList = "d-flex flex-column";
    
    const userName = document.createElement("h5");
    userName.classList = "fw-bold col-10";
    userName.textContent = postData.title; // Her bruker vi `title` fra post-dataene

    // Tags (antatt å være en array av strenger)
    const userTags = document.createElement("p");
    userTags.classList = "text-wrap fw-light col-10";
    userTags.textContent = postData.tags.join(" ");  // Viser tags som en sammenhengende streng

    userInfo.append(userName, userTags);
    cardTitle.append(userInfo);

    // Legge til hovedbilde
    const img = document.createElement("img");
    img.src = postData.media;
    img.classList = "img-fluid rounded-1";
    img.alt = "Image from " + postData.title;
    cardBody.append(img);
    

    card.append(cardBody, cardTitle, img);
    return card;
}

export function renderPostTemplates(postDataList, parent) {
    const elements = postDataList.map(postTemplate).filter(el => el !== null); // Filtrer ut null-verdier
    parent.append(...elements);
} */


/* export function postTemplateB(postData) {
    const post = document.createElement("div");
    post.classList.add("post");


    const title = document.createElement("h2");
    title.textContent = postData.title;


    const body = document.createElement("p");
    body.textContent = postData.body;


    post.append(title, body);


    if (postData.media) {
        const img = document.createElement("img");
        img.src = postData.media;
        img.alt = `Image from ${postData.title}`;
        post.append(img);
    }

    if (postData.tags && postData.tags.length) {
        const tagList = document.createElement("ul");
        postData.tags.forEach(tag => {
            const tagItem = document.createElement("li");
            tagItem.textContent = tag;
            tagList.append(tagItem); 
        });
        post.append(tagList);
    }

    return post;
} */
