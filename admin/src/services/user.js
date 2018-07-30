import {request} from '../utils/request';

const LOGIN_API = '/admin';

export async function doLogin(params) {
    return request( `${LOGIN_API}/login`,{
        method: 'POST',
        body: JSON.stringify(params)
	});
}

export async function doLogout() {
	return request( `${LOGIN_API}/logout`,{
		method: 'POST'
	});
}
