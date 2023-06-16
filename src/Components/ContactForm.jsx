import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [thankmessage, setThank] = useState('');
    const [page_type, setPageType] = useState('');

    useEffect(() => {
        setPageType(getPageType());
    }, []);

    const getPageType = () => {
        // Function to determine the page type based on the URL or any other logic
        // Return the determined page type
    };


    const handleSubmit = async e => {
        e.preventDefault();
        const data = {
            name,
            email,
            subject,
            phone,
            address,
            message,
            thankmessage,
            page_type: "Contact",
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
            setThank('Thank you for your message. It has been sent.');
            setName('');
            setEmail('');
            setSubject('');
            setPhone('');
            setAddress('');
            setMessage('');
        } catch (error) {
            console.log(error);
            setThank('Message failed to send. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="from-bottom">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <textarea type="textrea" value={message} onChange={e => setMessage(e.target.value)} placeholder="Type Your Message Here..." />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-button">
                        <button type="submit" class="custom-btn"><span>Submit</span></button>
                        {thankmessage && <p className="error-msg">{thankmessage}</p>}
                    </div>
                </div>
            </div>

        </form>
    );
};

export default ContactForm;