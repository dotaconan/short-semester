import fetch from 'dva/fetch';

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

 /*
 const defaultOptionsProd = {
    credentials: 'same-origin',
    headers: {
		'content-type': 'application/json'
    },
};
 */
const defaultOptions = {
    mode: 'cors',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json'
    },
};
export function request(url, options) {
    // fetch(url, {...defaultOptions, ...options})
    return fetch(url, {...defaultOptions, ...options})
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => ({ data }))
        .catch((err) => ({ err }));
}