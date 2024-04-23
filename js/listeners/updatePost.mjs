import { getPost } from "../api/posts/read.mjs";
import { updatePost } from "../api/posts/update.mjs";


//make the old post data appear in the form. 
//This is done by getting the post data from the API and then setting the value of the form fields to the data from the API.


export async function setUpdatePostListener() {
    const form = document.querySelector("#updatePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const button =  form.querySelector("button");
        button.disabled = true;   

        const post = await getPost(id);

        form.title.value = post.title;
        form.body.value = post.body;
        form.tags.value = post.tags.join(", ");
        form.media.value = post.media;

        button.disabled = false;

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
            console.log("I'm going to create a post with the following data: ", post)
            post.id = id;

            
            if (post.tags) {
                const tagsArray = post.tags = post.tags
                   .split(",")
                   .map((tag) => tag.trim())
                   .filter((tag) => tag !== "");
         
                 post.tags = tagsArray.length > 0 ? tagsArray : [];
               } else {
                 post.tags = [];
               }

            try {
                const response = await updatePost(post); 
                console.log("Post created successfully", response);
            } catch (error) {
                console.error("Failed to create the post:", error);
            }
        })
    }
}

//For a hidden  input, for the ID, this could be an option:
//      const url = new URL(location.href);
//      const id = url.searchParams.get("id");

//inside the if statement, before form.addEventListener:
//        form.id.value = id;