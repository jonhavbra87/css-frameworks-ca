import { reactionListener } from "./createControlBar.mjs";

export function createReaction(postId) {
    const container = document.createElement("div");
    container.className = "reaction-container d-flex justify-content-around mt-2";
    container.style.display = 'none';

    const reactions = ["👍", "❤️", "😂", "🎉", "😢", "🤔"];
    reactions.forEach(symbol => {
        const button = document.createElement("button");
        button.textContent = symbol;
        button.className = "btn btn-light btn-sm";
        button.dataset.postId = postId;
        button.dataset.symbol = symbol;
        button.addEventListener('click', reactionListener);
        container.append(button);
    });

    return container;
}