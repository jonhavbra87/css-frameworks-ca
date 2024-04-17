import * as templates from "./templates/index.mjs"
import * as listeners from "./handlers/index.mjs"


export default function router() {
    const path = location.pathname;

    switch (path) {
        case "/profile/login/":
            listeners.setLoginFormListenter();
            break;
        case "/profile/register/":
            listeners.setRegisterFormListenter();
            break;
        case "/profile/edit/":
            listeners.setUpdateProfileListenter();
            break;
        case "/post/create/":
            listeners.setCreatePostListener();
            break;
        case "/post/edit/":
            listeners.setUpdatePostListenter();
            break;
        case "/":
            listeners.setLoginFormListenter();
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