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
            console.log("I'm going to login the user with the following data: ", profile)

         try {
            await login(profile);
            const user = storage.load("profile");
            if (user && user.name) {
                window.location.href = `/profile/?name=${user.name}`;
            } else {
                throw new Error("Brukernavn er ikke lagret i localStorage.");
            }
         } catch (error) {
            console.error("Login failed:", error);
         }
           

        })
    }
}

