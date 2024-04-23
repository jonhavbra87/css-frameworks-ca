import { reactToPost } from "../api/posts/reactToPost.mjs";

export async function reactionListener(event) {
    if (!event) {
        console.error("Event object is undefined");
        return;
    }
    const button = event.target;
    const symbol = button.dataset.symbol;
    const postId = button.dataset.postId;

    
    if (postId && symbol) {
        try {
            await reactToPost(postId, symbol);
   
        } catch {
            return alert("There was a problem reacting to this post");
        }
    }
}

