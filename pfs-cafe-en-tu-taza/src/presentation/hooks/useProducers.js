import { useState, useEffect } from 'react';
import { GetProducers } from '../../application/use_cases/GetProducers.js';
import { ProducerRepositoryImpl } from '../../infrastructure/repositories/ProducerRepositoryImpl.js';

const getProducers = new GetProducers(new ProducerRepositoryImpl());

export function useProducers() {
  const [producers, setProducers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducers.execute()
      .then(setProducers)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { producers, loading, error };
}
