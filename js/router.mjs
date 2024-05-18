import * as templates from "./templates/index.mjs";
import * as listeners from "./listeners/index.mjs";
import * as utilities from "./utilities/index.mjs";


export default function router() {

    const path = location.pathname;

    switch (path) {
        case "/profile/":
            templates.renderProfile();
            listeners.editProfileButton();
            templates.viewProfilePosts();
            listeners.navigateToLoggedInProfileListener();
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
            listeners.navigateToLoggedInProfileListener();
            utilities.logOut();
            break;
        case "/post/create/":
            listeners.setCreatePostListener();
            listeners.navigateToLoggedInProfileListener();
            utilities.logOut();
            break;
        case "/post/edit/":
            listeners.setUpdatePostListener();
            listeners.navigateToLoggedInProfileListener();
            utilities.logOut();
            break;
        case "/post/delete/":
            listeners.setDeletePostListener();
            listeners.navigateToLoggedInProfileListener();
            utilities.logOut();
            break;
        case "/":
            console.log("Welcome to Polarise!");
            break;
        case "/posts/":
            utilities.logOut();
            templates.renderPosts();
            utilities.searchPosts();
            listeners.toggleFilter();
            listeners.toggleSearch();
            listeners.navigateToLoggedInProfileListener();
            break;
        case "/post/":
            utilities.logOut();
            templates.renderPost();
            listeners.reactionButton();
            listeners.backButton();
            listeners.navigateToLoggedInProfileListener();
            break;
        default:
            console.log("I'm not going to do anything because I'm not on the login or register page");
    }
}