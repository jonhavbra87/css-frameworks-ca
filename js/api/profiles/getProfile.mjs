import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/profiles";


// export async function getProfiles() {
//     try {
//         const url = (API_SOCIAL_URL + action);
//         console.log(url);
//         const profiles = await doFetch(url);
//         if (!Array.isArray(profiles)) {
//             console.error('Data received is not an array:', profiles);
//             return [];  // Return an empty array if data is not in expected format
//         }
//         return profiles;
//     } catch (error) {
//         console.error("Error fetching profiles:", error.message);
//         return [];  // Return an empty array to handle errors gracefully
//     }
// }

export async function getProfile(name) {
    if(!name) {
        throw new Error("Get post requires a name");
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
        throw error;  // Rethrow the error to handle it further up the call stack if necessary
    }
}