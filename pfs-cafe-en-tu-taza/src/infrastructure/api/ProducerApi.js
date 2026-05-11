import { httpClient } from './httpClient.js';

export const ProducerApi = {
  getAll() {
    return httpClient.get('/pfs_cafe_en_tu_taza/producer/');
  },

  getById(id) {
    return httpClient.get(`/pfs_cafe_en_tu_taza/producer/${id}/`);
  },
};
