import { getProfile, updateProfile } from "../api/profiles/index.mjs";
import { load } from "../storage/index.mjs";


export async function setUpdateProfileListener() {
    const form = document.querySelector("#editProfile");

    if (form) {
        const { name, email } = load("profile");

        form.name.value = name;
        form.email.value = email;
        
        const button =  form.querySelector("button");
        button.disabled = true;   

        const profile = await getProfile(name);

    
        //Because we are writing these two, they are fresh when we are updating the profile.
        form.banner.value = profile.banner;
        form.avatar.value = profile.avatar;

        button.disabled = false;

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
           
            profile.name = name;
            profile.email = email;

            try {
                const response = await updateProfile(profile);
                console.log("Profile update successfully", response);
            } catch (error) {
                console.error("Failed to update the profile:", error);
            }
        })
    }
}
