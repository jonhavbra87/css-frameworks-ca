import { login } from "../api/auth/login.mjs"
import * as storage from "../storage/index.mjs"

export function setLoginFormListener() {
    const form = document.querySelector("#loginForm");

    if (form) {

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
            const email = profile.email;
           
            const noroffEmailPattern = /^[a-zA-Z0-9._%+-]+@(noroff\.no|stud\.noroff\.no)$/;

            if (!noroffEmailPattern.test(email)) {
                alert("Please enter a valid Noroff email address (@noroff.no or @stud.noroff.no).");
                return;
            }
         try {
            await login(profile);
            const user = storage.load("profile");
            if (user && user.name) {
                window.location.href = `/profile/?name=${user.name}`;
            } else {
                throw new Error("User is not stored in localStorage.");
            }
         } catch (error) {
            throw new Error("Failed to log in: " + error);
         }
        })
    }
}

