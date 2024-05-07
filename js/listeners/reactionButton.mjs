import { reactToPost } from "../api/posts/reactToPost.mjs";
import { load } from "../storage/index.mjs";

const token = localStorage.getItem("accessToken");
const parsedToken = JSON.parse(token);
//console.log("parsedToken:", parsedToken);

export async function reactionButton() {
    document.addEventListener("click", async (event) => {
        if (event.target.id === "likeButton") {
            console.log("Reaction button clicked");

            const url = new URL(location.href);

            let id = url.searchParams.get("id");
            console.log("id:", id);
            //load("accessToken");
            // const postId = event.target.getAttribute("post-id");


            try {
            
            //const reactionData = await reactToPost(id);
      
            const reactionData = await fetch("https://api.noroff.dev/api/v1/social/posts/11999/react/👍", {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${parsedToken}`,
            },
           
            });  

            //if response ok - fyll hjertet med farge

            } catch (error) {
                console.error("Failed to react to post", error);
            }
        }
    });
}
