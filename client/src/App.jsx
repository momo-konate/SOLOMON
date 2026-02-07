import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import BrandHeader from './components/BrandHeader';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <BrandHeader />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
