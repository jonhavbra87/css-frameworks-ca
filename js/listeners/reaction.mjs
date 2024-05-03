import { reactToPost } from "../api/posts/reactToPost.mjs";

export async function reactionListener(event) {
    if (!event) {
        console.error("Event object is undefined");
        return;
    }
    const button = event.target;
    const postId = button.dataset.postId;

    
    if (postId && symbol) {
        try {
            const likesCount = await reactToPost(postId);
            document.getElementById('likeCount').textContent = likesCount;
        } catch (error) {
            alert("There was a problem reacting to this post");
        }
    }
}

