//--------------- This index file is from the v2 API This should be implemented at the end ---------------//


/* export const API_BASE = "https://v2.api.noroff.dev";
export const API_AUTH = "/auth/"; //`${API_BASE}/auth`
export const API_REGISTER = "/register"; //`${API_AUTH}/register`
export const API_LOGIN = "/login";
export const API_KEY_URL ="create-api-key"; */

/** 
 * saves a value to local storage
 * @param {string} key - the key to save the value under
 * @param {any} value - the value to save
**/

/* export function save (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
} */

/**
 *  returns a value from local storage
 * @param {string} key - the key to get the value for
**/

/* export function load (key) {
    return JSON.parse(localStorage.getItem(key));
} */

/**
 * fetches all the posts from the API
 * uses the API_BASE and the social/posts endpoint
 * 
 * @returns {Promise<Array>} - an array of posts
 * ```js
 * //fetches all the posts from the API & returns the response as JSON
 * export async function getPosts() {
 * const response = await fetch(API_BASE + "social/posts", {
 * headers: {
 * Authorization: `Bearer ${load("token")}`
 * }
 * });
 * //returns the response as JSON
 * ```
 */

/* export async function getPosts() {
    const response = await fetch(API_BASE + "social/posts", { //`${API_BASE}/posts`
        headers: {
            Authorization: `Bearer ${load("token")}`
        }
    });
    return await response.json();
} */

/* export async function getAPIKey() {
    const response = await fetch(API_BASE + API_AUTH + API_KEY_URL, {
     method: "POST",
     headers: { "Content-Type": "application/json", 
     Authorization: `Bearer ${load("token")}` 
    },
     body: JSON.stringify({
        name: "My API Key",
        }),
    });

    if (response.ok) {
        return await response.json();
    }

    console.error(await response.json());
    throw new Error("Could not register for an API key!");
} */

/* export async function registrer(name, email, password) {
    const response = await fetch(API_BASE + API_AUTH + API_REGISTER, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ name, email, password})
    });

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Could not register the account");
} */

/* export async function login(email, password) {
    const response = await fetch(API_BASE + API_AUTH + API_LOGIN, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ email, password})
    });

    if (response.ok) {
        const {accessToken, ...profile} = (await response.json()).data;
        save("token", accessToken);
        save("profile", profile);
        return profile;
    }

    throw new Error("Could not login the account");
} */

/* export async function onAuth(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (event.submitter.dataset.auth === "login") {
       await login(email, password);
    } else {
        await registrer(name, email, password);
        await login(email, password);
    }

    const posts = await getPosts();
    console.log(posts);
} */

/* export function setAuthListener() {
    document.forms.auth.addEventListener(".submit", onAuth); //Oliver Dipple Noroff API video
    //document.getElementById("authForm").addEventListener("submit", onAuth); //ChatGPT suggested this
} */

//setAuthListener();
//getAPIKey();