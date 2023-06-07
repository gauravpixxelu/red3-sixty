import { useState } from 'react';
import Modal from 'react-modal';
import IntroductionForm from './IntroductionForm';


const IntroductionPopup = () => {
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
      <button onClick={openPopup} className="custom-btn"><span>Download <br/>Introduction</span></button>

      {/* Render the popup component */}
      <Modal isOpen={isOpen} onRequestClose={closePopup} className="lifetime-form">
<IntroductionForm />
        <button className="close" onClick={closePopup}>Close</button>
      </Modal>
    </div>
  );
};

export default IntroductionPopup