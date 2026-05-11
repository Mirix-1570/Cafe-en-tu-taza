import { useState, useEffect } from 'react';
import { GetFarms } from '../../application/use_cases/GetFarms.js';
import { FarmRepositoryImpl } from '../../infrastructure/repositories/FarmRepositoryImpl.js';

const getFarms = new GetFarms(new FarmRepositoryImpl());

export function useFarms() {
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFarms.execute()
      .then(setFarms)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { farms, loading, error };
}
