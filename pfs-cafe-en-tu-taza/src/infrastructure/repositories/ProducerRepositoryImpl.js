import { ProducerRepository } from '../../domain/repositories/ProducerRepository.js';
import { ProducerApi } from '../api/ProducerApi.js';

export class ProducerRepositoryImpl extends ProducerRepository {
  async getAll() {
    return ProducerApi.getAll();
  }

  async getById(id) {
    return ProducerApi.getById(id);
  }
}
