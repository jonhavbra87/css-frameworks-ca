export function toggleFilter() {
  
    const toggleFilter = document.getElementById('toggleFilter');
    const filterIcon = toggleFilter.querySelector('i');
    const filterPanel = document.getElementById('filterPanel');

    toggleFilter.addEventListener('click', function() {
      
        
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
