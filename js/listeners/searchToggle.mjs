export function searchToggle() {
    const searchToggle = document.getElementById('searchToggle');
    const searchIcon = searchToggle.querySelector('i');
    const searchPanel = document.getElementById('searchPanel');

    // Event listener for SearchToggle button
    searchToggle.addEventListener('click', function() {
        // Toggle the 'collapse' class to show/hide the searchPanel
        searchPanel.classList.toggle('search-visible');
        searchPanel.classList.toggle('search-hidden');

                 // Toggle between not filled and filled icons
                 if (searchIcon.classList.contains('bi-search-heart')) {
                    searchIcon.classList.remove('bi-search-heart');
                    searchIcon.classList.add('bi-search-heart-fill');
                } else {
                    searchIcon.classList.remove('bi-search-heart-fill');
                    searchIcon.classList.add('bi-search-heart');
                }
    });
};
