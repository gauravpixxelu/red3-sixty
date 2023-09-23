import React, { useState, useEffect } from 'react';
import FNBLogo from './FNBMasterUP-images/logo.png';
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
          <NavLink className="navbar-brand" to="/fnb-masterup">
            <img src={FNBLogo} alt="Logo" />
          </NavLink>
          <a className="custom-btn desktop" href="#apply-now" aria-label="Apply Now"><span>Apply Now</span></a>
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
              <li className="nav-item">
              <a className="nav-link" href="/fnb-masterup">Home</a>
              </li>          
              <li className="nav-item">
                <a className="nav-link" href="#about" aria-label="About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#application-process" aria-label="Application Process">Application Process</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faqs" aria-label="Faq's">Faq's</a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Red3sxity</NavLink>
              </li>
            </ul>
            <div className="btn-fnb">
              <a className="custom-btn" href="#apply-now" aria-label="Apply Now"><span>Apply Now</span></a>
            </div>            
          </div>
        </nav> 
      </div>
    </header>

  )
}

export default Header