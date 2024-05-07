export function filterByReactions(posts) {
    const filteredReactions = posts.filter(post => post.reactions && post.reactions.length > 0);
     console.log(filteredReactions);
     return filteredReactions;
 }