import * as templates from "./templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"
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
            testTemplate();
            break;
        default:
            console.log("I'm not going to do anything because I'm not on the login or register page");
    }
}

//Rendering the post(s)
async function testTemplate() {
    console.log("I'm on the posts page");
    const posts = await postMethods.getPosts();

    const container = document.querySelector("#post");
    templates.renderPostTemplates(posts, container);
    console.log(posts);
}

/* createPost( {
    title: "examplasdf",
    body: "heuhjeg"
}) */

//post.removePost(11685)

//post.getPosts().then(console.log);
//post.getPost(1168).then(console.log);


