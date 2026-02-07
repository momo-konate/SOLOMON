/**
 * Page d'Accueil - Vitrine principale du Salon Saloomon
 */
import React from 'react';
import { useServices } from '../hooks/useServices';
import ServiceCard from '../components/ServiceCard';
import BookingModal from '../components/BookingModal';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import { MESSAGES } from '../config/config';

const Home = () => {
  const { services, loading, error } = useServices();
  const [selectedService, setSelectedService] = React.useState(null);

  /**
   * Scrollee vers la section services
   */
  const scrollToServices = (e) => {
    e.preventDefault();
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      {/* SECTION HERO - Impact Visuel Premium */}
      <section className="hero_premium">
        <div className="hero_overlay"></div>
        <div className="container hero_content animate-fade-in">
          <div className="hero_badge">Zone B • Dakar • Sénégal</div>
          <h1>
            L'ÉLÉGANCE <br />
            <span className="accent_text">REDÉFINIE</span>
          </h1>
          <p>
            Découvrez l'excellence de la coiffure dans un cadre prestigieux. 
            Le luxe et le style s'unissent pour sublimer votre allure.
          </p>
          <div className="hero_actions">
            <a href="#services" onClick={scrollToServices} className="btn_premium_gold">
              Découvrir nos Services
            </a>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES - Galerie de Cartes Glassmorphism */}
      <section className="services_wrapper" id="services">
        <div className="services_bg_overlay"></div>
        <div className="container services_content">
          <header className="section_header text-center">
            <h2 className="section_title">
              Nos <span className="gold">Services</span>
            </h2>
            <div className="title_underline"></div>
          </header>
          
          {/* États de Chargement et Erreurs */}
          {loading && <LoadingSpinner message={MESSAGES.loading} />}
          
          {error && (
            <ErrorMessage 
              message={MESSAGES.error.fetchServices}
            />
          )}
          
          {/* Affichage des Services */}
          {!loading && !error && services.length === 0 && (
            <div className="no_services_box text-center">
              <p>{MESSAGES.noServices}</p>
            </div>
          )}
          
          {!loading && !error && services.length > 0 && (
            <div className="services-grid">
              {services.map((service, index) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  onSelect={setSelectedService}
                />
              ))}
            </div>
          )}

          {/* Modal de Réservation (Affiché sur sélection) */}
          {selectedService && (
            <BookingModal 
              service={selectedService} 
              onClose={() => setSelectedService(null)} 
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
