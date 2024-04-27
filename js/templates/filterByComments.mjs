export function filterByComments(posts) {
    const filteredComments = posts.filter(post => post.comments && post.comments.length > 0);
     console.log(filteredComments);
 }