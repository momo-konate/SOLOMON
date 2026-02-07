/**
 * Carte de Service - Affiche les détails d'un service et permet la sélection
 */
import React from 'react';
import { getServiceImage } from '../config/config';
import { formatFCFA } from '../utils/helpers';

const ServiceCard = ({ service, onSelect }) => {
  return (
    <div 
      className="glass-card service-card animate-fade-in" 
      onClick={() => onSelect(service)}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={getServiceImage(service.name)}
        alt={service.name}
        className="service-img"
        onError={(e) => {
          e.target.src = '/images/services/default.png';
        }}
      />
      <div className="card-body">
        <h3>{service.name}</h3>
        <p className="description">{service.description}</p>
        <div className="price">{formatFCFA(service.price)}</div>
        <div className="duration">
          <span>{service.duration} mins</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
