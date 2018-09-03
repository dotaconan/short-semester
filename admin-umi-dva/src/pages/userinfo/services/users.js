import request from '../../../utils/request';

export function getUser({ page = 1 }) {
  return request(`/user?page=${page}`)
}

export function remove(id) {
  return request(`/user/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  return request(`/user/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/user', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
