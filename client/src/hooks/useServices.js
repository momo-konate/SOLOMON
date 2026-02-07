import { useState, useEffect } from 'react';
import { mockServices } from '../data/mockData';

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simule un chargement court
    const timer = setTimeout(() => {
      setServices(mockServices);
      setLoading(false);
    },200);
    return () => clearTimeout(timer);
  }, []);

  return { services, loading, error };
};
