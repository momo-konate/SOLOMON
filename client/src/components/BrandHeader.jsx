import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';

const BrandHeader = () => {
  return (
    <header className="brand_header">
      <div className="container header_container">
        <Link to="/" className="brand_identity">
          <Scissors size={32} className="gold_icon" />
          <span className="brand_name">SALOOMON</span>
        </Link>
      </div>
    </header>
  );
};

export default BrandHeader;
