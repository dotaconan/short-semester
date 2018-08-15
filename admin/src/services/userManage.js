import { request } from '../utils/request';

const USER_MANAGE_API = '/user';

export async function getAllUser() {
    return request(`${USER_MANAGE_API}`, {
        method: 'GET'
    });
}

export async function changeAuth(params) {
    return request(`${USER_MANAGE_API}/modify`, {
        method: 'POST',
        body: JSON.stringify(params)
    });
}

export async function deleteUser(params) {
    return request(`${USER_MANAGE_API}`, {
        method: 'POST',
        body: JSON.stringify(params)
    });
}