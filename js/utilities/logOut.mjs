export function logOut() {
    const logOutBtn = document.getElementById("logOut");
    
    logOutBtn.addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "/";
    });
}