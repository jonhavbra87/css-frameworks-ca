import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/profiles";

export async function getProfile(name) {
    if (!name) {
        throw new Error(`Profile name is required. Received name: ${name}`);
    }
    
    const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;
    
    try {
        const response = await authFetch(getProfileURL);
        if (response.ok) {
            const profileData = await response.json();
            return profileData;
        } else {
            throw new Error(`Failed to fetch profile: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error; 
    }
}