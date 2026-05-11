import { httpClient } from './httpClient.js';

export const ProductApi = {
  getAll() {
    return httpClient.get('/pfs_cafe_en_tu_taza/product/');
  },

  getById(id) {
    return httpClient.get(`/pfs_cafe_en_tu_taza/product/${id}/`);
  },

  create(data) {
    return httpClient.post('/pfs_cafe_en_tu_taza/product/', data);
  },

  update(id, data) {
    return httpClient.put(`/pfs_cafe_en_tu_taza/product/${id}/`, data);
  },

  delete(id) {
    return httpClient.delete(`/pfs_cafe_en_tu_taza/product/${id}/`);
  },
};
