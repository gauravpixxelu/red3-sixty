import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SSL_Image from './FNBMasterUP-images/ssl-image.png'
import Check from './FNBMasterUP-images/check.png'

const FNBMasterUPForm = () => {
    const [name, setFirstName] = useState('');
    const [surname_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [business_name, setBusinessName] = useState('');
    const [business_age, setBusinessAge] = useState('0-5');
    const [number_of_employee, setEmployes] = useState('0-10');
    const [b_bbee, setBBEE] = useState('');
    const [role, setRole] = useState('');
    const [annual_turnover, setAnnualTurnover] = useState('0-R10m');
    const [where_did_you, setProgramme] = useState('');
    const [is_accept, setAccept] = useState('');
    const [thankmessage, setThank] = useState('');

    useEffect(() => {

    }, []);


    const handleSubmit = async e => {
        e.preventDefault();
        const data = {
            name,
            surname_name,
            email,
            phone,
            business_name,
            business_age,
            number_of_employee,
            b_bbee,
            role,
            annual_turnover,
            where_did_you,
            is_accept,
            thankmessage,
            site_type: "Red3sixty",
            page_type: "FNB MasterUp",
        };

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}fnb-contact-us-email`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
            );
            const responseData = await response.json();
            console.log(responseData);
            setThank('Thank you for your message. It has been sent.');
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setBusinessName('');
            setBusinessAge('0-5');
            setEmployes('0-10');
            setBBEE('');
            setRole('');
            setAnnualTurnover('0-R10m');
            setProgramme('');
            setAccept('');
        } catch (error) {
            console.log(error);
            setThank('Message failed to send. Please try again later.');
        }
    };

    return (

        <form onSubmit={handleSubmit} className={`from-bottom ${thankmessage ? 'success' : ''}`}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="text" value={name} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="text" value={surname_name} onChange={e => setLastName(e.target.value)} placeholder="Sur Name" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" required />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <input type="text" value={business_name} onChange={e => setBusinessName(e.target.value)} placeholder="Business Name" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <label className="fnb-label">Business Age (years)</label>
                        <div className="radio-gd">
                            <div><label><input type="radio" value="0-5" checked={business_age === '0-5'} onChange={(e) => setBusinessAge(e.target.value)} required/>0-5</label></div>
                            <div><label><input type="radio" value="5-10" checked={business_age === '5-10'} onChange={(e) => setBusinessAge(e.target.value)} required/>5-10</label></div>
                            <div><label><input type="radio" value="10-15" checked={business_age === '10-15'} onChange={(e) => setBusinessAge(e.target.value)} required/>10-15</label></div>
                            <div><label><input type="radio" value="15-20" checked={business_age === '15-20'} onChange={(e) => setBusinessAge(e.target.value)} required/>15-20</label></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <label className="fnb-label">Number of Employees</label>
                        <div className="radio-gd">
                            <div><label><input type="radio" value="0-10" checked={number_of_employee === '0-10'} onChange={(e) => setEmployes(e.target.value)} required/>0-10</label></div>
                            <div><label><input type="radio" value="10-20" checked={number_of_employee === '10-20'} onChange={(e) => setEmployes(e.target.value)} required/>10-20</label></div>
                            <div><label><input type="radio" value="20-30" checked={number_of_employee === '20-30'} onChange={(e) => setEmployes(e.target.value)} required/>20-30</label></div>
                            <div><label><input type="radio" value="30-50" checked={number_of_employee === '30-50'} onChange={(e) => setEmployes(e.target.value)} required/>30-50</label></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <label className="fnb-label">B-BBEE</label>
                        <select value={b_bbee} onChange={e => setBBEE(e.target.value)} required>
                            <option value="" disabled>B-BBEE</option>
                            <option value="Level 1">Level 1</option>
                            <option value="Level 2">Level 2</option>
                            <option value="Level 3">Level 3</option>
                            <option value="Level 4">Level 4</option>
                            <option value="Level 5">Level 5</option>
                            <option value="Level 6">Level 6</option>
                            <option value="Level 7">Level 7</option>
                            <option value="Level 8">Level 8</option>
                            <option value="N/A">N/A</option>
                        </select>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <label className="fnb-label">Role</label>
                        <select value={role} onChange={e => setRole(e.target.value)} required>
                            <option value="" disabled>Role</option>
                            <option value="Director">Director</option>
                            <option value="Partner">Partner</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <label className="fnb-label">Annual Turnover</label>
                        <div className="radio-gd">
                            <div><label><input type="radio" value="0-R10m" checked={annual_turnover === '0-R10m'} onChange={(e) => setAnnualTurnover(e.target.value)} required/>0-R10m</label></div>
                            <div><label><input type="radio" value="R10m-R25m" checked={annual_turnover === 'R10m-R25m'} onChange={(e) => setAnnualTurnover(e.target.value)} required/>R10m-R25m</label></div>
                            <div><label><input type="radio" value="R25-R35m" checked={annual_turnover === 'R25-R35m'} onChange={(e) => setAnnualTurnover(e.target.value)} required/>R25-R35m</label></div>
                            <div><label><input type="radio" value="R35m-R50m" checked={annual_turnover === 'R35m-R50m'} onChange={(e) => setAnnualTurnover(e.target.value)} required/>R35m-R50m</label></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <label className="fnb-label">Where did you hear about the programme</label>
                        <select value={where_did_you} onChange={e => setProgramme(e.target.value)} required>
                        <option value="" disabled>Where did you hear about the programme</option>
                            <option value="FNB Twitter page">FNB Twitter page</option>
                            <option value="FNB Linkedin page">FNB Linkedin page</option>
                            <option value="Linkedin">Linkedin</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Red3sixty direct email">Red3sixty direct email</option>
                            <option value="FNB Procurement">FNB Procurement</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <input type="checkbox" value={is_accept} onChange={(e) => setAccept(e.target.value)} required />I accept <NavLink to="/term-conditions">Terms and Conditions</NavLink>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-button fnb-btn">
                        <div className="fnb-submit">
                        <button type="submit" className="custom-btn"><span>Proceed</span></button>
                        <div className="ssl-block">
                            <img src={SSL_Image} alt="" />
                            <ul>
                                <li><img src={Check} alt="" />Potentially Safe</li>
                                <li><img src={Check} alt="" />Valid HTTPS Found</li>
                            </ul>
                        </div>
                        </div>                        
                        <p className="hdng-16">Your information is not used or shared with anyone except FNB and RED3SIXTY and is only used to enter you into the program</p>
                        <NavLink to="https://www.scamvoid.net/check/red3-sixty.com/ " target="_blank">www.scamvoid.net</NavLink>
                        {thankmessage && <p className={`message ${thankmessage.includes('failed') ? 'error-msg' : 'success-msg'}`}>{thankmessage}</p>}
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FNBMasterUPForm;
