/**
 * Composant de chargement réutilisable
 */
import React from 'react';

/**
 * Affiche un spinner de chargement avec un message
 * @param {Object} props - Props du composant
 * @param {string} props.message - Message à afficher
 */
const LoadingSpinner = ({ message = 'Chargement...' }) => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>{message}</p>
    </div>
  );
};

export default LoadingSpinner;
