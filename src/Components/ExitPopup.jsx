import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ExitPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (event) => {
      if (!localStorage.getItem('exitPopupShown') && event.clientY <= 0) {
        setShowPopup(true);
        localStorage.setItem('exitPopupShown', true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="exit-op">
        <div className="gd-box">
          <h2>Free For Life</h2>
          <ul>
            <li>Everything you need to start with.</li>
            <li>Access to exclusive diagnostic platform.</li>
            <li>Unlimited report generation.</li>
            <li>No credit card no payments, ever!</li>
            <li>Includes online training.</li>
          </ul>
          <b>Upgrade anytime!</b>
          <p>
            Proof of concept. Use unlimited report generation. Only limited to 10 customers at any one time and no access to customer development modules
          </p>
          <NavLink
            to="https://red-project.com/pages/sign-up?user_type=Consultant&subscricriptionPlan=3679d024-f6be-11ec-895e-068428e27ad2"
            className="custom-btn"
            target="_blank"
          >
            <span>Sign Up</span>
          </NavLink>
          <button className="close" onClick={handleClose}>
            ✕
          </button>
        </div>
      </div>
    )
  );
};

export default ExitPopup;
