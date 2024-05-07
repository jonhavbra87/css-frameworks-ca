export function searchToggle() {
    const searchToggle = document.getElementById('searchToggle');
    const searchPanel = document.getElementById('searchPanel');

    // Event listener for SearchToggle button
    searchToggle.addEventListener('click', function() {
        // Toggle the 'collapse' class to show/hide the searchPanel
        searchPanel.classList.toggle('search-visible');
        searchPanel.classList.toggle('search-hidden');
    });
};
