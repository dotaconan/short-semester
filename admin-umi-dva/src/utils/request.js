import fetch from 'dva/fetch';

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
export default async function request(url, options) {
  const response = await fetch(url, {...defaultOptions, ...options});

  checkStatus(response);
  const data = await response.json();
  console.log(data)
  const ret = {
    data,
    headers: {},
  };

  return ret;
}
