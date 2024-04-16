export function postTemplate(postData) {
    if (!postData.media) {
        return null;  // Returnerer null hvis det ikke er noe bilde, slik at ingenting rendres
    }

    const card = document.createElement("div");
    card.classList = "card mx-auto border border-1 rounded col-12 col-md-6 col-lg-4";

    const cardBody = document.createElement("div");
    cardBody.classList = "card-body px-1 m-0";

    // Tittel og brukerinfo
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
    

    card.append(cardBody, cardTitle);
    return card;
}


export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
    const elements = postDataList.map(postTemplate).filter(el => el !== null); // Filtrer ut null-verdier
    parent.append(...elements);
}


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
