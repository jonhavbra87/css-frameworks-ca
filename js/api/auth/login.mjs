import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = API_SOCIAL_URL + action;

    const body = JSON.stringify(profile);

    const response = await fetch(loginURL, {
    headers: {
        "Content-Type": "application/json"
    },
    method,
    body
});
    if (response.ok) {
        const { accessToken, ...user } = await response.json();
        storage.save("accessToken", accessToken);
        storage.save("profile", user);
        alert("You have been logged in successfully");
    } else {
        throw new Error("Failed to log in: " + response.statusText);
    }

}
