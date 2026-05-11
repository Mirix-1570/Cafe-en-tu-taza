import { Post } from '../../domain/entities/Post.js';

export class GetPosts {
  constructor(postRepository) {
    this._repository = postRepository;
  }

  async execute() {
    const data = await this._repository.getAll();
    return data.map(item => new Post(item));
  }
}
