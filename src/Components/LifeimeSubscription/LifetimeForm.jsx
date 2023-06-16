import React, { useState, useEffect } from 'react';

const LifetimeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [thankMessage, setThankMessage] = useState('');
  const [form_type, setFormType] = useState('');
  const [site_type, setSiteType] = useState('');
  const [page_type, setPageType] = useState('');

  useEffect(() => {
      setFormType(getFormType()); // Function to get the page type
      setSiteType(getSiteType()); // Function to get the site type
      setPageType(getPageType());
  }, []);

  const getFormType = () => {
      // Function to determine the page type based on the URL or any other logic
      // Return the determined page type
  };

  const getSiteType = () => {
      // Function to determine the site type based on the URL or any other logic
      // Return the determined site type
  };

  const getPageType = () => {
    // Function to determine the page type based on the URL or any other logic
    // Return the determined page type
};

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      message,
      thankMessage,
      form_type: "lifetime_offer",
      site_type: "Red3sixty",
      page_type: "Pricing",
    };

    try {
      const response = await fetch(
          'https://pixxelu.com/dev/red3sixty/api/contact-us',
          {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)
          }
      );
      const responseData = await response.json();
      console.log(responseData);
      setThankMessage('Thank you for your message. It has been sent.');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.log(error);
      setThankMessage('Message failed to send. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="from-bottom">
      <div className="row">
        <div className="col-md-12">
          <div className="form-feild">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-feild">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-feild">
            <input
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Phone"
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-feild">
            <textarea
              type="textrea"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Type Your Message Here..."
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-button">
            <button type="submit" className="custom-btn">
              <span>Submit</span>
            </button>
            {thankMessage && <p className="error-msg">{thankMessage}</p>}
          </div>
        </div>
      </div>
    </form>
  );
};

export default LifetimeForm;
