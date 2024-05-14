export function createHeaderInfoContainer(postData) {
    const headerInfo = document.createElement("div");
    headerInfo.classList.add("d-flex", "justify-content-between", "align-items-center")

    const cardTitleAndTags = document.createElement("div");
    cardTitleAndTags.classList.add("d-flex", "flex-column", "align-items-start", "py-1");

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("fw-bold", "mb-1");
    cardTitle.textContent = postData.title;
    
    const cardTags = document.createElement("p");
    cardTags.classList.add("text-wrap", "fw-light");
    if (postData.tags && postData.tags.length) {
  // Process each tag to ensure it starts with a '#'
  const formattedTags = postData.tags.map(tag => {
    // Trim the tag to remove leading/trailing whitespace
    const trimmedTag = tag.trim();

    // Replace spaces within tags with underscores
    const sanitizedTag = trimmedTag.replace(/\s+/g, '_');

    // Check if the sanitized tag starts with '#', and prepend if it doesn't
    if (sanitizedTag.startsWith('#')) {
        return sanitizedTag;
    } else {
        return `#${sanitizedTag}`;
    }
}).join(" ");

cardTags.textContent = formattedTags;

    } else {
        cardTags.textContent = "#Image"; // Default tag in case there are no tags
    }
        cardTitleAndTags.append(cardTitle, cardTags);
        headerInfo.append(cardTitleAndTags);
        return headerInfo;
}