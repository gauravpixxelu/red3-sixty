import { useState } from 'react';
import Modal from 'react-modal';
import LifetimeForm from './LifetimeForm';


const LifeimePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="popup-gd">
      {/* Render a button or other element to trigger the popup */}
      <button onClick={openPopup} className="custom-btn"><span>Sign Up</span></button>

      {/* Render the popup component */}
      <Modal isOpen={isOpen} onRequestClose={closePopup} className="lifetime-form">
<LifetimeForm />
        <button className="close" onClick={closePopup}>Close</button>
      </Modal>
    </div>
  );
};

export default LifeimePopup