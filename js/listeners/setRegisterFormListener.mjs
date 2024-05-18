import { register } from "../api/auth/register.mjs"

export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            console.log(event);
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
            
            register(profile);
        }) 
    }
}