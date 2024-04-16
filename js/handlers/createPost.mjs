import { createPost } from "../api/posts/create.mjs"

export function setCreatePostListener() {
    const form = document.querySelector("#createPost");
    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const post = Object.fromEntries(formData.entries());
            console.log("I'm going to create a post with the following data:", post);

            if (post.tags) {
               const tagsArray = post.tags = post.tags
                  .split(",") //splits the string into an array
                  .map((tag) => tag.trim()) //remove whitespace
                  .filter((tag) => tag !== "") //remove empty strings
                  .map(tag => `#${tag}`); //add # to each tag
                post.tags = tagsArray.length > 0 ? tagsArray : [];
              } else {
                post.tags = [];
              }

            try {
                const response = await createPost(post);  // Legg til await her
                console.log("Post created successfully", response);
            } catch (error) {
                console.error("Failed to create the post:", error);
            }
        });
    }
}
