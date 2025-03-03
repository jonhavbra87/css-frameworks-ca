export function filterByComments(posts) {
    const filteredComments = posts.filter(post => post.comments && post.comments.length > 0);
     //I have not manage to append the posts to the container, so I will just console.log the filterByComment for now.
     console.log(filteredComments);
     return filteredComments;
 }