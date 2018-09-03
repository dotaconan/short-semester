import request from './../../../utils/request';
import { serverIP } from './../../../utils/BaseServer'

export async function doLogin(params) {
    return request( `${serverIP}/user/login`,{
        method: 'POST',
        body: JSON.stringify(params)
	});
}

export async function doLogout() {
	return request( `${serverIP}/user/logout`,{
		method: 'POST'
	});
}
