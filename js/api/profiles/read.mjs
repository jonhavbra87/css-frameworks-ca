import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/profiles";


export async function getProfiles() {
    const updateProfileURL = `${API_SOCIAL_URL}${action}`;

    const response = await authFetch(updateProfileURL)
    return await response.json();
}


export async function getProfile(name) {
    console.log(name);
    if(!name) {
        throw new Error("Get post requires a name");
    }

    const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

    const response = await authFetch(getProfileURL)

    return await response.json();
}