import { renderAllPostsTemplates } from "./posts.mjs";

export function filterByName(posts, name) {
   const filteredUsers = posts.filter((post) => post.author && post.author.name.toLowerCase() === name.toLowerCase());    
    console.log(filteredUsers);
}