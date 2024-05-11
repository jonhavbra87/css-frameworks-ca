export function toggleChat(event) {
    const chatIcon = event.target;
    const postId = chatIcon.dataset.postId;
    console.log("postId:", postId);
    if (chatIcon.classList.contains('bi-balloon-heart')) {
        chatIcon.classList.remove('bi-balloon-heart');
        chatIcon.classList.add('bi-balloon-heart-fill');
        return;
    } 
}