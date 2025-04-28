import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Security from './pages/Security'; 
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import Login from './pages/Login'; 
import Signup from './pages/Signup'; 
import DashBoard from './pages/Dashboard'; 
import './App.css';

const AppContent = () => {
  const location = useLocation();

  // Hide Navbar on authenticated pages like /dashboard
  const hideNavbarPaths = ['/dashboard'];
  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/security" element={<Security />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="*" element={<Hero />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
