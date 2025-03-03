export function toggleHeart(event) {
    const heartIcon = event.target;
    const postId = heartIcon.dataset.postId;
    
    if (heartIcon.classList.contains('bi-balloon-heart')) {
        heartIcon.classList.remove('bi-balloon-heart');
        heartIcon.classList.add('bi-balloon-heart-fill');
        return;
    } 
}