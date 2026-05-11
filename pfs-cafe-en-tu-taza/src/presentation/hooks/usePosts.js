import { useState, useEffect } from 'react';
import { GetPosts } from '../../application/use_cases/GetPosts.js';
import { PostRepositoryImpl } from '../../infrastructure/repositories/PostRepositoryImpl.js';

const getPosts = new GetPosts(new PostRepositoryImpl());

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPosts.execute()
      .then(setPosts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
}
