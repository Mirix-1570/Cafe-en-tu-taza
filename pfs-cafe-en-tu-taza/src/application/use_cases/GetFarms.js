import { Farm } from '../../domain/entities/Farm.js';

export class GetFarms {
  constructor(farmRepository) {
    this._repository = farmRepository;
  }

  async execute() {
    const data = await this._repository.getAll();
    return data.map(item => new Farm(item));
  }
}
