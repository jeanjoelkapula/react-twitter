import {POST, GET } from './fetchHelper.js';

export async function login(data) {
    const url = "auth/login/";
    const result = await POST(url,{}, data);

    return result;
}

export async function logout() {
    const url = "auth/logout/";
    const result = await GET(url);

    return result;
}