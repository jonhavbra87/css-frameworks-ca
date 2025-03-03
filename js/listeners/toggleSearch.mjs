export function toggleSearch() {
    const toggleSearch = document.getElementById('toggleSearch');
    const searchIcon = toggleSearch.querySelector('i');
    const searchPanel = document.getElementById('searchPanel');

    // Event listener for toggleSearch button
    toggleSearch.addEventListener('click', function() {
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
