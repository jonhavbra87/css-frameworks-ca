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


/*

//This is a way to do it, but it's not the best.

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


We could also do it this way, but it's not the best way to do it. Ref Oliver Dipple ;)
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const banner = form.banenr.value;
    const avatar = form.avatar.value;  

const profile = {
    name,
    email,
    password,
    banner,
    avatar,
 */