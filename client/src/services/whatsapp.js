/**
 * Service WhatsApp pour la gestion des réservations
 */
import { WHATSAPP_CONFIG } from '../config/config';
import { formatFCFA, formatDateForWhatsApp } from '../utils/helpers';

/**
 * Envoie une réservation via WhatsApp
 * @param {Object} bookingData - Données de la réservation
 * @param {Object} service - Service sélectionné
 */
export const sendBookingToWhatsApp = (bookingData, service) => {
  // Formater les détails
  const details = {
    serviceName: service.name,
    price: formatFCFA(service.price),
    date: formatDateForWhatsApp(bookingData.date),
    customerName: bookingData.customer_name,
    phone: bookingData.customer_phone
  };

  // Créer le message
  const message = WHATSAPP_CONFIG.messageTemplate(details);

  // Encoder le message
  const encodedMessage = encodeURIComponent(message);

  // Créer l'URL WhatsApp
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.businessNumber}?text=${encodedMessage}`;

  // Ouvrir WhatsApp
  window.open(whatsappUrl, '_blank');
};
