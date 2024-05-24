import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/profiles";
const method = "put";
const media = "/media";

export async function updateProfile(profileData) {
    if (!profileData.name) {
        throw new Error(`Update needs a name: ${updateProfile.status}`);
      }
    
    const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}${media}`
    
    const response = await authFetch(updateProfileURL, {
        method,
        body: JSON.stringify(profileData)
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.statusText}`);
}
return await response.json();
}