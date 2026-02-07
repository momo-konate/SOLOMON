/**
 * Utilitaires globaux pour l'application Salon Saloomon
 */

/**
 * Formate un prix en FCFA
 */
export const formatFCFA = (price) => {
  return new Intl.NumberFormat('fr-SN', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price) + ' FCFA';
};

/**
 * Formate une date pour WhatsApp
 */
export const formatDateForWhatsApp = (date) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Validations de formulaire
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^(?:\+221|00221|221)?[73][0678]\d{7}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateFullName = (name) => {
  return name.trim().split(' ').length >= 2;
};

export const validateBookingDate = (dateString) => {
  return new Date(dateString) > new Date();
};
