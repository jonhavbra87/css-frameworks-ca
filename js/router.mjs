import * as templates from "./templates/index.mjs";
import * as listeners from "./handlers/index.mjs";


export default function router() {
    const path = location.pathname;

    switch (path) {
        case "/profile/":
            templates.renderProfile();
            break;
        case "/profile/login/":
            listeners.setLoginFormListener();
            break;
        case "/profile/register/":
            listeners.setRegisterFormListener();
            break;
        case "/profile/edit/":
            listeners.setUpdateProfileListener();
            break;
        case "/post/create/":
            listeners.setCreatePostListener();
            break;
        case "/post/edit/":
            listeners.setUpdatePostListener();
            break;
        case "/post/delete/":
            listeners.setDeletePostListener();
            break;
        case "/":
            console.log("Welcome to Polarise!");
            break;
        case "/posts/":
            templates.renderPosts();
            break;
        case "/post/":
            templates.renderPost();
            break;
        default:
            console.log("I'm not going to do anything because I'm not on the login or register page");
    }
}