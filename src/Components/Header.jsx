import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const storedMobileMenuState = localStorage.getItem('mobileMenuState');
    if (storedMobileMenuState) {
      setIsMobileMenuOpen(JSON.parse(storedMobileMenuState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mobileMenuState', JSON.stringify(isMobileMenuOpen));
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`site-header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg" data-aos="fade-up">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
          <button
            className={`navbar-toggler ${isMobileMenuOpen ? 'collapsed' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleMobileMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle active" to="/" aria-current="page"> Home </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/about-company">About</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fnbmasterup">FNB MasterUp</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">I am...</NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/an-accountant">An Accountant</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/a-consultant">A Consultant</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/a-coach">A Coach</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/benefits">Benefits</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Features</NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/overview">Overview</NavLink></li>
                  <li className="nav-item dropend">
                    <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Methodology</NavLink>
                    <ul className="dropdown-menu">
                      <li><NavLink className="dropdown-item" to="/small-business">Small Business</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/medium-business">Medium Business</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/large-business">Large Business</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/access-to-market">Access to Market</NavLink></li>
                    </ul>
                  </li>
                  <li><NavLink className="dropdown-item" to="/tools">Tools</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/sme-benefits">SME Benefits</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/ultimate-user-guide">Ultimate User Guide</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/downloads">Downloads</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">Blog</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/contact"> Contact </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/book-online">Book Online</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

  )
}

export default Header