import { load } from "../storage/index.mjs";


export async function headers() {
    const accessToken = load("accessToken");
    console.log(accessToken);
    
    if (!accessToken) {
        console.error("No access token available.");
        throw new Error("No access token available");
    } else {
        console.log("Access token available");
    }
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
    }
}

export async function authFetch(url, options) {
    const resolvedHeaders = await headers(); 
    //console.log("this is resolvedheaders:" , resolvedHeaders);
    //console.log("this is url:", url);
    //console.log("this is options:" , options);
    return fetch(url, {
        ...options,
        headers: resolvedHeaders
    })
}
