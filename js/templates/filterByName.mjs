export function filterByName(posts, name) {
    const filteredUsers = posts.filter(post => 
        post.author && post.author.name.toLowerCase().includes(name.toLowerCase()));
    //I have not manage to append the posts to the container, so I will just console.log the filteredUsers for now.
    console.log(filteredUsers);
    return filteredUsers;
}
