import { Producer } from '../../domain/entities/Producer.js';

export class GetProducers {
  constructor(producerRepository) {
    this._repository = producerRepository;
  }

  async execute() {
    const data = await this._repository.getAll();
    return data.map(item => new Producer(item));
  }
}
