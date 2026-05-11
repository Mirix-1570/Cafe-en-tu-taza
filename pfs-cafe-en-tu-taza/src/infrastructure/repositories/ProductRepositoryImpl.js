import { ProductRepository } from '../../domain/repositories/ProductRepository.js';
import { ProductApi } from '../api/ProductApi.js';

export class ProductRepositoryImpl extends ProductRepository {
  async getAll() {
    return ProductApi.getAll();
  }

  async getById(id) {
    return ProductApi.getById(id);
  }
}
