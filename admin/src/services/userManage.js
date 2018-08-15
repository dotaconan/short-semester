import { request } from '../utils/request';

const USER_MANAGE_API = '/user';

export async function getAllUser() {
    return request(`${USER_MANAGE_API}`, {
        method: 'GET'
    });
}