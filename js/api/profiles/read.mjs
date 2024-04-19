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

    try {
        const response = await authFetch(getProfileURL);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(`Failed to fetch profile: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;  // Rethrow the error to handle it further up the call stack if necessary
    }
}