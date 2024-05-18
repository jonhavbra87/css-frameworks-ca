/**
 * Filters posts to include only those that have reactions.
 *
 * @param {Array} posts - The array of posts to filter.
 * @returns {Array} - The filtered array of posts that have reactions.
 */

export function filterByReactions(posts) {
    const filteredReactions = posts.filter(post => post.reactions && post.reactions.length > 0);
     console.log(filteredReactions);
     return filteredReactions;
 }