export async function setupSearchForm() {
    const inputElement = document.getElementById("searchInput");
    inputElement.addEventListener("submit", function() {
        let value = this.value.toLowerCase();
        const containers = document.querySelectorAll(".card"); 
        containers.forEach(function(container) {
            const text = container.textContent.toLowerCase();
            container.style.display = text.includes(value) ? '' : 'none';
        });
    });
}