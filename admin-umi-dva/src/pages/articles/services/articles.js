import request from '../../../utils/request';

export function fetch({ page = 1 }) {
  return request(`/article?page=${page}`)
}

export function remove(id) {
  return request(`/article/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  return request(`/article/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/article', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
