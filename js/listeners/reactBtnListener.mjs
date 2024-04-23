export function reactBtnListener(params) {
    document.addEventListener('click', function(event) {
        // Check if the clicked element is a reaction button
        if (event.target && event.target.matches("button[data-post-id][data-symbol]")) {
            listeners.reactionListener(event);
        }
    });
}