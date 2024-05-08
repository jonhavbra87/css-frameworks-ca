export function filterToggle() {
    // Get the toggle button and the panel
    const filterToggle = document.getElementById('filterToggle');
    const filterIcon = filterToggle.querySelector('i');
    const filterPanel = document.getElementById('filterPanel');

    // Event listener for toggle button
    filterToggle.addEventListener('click', function() {
        // Toggle the 'collapse' class to show/hide the filterPanel
        
        filterPanel.classList.toggle('filter-visible');
        filterPanel.classList.toggle('filter-hidden');

          // Toggle between not filled and filled icons
          if (filterIcon.classList.contains('bi-filter-circle')) {
            filterIcon.classList.remove('bi-filter-circle');
            filterIcon.classList.add('bi-filter-circle-fill');
        } else {
            filterIcon.classList.remove('bi-filter-circle-fill');
            filterIcon.classList.add('bi-filter-circle');
        }
    });
};
