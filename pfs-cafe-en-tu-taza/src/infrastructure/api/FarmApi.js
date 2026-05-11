import { httpClient } from './httpClient.js';

export const FarmApi = {
  getAll() {
    return httpClient.get('/pfs_cafe_en_tu_taza/farm/');
  },

  getById(id) {
    return httpClient.get(`/pfs_cafe_en_tu_taza/farm/${id}/`);
  },
};
