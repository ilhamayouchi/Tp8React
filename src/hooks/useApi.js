import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export function useApi(url, options = { method: 'GET', client: 'fetch' }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);
    if (options.client === 'axios') {
      axios.get(url)
        .then(res => setData(res.data))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    } else {
      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error('Network error');
          return res.json();
        })
        .then(json => setData(json))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [url, options.client]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, reload: fetchData };
}
