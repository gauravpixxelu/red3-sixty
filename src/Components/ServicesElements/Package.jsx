import React from 'react';
import { useState } from 'react';
import Star from './images/star.svg';
import Modal from 'react-modal';
import PackageForm from './PackageForm'

const Package = () => {

    const handleFormSubmit = () => {
        // Handle form submission logic here

        // Close the popup after 3 seconds (3000 milliseconds)
        setTimeout(() => {
            closePopup();
        }, 3000);
    };

    const [isOpenBasic, setIsOpenBasic] = useState(false);
    const [isOpenStartup, setIsOpenStartup] = useState(false);
    const [isOpenProfessional, setIsOpenProfessional] = useState(false);
    const [isOpenCorporate, setIsOpenCorporate] = useState(false);
    const [isOpenElite, setIsOpenElite] = useState(false);
    const [isOpenIdentity, setIsOpenIdentity] = useState(false);

    const openPopup = (packagePopup) => {
        switch (packagePopup) {
            case 'Basic':
                setIsOpenBasic(true);
                break;
            case 'Startup':
                setIsOpenStartup(true);
                break;
            case 'Professional':
                setIsOpenProfessional(true);
                break;
            case 'Corporate':
                setIsOpenCorporate(true);
                break;
            case 'Elite':
                setIsOpenElite(true);
                break;
            case 'Identity':
                setIsOpenIdentity(true);
                break;
            // ... Handle other package popups
            default:
                break;
        }
    };

    const closePopup = (packagePopup) => {
        switch (packagePopup) {
            case 'Basic':
                setIsOpenBasic(false);
                break;
            case 'Startup':
                setIsOpenStartup(false);
                break;
            case 'Professional':
                setIsOpenProfessional(false);
                break;
            case 'Corporate':
                setIsOpenCorporate(false);
                break;
            case 'Elite':
                setIsOpenElite(false);
                break;
            case 'Identity':
                setIsOpenIdentity(false);
                break;
            // ... Handle other package popups
            default:
                break;
        }
    };


    return (
        <>
            <div className="technologies-block">
                <h2 className="sec-hdng">Our Pricing</h2>
                <p className="hdng-18">Our web design and development team thinks hugely different when it comes to making gorgeous web interfaces. Reach us today and discuss your web design or development project.</p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="service-price-box">
                        <h3>Basic Website Package</h3>
                        <p>Suitable for potential super-startups and brand revamps for companies.</p>
                        <div className="service-price-range">
                            <h4><sup>$</sup>199</h4>
                            <span><del>$1,165</del> only</span>
                        </div>
                        <ul className="site-ul">
                            <li><img src={Star} alt="Star" />2 Page Website Design</li>
                            <li><img src={Star} alt="Star" />Custom Layout Design</li>
                            <li><img src={Star} alt="Star" />Contact/Query Form</li>
                            <li><img src={Star} alt="Star" />1 Banner Design</li>
                            <li><img src={Star} alt="Star" />2 Stock Photos</li>
                            <li><img src={Star} alt="Star" /><strong>FREE </strong> Favicon Design</li>
                            <li><img src={Star} alt="Star" />Cross Browser Compatible</li>
                            <li><img src={Star} alt="Star" />Complete W3C Certified HTML</li>
                            <li><img src={Star} alt="Star" />Website Initial Concepts in 48 Hours</li>
                            <li><img src={Star} alt="Star" />Complete Design &amp; Deployment</li>
                            <li><img src={Star} alt="Star" />– Value Added Services</li>
                            <li><img src={Star} alt="Star" />Complete Source Files</li>
                            <li><img src={Star} alt="Star" />Dedicated Project Manager</li>
                            <li><img src={Star} alt="Star" />100% Ownership Rights</li>
                            <li><img src={Star} alt="Star" />100% Satisfaction Guarantee</li>
                            <li><img src={Star} alt="Star" />100% Money Back Guarantee</li>
                            <li><img src={Star} alt="Star" />*NO MONTHLY OR ANY HIDDEN FEE*</li>
                        </ul>
                        <p className="offer">20% more OFF on Next Order</p>
                        <div className="popup-gd">
                            <button onClick={() => openPopup('Basic')} className="custom-btn"><span>Start Project</span></button>
                            <Modal isOpen={isOpenBasic} onRequestClose={() => closePopup('Basic')} className="lifetime-form">
                                <PackageForm packageTitle="Basic Website Package" onSubmit={handleFormSubmit} />
                                <button className="close" onClick={() => closePopup('Basic')}>Close</button>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-price-box">
                        <h3>Startup Website Package</h3>
                        <p>Suitable for potential super-startups and brand revamps for companies.</p>
                        <div className="service-price-range">
                            <h4><sup>$</sup>449</h4>
                            <span><del>$1,496</del> only</span>
                        </div>
                        <ul className="site-ul">
                            <li><img src={Star} alt="Star" />5 Page Website Design</li>
                            <li><img src={Star} alt="Star" />Custom Layout Design</li>
                            <li><img src={Star} alt="Star" />Contact/Query Form</li>
                            <li><img src={Star} alt="Star" />3 Banner Designs</li>
                            <li><img src={Star} alt="Star" />5 Stock Photos (You can provide us more)</li>
                            <li><img src={Star} alt="Star" /><strong>FREE </strong> Favicon Design</li>
                            <li><img src={Star} alt="Star" /><strong>FREE</strong> Google Friendly Sitemap</li>
                            <li><img src={Star} alt="Star" />Complete W3C Certified HTML</li>
                            <li><img src={Star} alt="Star" />Website Initial Concepts in 48 Hours</li>
                            <li><img src={Star} alt="Star" />Complete Design &amp; Deployment</li>
                            <li><img src={Star} alt="Star" />– Value Added Services</li>
                            <li><img src={Star} alt="Star" />Complete Source Files</li>
                            <li><img src={Star} alt="Star" />Dedicated Project Manager</li>
                            <li><img src={Star} alt="Star" />100% Ownership Rights</li>
                            <li><img src={Star} alt="Star" />100% Satisfaction Guarantee</li>
                            <li><img src={Star} alt="Star" />100% Money Back Guarantee</li>
                            <li><img src={Star} alt="Star" />*NO MONTHLY OR ANY HIDDEN FEE*</li>
                        </ul>
                        <p className="offer">20% more OFF on Next Order</p>
                        <div className="popup-gd">
                            <button onClick={() => openPopup('Startup')} className="custom-btn"><span>Start Project</span></button>
                            <Modal isOpen={isOpenStartup} onRequestClose={() => closePopup('Startup')} className="lifetime-form">
                                <PackageForm packageTitle="Startup Website Package" onSubmit={handleFormSubmit} />
                                <button className="close" onClick={() => closePopup('Startup')}>Close</button>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-price-box">
                        <div className="pricing-ribbon"><span>Bestseller</span></div>
                        <h3>Professional Website Package</h3>
                        <p>Suitable for potential super-startups and brand revamps for companies.</p>
                        <div className="service-price-range">
                            <h4><sup>$</sup>649</h4>
                            <span><del>$2,163</del> only</span>
                        </div>
                        <ul className="site-ul">
                            <li><img src={Star} alt="Star" />5 to 10 Unique Pages Website Design</li>
                            <li><img src={Star} alt="Star" />CMS Integration <strong>(WordPress)</strong></li>
                            <li><img src={Star} alt="Star" />5+ Stock Photos &amp; Banner Designs</li>
                            <li><img src={Star} alt="Star" />Favicon Design</li>
                            <li><img src={Star} alt="Star" /><strong>FREE </strong> Social Media Integration</li>
                            <li><img src={Star} alt="Star" /><strong>FREE </strong> Favicon Design</li>
                            <li><img src={Star} alt="Star" /><strong>FREE </strong> Google Friendly Sitemap</li>
                            <li><img src={Star} alt="Star" />Unlimited Revisions</li>
                            <li><img src={Star} alt="Star" />Complete W3C Certified HTML</li>
                            <li><img src={Star} alt="Star" />Website Initial Concepts in 48 Hours</li>
                            <li><img src={Star} alt="Star" />Complete Design &amp; Deployment</li>
                            <li><img src={Star} alt="Star" />Custom, Interactive &amp; Dynamic Web Design</li>
                            <li><img src={Star} alt="Star" />Industry specified Team of Expert Designers and Developers</li>
                            <li><img src={Star} alt="Star" />Complete Deployment</li>
                            <li><img src={Star} alt="Star" />– Value Added Services</li>
                            <li><img src={Star} alt="Star" />Complete Source Files</li>
                            <li><img src={Star} alt="Star" />Dedicated Project Manager</li>
                            <li><img src={Star} alt="Star" />100% Ownership Rights</li>
                            <li><img src={Star} alt="Star" />100% Satisfaction Guarantee</li>
                            <li><img src={Star} alt="Star" />100% Money Back Guarantee</li>
                            <li><img src={Star} alt="Star" />*NO MONTHLY OR ANY HIDDEN FEE*</li>
                        </ul>
                        <p className="offer">20% more OFF on Next Order</p>
                        <div className="popup-gd">
                            <button onClick={() => openPopup('Professional')} className="custom-btn"><span>Start Project</span></button>
                            <Modal isOpen={isOpenProfessional} onRequestClose={() => closePopup('Professional')} className="lifetime-form">
                                <PackageForm packageTitle="Professional Website Package" onSubmit={handleFormSubmit} />
                                <button className="close" onClick={() => closePopup('Professional')}>Close</button>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-price-box">
                        <h3>Corporate Website Package</h3>
                        <p>Suitable for potential super-startups and brand revamps for companies.</p>
                        <div className="service-price-range">
                            <h4><sup>$</sup>949</h4>
                            <span><del>$3,160</del> only</span>
                        </div>
                        <ul className="site-ul">
                            <li><img src={Star} alt="Star" />10 to 20 Pages Website Design</li>
                            <li><img src={Star} alt="Star" />CMS Integration <strong>(WordPress)</strong></li>
                            <li><img src={Star} alt="Star" />Mobile Friendly <strong> Responsive</strong></li>
                            <li><img src={Star} alt="Star" /><strong>Free</strong> 6 Months Hosting</li>
                            <li><img src={Star} alt="Star" /><strong>Free</strong> 10 Business Email ID’s</li>
                            <li><img src={Star} alt="Star" />Custom, Interactive &amp; Dynamic Web Design</li>
                            <li><img src={Star} alt="Star" />Customize WordPress Theme Development</li>
                            <li><img src={Star} alt="Star" />Interactive Sliding Banners</li>
                            <li><img src={Star} alt="Star" />10 Stock Images</li>
                            <li><img src={Star} alt="Star" />10 Banner Designs</li>
                            <li><img src={Star} alt="Star" />Unlimited Revisions</li>
                            <li><img src={Star} alt="Star" />Favicon Design</li>
                            <li><img src={Star} alt="Star" />Social Media Integration</li>
                            <li><img src={Star} alt="Star" />Google Friendly Sitemap</li>
                            <li><img src={Star} alt="Star" />Search Engine Submission</li>
                            <li><img src={Star} alt="Star" />Complete W3C Certified HTML</li>
                            <li><img src={Star} alt="Star" />Industry specified Team of Award Winning Designers and Developers</li>
                            <li><img src={Star} alt="Star" />Complete Deployment</li>
                            <li><img src={Star} alt="Star" />– Value Added Services</li>
                            <li><img src={Star} alt="Star" />Complete Source Files</li>
                            <li><img src={Star} alt="Star" />Dedicated Project Manager</li>
                            <li><img src={Star} alt="Star" />100% Ownership Rights</li>
                            <li><img src={Star} alt="Star" />100% Satisfaction Guarantee</li>
                            <li><img src={Star} alt="Star" />100% Money Back Guarantee</li>
                            <li><img src={Star} alt="Star" />*NO MONTHLY OR ANY HIDDEN FEE*</li>
                        </ul>
                        <p className="offer">20% more OFF on Next Order</p>
                        <div className="popup-gd">
                            <button onClick={() => openPopup('Corporate')} className="custom-btn"><span>Start Project</span></button>
                            <Modal isOpen={isOpenCorporate} onRequestClose={() => closePopup('Corporate')} className="lifetime-form">
                                <PackageForm packageTitle="Corporate Website Package" onSubmit={handleFormSubmit} />
                                <button className="close" onClick={() => closePopup('Corporate')}>Close</button>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-price-box">
                        <h3>Elite Ecommerce Package</h3>
                        <p>Suitable for potential super-startups and brand revamps for companies.</p>
                        <div className="service-price-range">
                            <h4><sup>$</sup>1,449</h4>
                            <span><del>$4,830</del> only</span>
                        </div>
                        <ul className="site-ul">
                            <li><img src={Star} alt="Star" />Custom Ecommerce Website Design</li>
                            <li><img src={Star} alt="Star" />Unlimited Products</li>
                            <li><img src={Star} alt="Star" />CMS Integration <strong>(WordPress)</strong></li>
                            <li><img src={Star} alt="Star" />Fully <strong>Mobile Responsive</strong></li>
                            <li><img src={Star} alt="Star" /><strong>Shopping Cart</strong> Integration</li>
                            <li><img src={Star} alt="Star" /><strong>Payment Gateway</strong> Integration</li>
                            <li><img src={Star} alt="Star" />Product Listing &amp; Management</li>
                            <li><img src={Star} alt="Star" />Order Management &amp; Tracking</li>
                            <li><img src={Star} alt="Star" />Banner Designs</li>
                            <li><img src={Star} alt="Star" />Unlimited Revisions</li>
                            <li><img src={Star} alt="Star" />Favicon Design</li>
                            <li><img src={Star} alt="Star" />Social Media Integration</li>
                            <li><img src={Star} alt="Star" />Google Friendly Sitemap</li>
                            <li><img src={Star} alt="Star" />Search Engine Submission</li>
                            <li><img src={Star} alt="Star" />Complete W3C Certified HTML</li>
                            <li><img src={Star} alt="Star" />Industry specified Team of Expert Designers and Developers</li>
                            <li><img src={Star} alt="Star" />Complete Deployment</li>
                            <li><img src={Star} alt="Star" />– Value Added Services</li>
                            <li><img src={Star} alt="Star" />Complete Source Files</li>
                            <li><img src={Star} alt="Star" />Dedicated Project Manager</li>
                            <li><img src={Star} alt="Star" />100% Ownership Rights</li>
                            <li><img src={Star} alt="Star" />100% Satisfaction Guarantee</li>
                            <li><img src={Star} alt="Star" />100% Money Back Guarantee</li>
                            <li><img src={Star} alt="Star" />*NO MONTHLY OR ANY HIDDEN FEE*</li>
                        </ul>
                        <p className="offer">20% more OFF on Next Order</p>
                        <div className="popup-gd">
                            <button onClick={() => openPopup('Elite')} className="custom-btn"><span>Start Project</span></button>
                            <Modal isOpen={isOpenElite} onRequestClose={() => closePopup('Elite')} className="lifetime-form">
                                <PackageForm packageTitle="Elite Ecommerce Package" onSubmit={handleFormSubmit} />
                                <button className="close" onClick={() => closePopup('Elite')}>Close</button>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-price-box">
                        <h3>Identity Website Package</h3>
                        <p>Suitable for potential super-startups and brand revamps for companies.</p>
                        <div className="service-price-range">
                            <h4><sup>$</sup>2,049</h4>
                            <span><del>$6,830</del> only</span>
                        </div>
                        <ul className="site-ul">
                            <li><img src={Star} alt="Star" />Unlimited Web Pages</li>
                            <li><img src={Star} alt="Star" />Custom Made, Interactive, Dynamic &amp; High End Design</li>
                            <li><img src={Star} alt="Star" />Customized WordPress &amp; PHP Development</li>
                            <li><img src={Star} alt="Star" />Interactive Sliding Banners</li>
                            <li><img src={Star} alt="Star" />Up to 15 Custom Made Banner Designs</li>
                            <li><img src={Star} alt="Star" />15 Stock Images</li>
                            <li><img src={Star} alt="Star" />Unlimited Revisions</li>
                            <li><img src={Star} alt="Star" />Content Management System</li>
                            <li><img src={Star} alt="Star" />Online Appointment/Booking/Scheduling/Online Ordering Integration (Optional)</li>
                            <li><img src={Star} alt="Star" />Online Payment Integration (Optional)</li>
                            <li><img src={Star} alt="Star" />Multi Lingual (Optional)</li>
                            <li><img src={Star} alt="Star" />Custom Dynamic Forms (Optional)</li>
                            <li><img src={Star} alt="Star" />Signup Area (For Newsletters, Offers etc.)</li>
                            <li><img src={Star} alt="Star" />Search Bar</li>
                            <li><img src={Star} alt="Star" />Live Feeds of Social Networks integration (Optional)</li>
                            <li><img src={Star} alt="Star" />Mobile Responsive</li>
                            <li><img src={Star} alt="Star" />Up to 15 Professional Email ID’s</li>
                            <li><img src={Star} alt="Star" />Google Friendly Sitemap</li>
                            <li><img src={Star} alt="Star" />Search Engine Submission</li>
                            <li><img src={Star} alt="Star" />Complete W3C Certified HTML</li>
                            <li><img src={Star} alt="Star" />Industry specified Team of Award Winning Designers and Developers</li>
                            <li><img src={Star} alt="Star" />Complete Deployment</li>
                            <li><img src={Star} alt="Star" />– Value Added Services</li>
                            <li><img src={Star} alt="Star" />Complete Source Files</li>
                            <li><img src={Star} alt="Star" />Dedicated Project Manager</li>
                            <li><img src={Star} alt="Star" />100% Ownership Rights</li>
                            <li><img src={Star} alt="Star" />100% Satisfaction Guarantee</li>
                            <li><img src={Star} alt="Star" />100% Money Back Guarantee</li>
                            <li><img src={Star} alt="Star" />*NO MONTHLY OR ANY HIDDEN FEE*</li>
                        </ul>
                        <p className="offer">20% more OFF on Next Order</p>
                        <div className="popup-gd">
                            <button onClick={() => openPopup('Identity')} className="custom-btn"><span>Start Project</span></button>
                            <Modal isOpen={isOpenIdentity} onRequestClose={() => closePopup('Identity')} className="lifetime-form">
                                <PackageForm packageTitle="Identity Website Package" onSubmit={handleFormSubmit} />
                                <button className="close" onClick={() => closePopup('Identity')}>Close</button>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Package