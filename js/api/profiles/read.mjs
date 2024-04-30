import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/profiles";
// const method = "GET"; 

export async function getProfile(name) {
    console.log(name);
    if(!name) {
        throw new Error("Get post requires a name");
    }

    const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

    try {
        const response = await authFetch(getProfileURL);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            return 
        } else {
            throw new Error(`Failed to fetch profile: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;  // Rethrow the error to handle it further up the call stack if necessary
    }
}


export async function getProfiles() {
    const updateProfileURL = `${API_SOCIAL_URL}${action}`;
    console.log("Making API request to:", updateProfileURL);
    try {
        const response = await authFetch(updateProfileURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
            console.error('Data received is not an array:', data);
            return [];  // Return an empty array if data is not in expected format
        }
        return data;
    } catch (error) {
        console.error("Error fetching profiles:", error);
        return [];  // Return an empty array to handle errors gracefully
    }
}