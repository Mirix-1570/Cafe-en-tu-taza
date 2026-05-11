import { Product } from '../../domain/entities/Product.js';

export class GetProducts {
  constructor(productRepository) {
    this._repository = productRepository;
  }

  async execute() {
    const data = await this._repository.getAll();
    return data.map(item => new Product(item));
  }
}
