import request from '../../../utils/request';

export function fetch({ page = 1 }) {
  return request(`/article_api?page=${page}`)
}

export function remove(id) {
  return request(`/article_api/${id}`, {
    method: 'DELETE',
  });
}

export function patch(values) {
  return request(`/article_api/${values._id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/article_api', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
