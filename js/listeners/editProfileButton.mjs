export function editProfileButton() {
    const editProfileButton = document.getElementById("editProfileButton");
    editProfileButton.addEventListener("click", async () => {
        console.log("Edit profile button clicked");
        location.href = "/profile/edit/";
    });
}