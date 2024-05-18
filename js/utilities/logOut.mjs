/**
 * Sets up a log out functionality.
 * 
 * This function adds a click event listener to the log out button. When the button is clicked,
 * it clears the local storage to remove all user data and redirects the user to the home page.
 *
 * @function logOut - Sets up a log out functionality.
 * @returns {void} - No return value
 **/

export function logOut() {
    const logOutBtn = document.getElementById("logOut");
    
    logOutBtn.addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "/";
    });
}