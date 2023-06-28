import React, { useState } from 'react';

const BookForm = () => {
  const [name, setName] = useState('');
  const [contact_email, setEmail] = useState('');
  const [contact_date, setDate] = useState('');
  const [contact_time, setTime] = useState('');
  const [party_size, setPartySize] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const data = { name, contact_email, contact_date, contact_time, party_size };

    try {
      const response = await fetch('https://red3sixtyonlinechatgpt.mbeadmin.com/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      console.log(responseData);
      setMessage('Thank you for your message. It has been sent.');
      setName('');
      setEmail('');
      setDate('');
      setTime('');
      setPartySize('');
    } catch (error) {
      console.log(error);
      setMessage('Message failed to send. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="from-bottom">
      <div className="form-block" data-aos="fade-up">
        <div className="form-feild"><input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required /></div>
        <div className="form-feild"><input type="email" value={contact_email} onChange={e => setEmail(e.target.value)} placeholder="Email" required /></div>
        <div className="form-feild"><input type="date" value={contact_date} onChange={e => setDate(e.target.value)} placeholder="Date" required /></div>
        <div className="form-feild"><input type="time" value={contact_time} onChange={e => setTime(e.target.value)} placeholder="Time" required /></div>
        <div className="form-feild">
          <select value={party_size} onChange={e => setPartySize(e.target.value)}>
            <option value="">Select Party Size</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Add more options as needed */}
          </select>
        </div>      
      </div>
      <div className="form-button" data-aos="fade-up">
        <button type="submit" className="custom-btn black"><span>Submit</span></button>
        {message && <p className="error-msg">{message}</p>}
      </div>
    </form>
  );
};

export default BookForm;
