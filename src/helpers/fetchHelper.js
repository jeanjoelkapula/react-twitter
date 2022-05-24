import axios from "axios";
const apiBaseURL = 'http://127.0.0.1:8000/api';

export const GET = url => {
    return axios.get(`${apiBaseURL}/${url}`);
}

// if need for headers etc.

const headers = 'some headers';

export const POST = (url, headers, data) => {
    return axios({
        url: `${apiBaseURL}/${url}`,
        method: 'POST',
        headers: headers,
        data,
    });
}

export const setAxiosAuthToken = token => {
    if (typeof token !== "undefined" && token) {
      // Apply for every request
      axios.defaults.headers.common["Authorization"] = "Token " + token;
    } else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  };