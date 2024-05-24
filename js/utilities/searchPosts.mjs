/**
 * Sets up the search functionality for filtering posts based on user input.
 * 
 * This function adds a submit event listener to the search form, preventing
 * the default form submission behavior. It filters the displayed posts 
 * based on the search input value, showing only the posts that include the
 * search query.
 *
 * @async - Makes a asynchronism request to the server
 * @function searchPosts - Sets up the search functionality for filtering posts based on user input.
 **/

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
