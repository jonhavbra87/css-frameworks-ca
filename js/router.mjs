import * as templates from "./templates/index.mjs";
import * as listeners from "./listeners/index.mjs";
import * as utilities from "./utilities/index.mjs";


export default function router() {

    const path = location.pathname;

    switch (path) {
        case "/profile/":
            templates.renderProfile();
            listeners.editProfileButton();
            utilities.logOut();
            break;
        case "/profile/login/":
            listeners.setLoginFormListener();
            break;
        case "/profile/register/":
            listeners.setRegisterFormListener();
            break;
        case "/profile/edit/":
            listeners.setUpdateProfileListener();
            listeners.backButton();
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
            utilities.logOut();
            templates.renderPosts();
            templates.setupSearchForm();
            listeners.filterToggle();
            listeners.searchToggle();
            break;
        case "/post/":
            utilities.logOut();
            templates.renderPost();
            listeners.reactionButton();
            break;
        default:
            console.log("I'm not going to do anything because I'm not on the login or register page");
    }
}