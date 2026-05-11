import { httpClient } from './httpClient.js';

export const PostApi = {
  getAll() {
    return httpClient.get('/pfs_cafe_en_tu_taza/post/');
  },

  getById(id) {
    return httpClient.get(`/pfs_cafe_en_tu_taza/post/${id}/`);
  },
};
