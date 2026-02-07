/**
 * Modal de Réservation - Gère le formulaire et l'envoi vers WhatsApp
 */
import React, { useState } from 'react';
import { X } from 'lucide-react';
import FormInput from './common/FormInput';
import { sendBookingToWhatsApp } from '../services/whatsapp';
import { MESSAGES } from '../config/config';
import { formatFCFA, validatePhone, validateFullName, validateBookingDate } from '../utils/helpers';

const BookingModal = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_phone: '',
    date: ''
  });
  
  const [success, setSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  /**
   * Gère la soumission du formulaire
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError('');
    
    // Validations de base
    if (!validateFullName(formData.customer_name)) {
      setValidationError('Veuillez entrer votre nom et prénom complet.');
      return;
    }

    if (!validatePhone(formData.customer_phone)) {
      setValidationError('Veuillez entrer un numéro de téléphone valide.');
      return;
    }

    if (!validateBookingDate(formData.date)) {
      setValidationError('Veuillez choisir une date future.');
      return;
    }

    const bookingData = {
      ...formData,
      service_id: service.id
    };

    // Envoi via le service WhatsApp
    sendBookingToWhatsApp(bookingData, service);
    
    setSuccess(true);
    // Fermeture automatique après 3 secondes en cas de succès
    setTimeout(() => onClose(), 3000);
  };

  /**
   * Met à jour un champ du formulaire
   */
  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal_close" onClick={onClose} title="Fermer">
          <X size={24} />
        </button>

        <h2 className="modal_title">
          Réserver : <span className="gold">{service.name}</span>
        </h2>
        <p className="modal_subtitle">{formatFCFA(service.price)} • {service.duration} mins</p>

        {success ? (
          <div className="success-message">
            <h3 className="gold" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Merci !</h3>
            <p>{MESSAGES.bookingSuccess}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal_form">
            {validationError && (
              <div className="validation_error_box animate-fade-in">
                {validationError}
              </div>
            )}

            <FormInput
              label="Nom complet"
              value={formData.customer_name}
              onChange={(e) => updateField('customer_name', e.target.value)}
              placeholder="Ex: Jean Dupont"
              required
            />

            <FormInput
              label="Numéro de téléphone"
              type="tel"
              value={formData.customer_phone}
              onChange={(e) => updateField('customer_phone', e.target.value)}
              placeholder="+221 7X XXX XX XX"
              required
            />

            <FormInput
              label="Date et Heure souhaitée"
              type="datetime-local"
              value={formData.date}
              onChange={(e) => updateField('date', e.target.value)}
              required
            />

            <button 
              type="submit" 
              className="btn_premium_gold" 
              style={{ width: '100%', marginTop: '1.5rem' }}
            >
              Confirmer la réservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
