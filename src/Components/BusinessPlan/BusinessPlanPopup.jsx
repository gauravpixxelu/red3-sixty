import { useState } from 'react';
import Modal from 'react-modal';
import BusinessPlanForm from './BusinessPlanForm';


const BusinessPlanPopup = () => {
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
      <button onClick={openPopup} className="custom-btn-2"><span>Download <br/>Business Plan</span></button>

      {/* Render the popup component */}
      <Modal isOpen={isOpen} onRequestClose={closePopup} className="lifetime-form">
<BusinessPlanForm />
        <button className="close" onClick={closePopup}>Close</button>
      </Modal>
    </div>
  );
};

export default BusinessPlanPopup