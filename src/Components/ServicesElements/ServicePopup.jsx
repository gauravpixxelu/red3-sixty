import { useState } from 'react';
import Modal from 'react-modal';
import ServiceForm from './ServiceForm';


const ServicePopup = () => {
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
      <button onClick={openPopup} className="custom-btn-2 blk"><span>Get A Free Assessment Now</span></button>

      {/* Render the popup component */}
      <Modal isOpen={isOpen} onRequestClose={closePopup} className="lifetime-form">
<ServiceForm />
        <button className="close" onClick={closePopup}>Close</button>
      </Modal>
    </div>
  );
};

export default ServicePopup