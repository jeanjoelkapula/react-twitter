import {POST, GET } from './axios.js';

const headers = {

}
export async function login(data) {
    const url = "auth/login/";
    const result = await POST(url, data);

    return result;
}

export async function logout() {
    const url = "auth/logout/";
    const result = await GET(url);

    return result;
}

export async function register (data) {
    const url = "auth/register/";
    const result = await POST(url, data);

    return result;
}

export async function getPosts(url = "posts/") {
    const result = await GET(url);

    return result;
}