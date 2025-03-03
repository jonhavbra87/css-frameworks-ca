/**
 * Filters posts to include only those that have reactions.
 *
 * @param {Array} posts - The array of posts to filter.
 * @returns {Array} - The filtered array of posts that have reactions.
 */

export function filterByReactions(posts) {
    const filteredReactions = posts.filter(post => post.reactions && post.reactions.length > 0);
     //I have not manage to append the posts to the container, so I will just console.log the filterByReactions for now.
     console.log(filteredReactions);
     return filteredReactions;
 }