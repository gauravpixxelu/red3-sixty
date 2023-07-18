import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Price_Img1 from '../assets/icons/price-img1.svg';
import Price_Img2 from '../assets/icons/price-img2.svg';
import Price_Img3 from '../assets/icons/price-img3.svg';
import Price_Img4 from '../assets/icons/price-img4.svg';
import Price_Img5 from '../assets/icons/price-img5.svg';
import Price_Img6 from '../assets/icons/price-img6.svg';
import BookForm from './BookForm';
import { lazy, Suspense } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import LifetimePopup from './LifeimeSubscription/LifetimePopup';
const LazyYouTube = lazy(() => import('react-youtube'));

function Pricing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pricing-page">

            <Helmet>
                <title>Best Business Plan Software for Startups | RED3SIXTY</title>
                <meta name="description" content="We have developed platform options to help you start or grow your professional services business. Makes you easy to upgrade or cancel at any time." />
            </Helmet>


            {/* Pricing Section Starts */}

            <section className="pricing-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" data-aos="fade-left">
                            <div className="benefits-block-content">
                                <p className="hdng-16">We have developed the platform options to help you start or grow your professional services business. The options enable you to select the right option for the stage your services business is in. It allows you the flexibility and ease to upgrade or cancel at any time.</p>
                                <p className="hdng-16">If you would like to hear about other options or get personal assistance, please contact us today or book a zoom call to review the platform.</p>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LazyLoadComponent>
                                        <LazyYouTube
                                            videoId="xx5FP_kjnqk"
                                            opts={{ width: '100%', height: '250' }}
                                        />
                                    </LazyLoadComponent>
                                </Suspense>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6" data-aos="flip-left">
                                    <div className="price-page-box box-1">
                                        <h3>Free Trial </h3>
                                        <ul>
                                            <li>Everything you need to start with.</li>
                                            <li>Access to exclusive diagnostic platform.</li>
                                            <li>Unlimited report generation.</li>
                                            <li>Development Modules.</li>
                                            <li><strong>No credit card no payments!</strong></li>
                                            <li>Includes online training and certification.</li>
                                        </ul>
                                        <p><strong>Upgrade anytime!</strong></p>
                                        <p>Proof of concept. use unlimited report generation. Only limited to 1 customer at any one time.</p>
                                    </div>
                                </div>

                                <div className="col-md-6" data-aos="flip-left">
                                    <div className="price-page-box box-2">
                                        <h3>Standard</h3>
                                        <ul>
                                            <li>Everything in FREE FOR LIFE plus.</li>
                                            <li>Unlimited Development modules.</li>
                                            <li>Platform Certification.</li>
                                        </ul>
                                        <p><strong>Cancel Anytime!</strong></p>
                                        <p>Access online Certification and advanced customer development modules ensuring you are able to generate monthly subscription revenue.</p>
                                    </div>
                                </div>

                                <div className="col-md-6" data-aos="flip-left">
                                    <div className="price-page-box box-3">
                                        <h3>Advanced</h3>
                                        <ul>
                                            <li>Everything in FREE FOR LIFE plus.</li>
                                            <li>Everything in STANDARD plus.</li>
                                            <li>Everything in BASIC plus.</li>
                                            <li><strong>Five Additional Diagnostics.</strong></li>
                                            <li>Email and phone support.</li>
                                            <li>Implementation Partner Listing</li> 
                                        </ul>
                                        <p><strong>Cancel Anytime!</strong></p>
                                        <p>Full access to 5 additional diagnostic solutions, ensuring you can now provide a full range of consulting and advisory services.</p>
                                    </div>
                                </div>

                                <div className="col-md-6" data-aos="flip-left">
                                    <div className="price-page-box box-4">
                                        <h3>Basic</h3>
                                        <ul>
                                            <li>Everything in FREE FOR LIFE plus.</li>
                                            <li>Everything in STANDARD plus.</li>
                                            <li>Advanced Diagnostics.</li>
                                        </ul>
                                        <p><strong>Cancel Anytime!</strong></p>
                                        <p>Gain access to additional business diagnostic report plus development modules. This option ensures you are able to provide services to larger customers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section Ends */}


            {/* Pricing Table Starts */}

            <section className="pricing-tabs">
                <div className="container-fluid">
                    <h2 className="sec-hdng" data-aos="fade-up">Choose your Pricing Plan</h2>
                    <div className="row" data-aos="fade-up">
                        <div className="col">
                            <div className="price-box">
                                <h3>Free Trial</h3>
                                <h4>$0<span>/2 Weeks</span></h4>
                                <p>Business Starter</p>
                                <ul>
                                    <li>Business Builder Diagnostic</li>
                                    <li>Unlimited Diagnostic Reports</li>
                                    <li>Create 1 Customers as proof of concept</li>
                                    <li>Access to Portal</li>
                                    <li>Email Diagnostic System</li>
                                    <li>Training Modules </li>
                                    <li>Development Modules</li>
                                    <li>Online Certification</li>
                                    <li>No Credit Card details</li>
                                    <li>No Monthly payments</li>
                                    <li>No adverts</li>
                                </ul>
                                <NavLink to="https://red-project.com/pages/sign-up?user_type=Consultant&subscricriptionPlan=3679d024-f6be-11ec-895e-068428e27ad2" target="_blank" className="custom-btn"><span>Sign Up</span></NavLink>
                            </div>
                        </div>

                        <div className="col">
                            <div className="price-box">
                                <h3>Standard</h3>
                                <h4>$25<span>/ Monthly</span></h4>
                                <p>Annuity Generator</p>
                                <ul>
                                    <li>Business Builder Diagnostic</li>
                                    <li>Unlimited Diagnostic Reports</li>
                                    <li>Unlimited Customer Creation</li>
                                    <li>Access to Portal</li>
                                    <li>Email Diagnostic System</li>
                                    <li>Training Modules</li>
                                    <li>Development Modules</li>
                                    <li>Goal Tracking</li>
                                    <li>Online Certification</li>
                                    <li>Secure PayPal Payment</li>
                                    <li>No Lock in Contract</li>
                                    <li>Cancel Anytime</li>
                                    <li>No adverts</li>
                                </ul>
                                <NavLink to="https://red-project.com/pages/sign-up?user_type=Consultant&subscricriptionPlan=00890902-f6bf-11ec-895e-068428e27ad2" target="_blank" className="custom-btn"><span>Sign Up</span></NavLink>
                            </div>
                        </div>

                        <div className="col">
                            <div className="price-box">
                                <h3>Basic</h3>
                                <h4>$39<span>/ Monthly</span></h4>
                                <p>Business Scaler</p>
                                <ul>
                                    <li>Business Builder Diagnostic</li>
                                    <li>Growth Accelerator Diagnostic</li>
                                    <li>Unlimited Diagnostic Reports</li>
                                    <li>Unlimited Customer Creation</li>
                                    <li>Access to Portal</li>
                                    <li>Email Diagnostic System</li>
                                    <li>Training Modules</li>
                                    <li>Development Modules</li>
                                    <li>Goal Tracking</li>
                                    <li>Online Certification</li>
                                    <li>Secure PayPal Payment</li>
                                    <li>No Lock in Contract</li>
                                    <li>Cancel Anytime</li>
                                    <li>No adverts</li>
                                </ul>
                                <NavLink to="https://red-project.com/pages/sign-up?user_type=Consultant&subscricriptionPlan=bcc03c2c-f6be-11ec-895e-068428e27ad2" target="_blank" className="custom-btn"><span>Sign Up</span></NavLink>
                            </div>
                        </div>

                        <div className="col">
                            <div className="price-box">
                                <h3>Advanced</h3>
                                <h4>$49<span>/ Monthly</span></h4>
                                <p>Practice Builder</p>
                                <ul>
                                    <li>Business Builder Diagnostic</li>
                                    <li>Growth Accelerator Diagnostic</li>
                                    <li>Access to Market Diagnostic</li>
                                    <li>Turnaround Strategiser</li>
                                    <li>Unstoppable Diagnostic</li>
                                    <li>Unlimited Diagnostic Reports</li>
                                    <li>Unlimited Customer Creation</li>
                                    <li>Access to Portal</li>
                                    <li>Email Diagnostic System</li>
                                    <li>Training Modules</li>
                                    <li>Development Modules</li>
                                    <li>Online Certification</li>
                                    <li>Implementation Partner Listing</li>
                                    <li>Secure PayPal Payment</li>
                                    <li>No Lock in Contract</li>
                                    <li>Cancel Anytime</li>
                                    <li>No adverts</li>
                                </ul>
                                <NavLink to="https://red-project.com/pages/sign-up?user_type=Consultant&subscricriptionPlan=e8bdf54c-f6be-11ec-895e-068428e27ad2" target="_blank" className="custom-btn"><span>Sign Up</span></NavLink>
                            </div>
                        </div>

                        <div className="col">
                            <div className="price-box">
                                <div className="pricing-ribbon">
                                    <span>Best Value</span>
                                </div>
                                <h3>Lifetime Offer</h3>
                                <h4>$199</h4>
                                <p>Once Off Consulting Practice Builder</p>
                                <ul>
                                    <li>Business Builder Diagnostic</li>
                                    <li>Growth Accelerator Diagnostic</li>
                                    <li>Access to Market Diagnostic</li>
                                    <li>Turnaround Strategiser</li>
                                    <li>Unstoppable Diagnostic</li>
                                    <li>Unlimited Diagnostic Reports</li>
                                    <li>Unlimited Customer Creation</li>
                                    <li>Health Check Diagnostic</li>
                                    <li>Access to Portal</li>
                                    <li>Email Diagnostic System</li>
                                    <li>Training Modules</li>
                                    <li>Development Modules</li>
                                    <li>Online Certification</li>
                                    <li>Implementation Partner Listing</li>
                                    <li>Consultant Manual</li>
                                    <li>8 Steps to Consulting Success</li>
                                    <li>6 Figure Income Sales Manual</li>
                                    <li>Health Check Manual</li>
                                    <li>6 Week Training</li>
                                    <li>Online Certification</li>
                                    <li>Monthly Consultants Round Table</li>
                                </ul>
                                <LifetimePopup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Table Ends */}



            {/* Pricing Text Box Ends */}
            <section className="pricing-text-block">
                <div className="container">
                    <h2 className="sec-hdng" data-aos="fade-up">All Plans Include</h2>
                    <div className="row">
                        <div className="col-md-4" data-aos="fade-up">
                            <div className="price-text-box">
                                <img src={Price_Img1} alt="Price_Img1" />
                                <h4 className="box-hdn">Diagnostic Platform Certification</h4>
                                <p className="hdng-16">Learn at your own pace. Earn Business Builder Certification. Access to the latest training content and videos anytime.</p>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos="fade-up">
                            <div className="price-text-box">
                                <img src={Price_Img2} alt="Price_Img2" />
                                <h4 className="box-hdn">Diagnostic Report and Proposal Creation</h4>
                                <p className="hdng-16">Automated report creation. Prepare professional business analysis and development proposals in one click.</p>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos="fade-up">
                            <div className="price-text-box">
                                <img src={Price_Img3} alt="Price_Img3" />
                                <h4 className="box-hdn">Customer Service Portal</h4>
                                <p className="hdng-16">Easy to use monthly learning and tracking portal. Provide your customers with their own access to track and manage progress.</p>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos="fade-up">
                            <div className="price-text-box">
                                <img src={Price_Img4} alt="Price_Img4" />
                                <h4 className="box-hdn">Structured Customer Acquisition Process</h4>
                                <p className="hdng-16">Follow a proven acquisition process. Easily find your prospect's challenges and advantages for easy conversion.</p>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos="fade-up">
                            <div className="price-text-box">
                                <img src={Price_Img5} alt="Price_Img5" />
                                <h4 className="box-hdn">Business Improvement and Development Tool</h4>
                                <p className="hdng-16">Automated business development. Use the monthly development platform to easily build value for clients.</p>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos="fade-up">
                            <div className="price-text-box">
                                <img src={Price_Img6} alt="Price_Img6" />
                                <h4 className="box-hdn">Unlimited Tool and Resources</h4>
                                <p className="hdng-16">Your business in a box solution. Customer reports, monthly development plans, sales collateral, promotional content, and videos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pricing Text Box Ends */}



            {/* Book Demo Section Starts */}

            <section className="book-block">
                <div className="container">
                    <div className="consulting-hdngs" data-aos="fade-right">
                        <h2 className="sec-hdng">Book a Demo today!</h2>
                    </div>
                    <BookForm />
                </div>
            </section>

            {/* Book Demo Section Ends */}

        </div>

    )
}


export default Pricing