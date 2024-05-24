import { register } from "../api/auth/register.mjs"

export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
            const email = profile.email;
           
            const noroffEmailPattern = /^[^\s@]+@(noroff.no|stud.noroff.no)$/i;

            if (!noroffEmailPattern.test(email)) {
                alert("Please enter a valid Noroff email address (@noroff.no or @stud.noroff.no).");
                return;
            }
            
            register(profile);
        }) 
    }
}