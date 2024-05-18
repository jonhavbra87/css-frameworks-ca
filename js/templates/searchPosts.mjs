export async function searchPosts() {
    const formElement = document.getElementById("searchForm"); // Assuming you have a form with id="searchForm"
    const inputElement = document.getElementById("searchInput");

    if (formElement && inputElement) {
        formElement.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const value = inputElement.value.toLowerCase();
            
            const containers = document.querySelectorAll(".card"); 

            containers.forEach(function(container) {
                const text = container.textContent.toLowerCase();
                container.style.display = text.includes(value) ? '' : 'none';
            });
        });
    }
}
