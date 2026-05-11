import { useState, useEffect } from 'react';
import { GetProducts } from '../../application/use_cases/GetProducts.js';
import { ProductRepositoryImpl } from '../../infrastructure/repositories/ProductRepositoryImpl.js';

const getProducts = new GetProducts(new ProductRepositoryImpl());

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts.execute()
      .then(setProducts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
