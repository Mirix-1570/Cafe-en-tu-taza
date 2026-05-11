import { PostRepository } from '../../domain/repositories/PostRepository.js';
import { PostApi } from '../api/PostApi.js';

export class PostRepositoryImpl extends PostRepository {
  async getAll() {
    return PostApi.getAll();
  }

  async getById(id) {
    return PostApi.getById(id);
  }
}
