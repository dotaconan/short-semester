import request from './../../../utils/request';


export async function doLogin(params) {
    return request( `/login`,{
        method: 'POST',
        body: JSON.stringify(params)
	});
}

export async function doLogout() {
	return request( `/logout`,{
		method: 'POST'
	});
}
