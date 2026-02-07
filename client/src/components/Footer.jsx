import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../config/config';

const Footer = () => {
  return (
    <footer className="footer_app">
      <div className="container">
        <div className="footer_main">
          {/* Section Brand */}
          <div className="footer_brand">
            <Link to="/" className="brand_logo">
              <Scissors size={28} className="gold_icon" />
              <span>SALOOMON</span>
            </Link>
            <p className="footer_slogan">L'art de la coiffure, l'essence du style.</p>
          </div>

          {/* Section Info - Très épurée */}
          <div className="footer_info_grid">
            <div className="footer_info_item">
              <MapPin size={20} className="gold_icon" />
              <div className="item_content">
                <span className="label">Nous trouver</span>
                <span className="value">Zone B, Dakar, Sénégal</span>
              </div>
            </div>
            
            <div className="footer_info_item">
              <Phone size={20} className="gold_icon" />
              <div className="item_content">
                <span className="label">Contact Direct</span>
                <span className="value">+{WHATSAPP_CONFIG.businessNumber}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer_social">
            <a href="#" className="social_link"><Instagram size={30} /></a>
            <a href="#" className="social_link"><Facebook size={30} /></a>
          </div>
        </div>

        <div className="footer_bottom_app">
          <p>&copy; {new Date().getFullYear()} SALOOMON. Design by Momo Konate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
