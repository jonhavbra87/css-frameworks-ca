export function filterByUserName(posts, username) {
    if (!Array.isArray(posts) || !username) {
        return [];  // Returns an empty array if inputs are not valid
    }
    return posts.filter(post => post.username && post.username.toLowerCase() === username.toLowerCase());
}

export function filterByTags(posts, tags) {
    return posts.filter(post => post.tags && post.tags.some(tag => tags.includes(tag.toLowerCase())));
}

//sortering på dato, navn, kommentarer, followers