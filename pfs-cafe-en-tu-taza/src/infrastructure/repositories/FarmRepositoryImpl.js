import { FarmRepository } from '../../domain/repositories/FarmRepository.js';
import { FarmApi } from '../api/FarmApi.js';

export class FarmRepositoryImpl extends FarmRepository {
  async getAll() {
    return FarmApi.getAll();
  }

  async getById(id) {
    return FarmApi.getById(id);
  }
}
