import { baseUrl, maxItems } from "../variables.js";

async function getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`);
    return await response.json()
}

async function getFollower(userName){
    const response = await fetch(`${baseUrl}/${userName}/followers`)
    return await response.json()
}

async function getFollowing(userName){
    const response = await fetch(`${baseUrl}/${userName}/following`)
    return await response.json()
}

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events`);
    return await response.json()   
}

export { getUser, getFollower, getFollowing, getEvents }
