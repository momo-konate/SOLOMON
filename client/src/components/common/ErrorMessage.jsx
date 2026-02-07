/**
 * Composant de message d'erreur réutilisable
 */
import React from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * Affiche un message d'erreur avec option de réessayer
 * @param {Object} props - Props du composant
 * @param {string} props.message - Message d'erreur
 * @param {Function} props.onRetry - Fonction de réessai (optionnel)
 */
const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-message" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <AlertCircle size={48} color="#e74c3c" />
      <p style={{ color: '#e74c3c', fontSize: '1.1rem' }}>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn-outline">
          Réessayer
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
