/**
 * Configuration globale de l'application
 */

// Configuration WhatsApp
export const WHATSAPP_CONFIG = {
  businessNumber: '221785475695',
  messageTemplate: (details) => `Bonjour! Je souhaite réserver un rendez-vous:

📋 *Détails de la réservation*
• Service: ${details.serviceName}
• Prix: ${details.price}
• Date: ${details.date}

👤 *Mes informations*
• Nom: ${details.customerName}
• Téléphone: ${details.phone}

Merci de confirmer ma réservation.`
};

// Messages de l'application
export const MESSAGES = {
  loading: 'Chargement...',
  noServices: 'Aucun service disponible',
  bookingSuccess: 'Votre rendez-vous a été enregistré. Vous allez être redirigé...',
  error: {
    fetchServices: 'Erreur lors du chargement des services',
    createBooking: 'Erreur lors de la création du rendez-vous',
    selectService: 'Veuillez sélectionner un service'
  }
};

// Mapping des images de services
export const SERVICE_IMAGE_MAP = {
  'coupe-homme': '/images/services/coupe-homme.png',
  'coupe-femme': '/images/services/coupe-femme.png',
  'tresses': '/images/services/tresses.png',
  'coloration': '/images/services/coloration.png',
  'lissage': '/images/services/lissage.png',
  'barbe': '/images/services/barbe.png',
  'default': '/images/services/default.png'
};

/**
 * Obtient l'image d'un service
 */
export const getServiceImage = (serviceName) => {
  const name = serviceName.toLowerCase();
  for (const [key, path] of Object.entries(SERVICE_IMAGE_MAP)) {
    if (name.includes(key)) return path;
  }
  return SERVICE_IMAGE_MAP.default;
};
