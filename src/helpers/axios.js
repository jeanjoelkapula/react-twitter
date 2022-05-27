import axios from "axios";
import { toast } from "react-toastify";
const apiBaseURL = 'http://127.0.0.1:8000/api';

export async function GET(url) {
    var result = null;  

    await axios.get(`${apiBaseURL}/${url}`)
    .then(response => {
        console.log(response);
        const {data} = response;
        result = data;
    })
    .catch(error => {
        var error;
        if (error.resposne) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            error = {
                message: error.response
            };
            toast.error(JSON.stringify(error.response.data));

        } else if (error.message) {
            // the error message is available,
            // let's display it on error toast
            error = {
                    message: error.message
                };
            toast.error(JSON.stringify(error.message));
        } else {
            // strange error, just show it
            error = {
                message: error
            };
            toast.error(JSON.stringify(error));
        }

        result = {
            errors:{
                error
            }
        };
    });

    return result;
}

// if need for headers etc.

const headers = 'some headers';

export async function POST(url, data)  {
    var result = null;

    await axios({
        url: `${apiBaseURL}/${url}`,
        method: 'POST',
        data,
    })
    .then(response => {
        const {data} = response;
        result = data;
    })
    .catch(error => {
        var error;
        if (error.resposne) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            error = {
                message: error.response
            };
            toast.error(JSON.stringify(error.response.data));

        } else if (error.message) {
            // the error message is available,
            // let's display it on error toast
            error = {
                    message: error.message
                };
            toast.error(JSON.stringify(error.message));
        } else {
            // strange error, just show it
            error = {
                message: error
            };
            toast.error(JSON.stringify(error));
        }

        result = {
            errors: {
                error
            }
        };
    });

    return result;
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