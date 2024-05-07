export function filterToggle() {
    // Get the toggle button and the panel
    const filterToggle = document.getElementById('filterToggle');
    const filterPanel = document.getElementById('filterPanel');

    // Event listener for toggle button
    filterToggle.addEventListener('click', function() {
        // Toggle the 'collapse' class to show/hide the filterPanel
        
        filterPanel.classList.toggle('filter-visible');
        filterPanel.classList.toggle('filter-hidden');
    });
};
