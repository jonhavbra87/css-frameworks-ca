export function editProfileButton() {
    const editProfileButton = document.getElementById("editProfileButton");
    editProfileButton.addEventListener("click", async () => {
        location.href = "/profile/edit/";
    });
}