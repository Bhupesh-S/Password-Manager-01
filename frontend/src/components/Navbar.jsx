import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-4">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            alt="Logo"
            className="me-2"
            width="40"
          />
          <span>SecureVault</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/"><i className="fas fa-home"></i> Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/security"><i className="fas fa-shield-alt"></i> Security</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/about"><i className="fas fa-info-circle"></i> About</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/contact"><i className="fas fa-envelope"></i> Contact</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="btn btn-outline-light" to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="btn btn-outline-light" to="/signup"><i className="fas fa-user-plus"></i> Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
