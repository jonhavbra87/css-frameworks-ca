export function toggleHeart(event) {
    const heartIcon = event.target;
    const postId = heartIcon.dataset.postId;
    console.log("postId:", postId);
    if (heartIcon.classList.contains('bi-chat-dots')) {
        heartIcon.classList.remove('bi-chat-dots');
        heartIcon.classList.add('bi-chat-dots-fill');
        return;
    } 
}