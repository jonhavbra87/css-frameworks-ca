export function createHeaderInfoContainer(postData) {
    const headerInfo = document.createElement("div");
    headerInfo.classList.add("d-flex", "justify-content-between", "align-items-center")

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
        headerInfo.append(cardTitleAndTags);
        return headerInfo;
}