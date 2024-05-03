import { reactionListener } from "./reactionListener.mjs";


export function reactBtnListener(count) {
   let likeButton = document.getElementById('likeButton')
   console.log(likeButton);
   likeButton.addEventListener('click', reactionListener(count));
}

