import React from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import RightArrow from '../assets/icons/arrow-right.svg';
import { lazy, Suspense } from 'react';
import Laptop_Img from '../assets/images/laptop-img.jpg';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import TabFrame from '../assets/images/tab-frame.svg';



const LazyYouTube = lazy(() => import('react-youtube'));


function ACoach() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="coach-page">

            <Helmet>
                <title>Business Coach | Diagnostic Platform | RED3SIXTY</title>
                <meta name="description" content="Experience life-changing transformations through tailored coaching. Discover the power of RED3SIXTY to create a remarkable future." />
            </Helmet>


            {/* Coach Banner Starts */}

            <section className="accontant-block">
                <div className="container">
                    <div className="video-potential">
                        <img src={TabFrame} alt="Benefits_Img" />
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyLoadComponent>
                                <LazyYouTube
                                    className="video-gd"
                                    videoId="Fovfj3zILeQ"
                                    muted
                                    opts={{
                                        width: '100%',
                                        height: '515',
                                        playerVars: {
                                            autoplay: 0,
                                            mute: 0,
                                        },
                                    }}
                                />
                            </LazyLoadComponent>
                        </Suspense>

                    </div>

                    <div className="acc-hndg" data-aos="fade-up">
                        <h2 className="sec-hdng">Unlock Your Coaching Success with RED3SIXTY: Transform Businesses and Reap Extraordinary Rewards!</h2>
                        <p className="hdng-16">Are you a business coach looking to revolutionize your practice and achieve unmatched success? Look no further – RED3SIXTY is here to propel your coaching career to new heights!</p>
                    </div>

                    <div className="acc-graph">
                        <div className="acc-box" data-aos="fade-left">
                            <h4>Experience Unmatched Results</h4>
                            <img src={RightArrow} alt="RightArrow" />
                        </div>

                        <div className="acc-box" data-aos="fade-left">
                            <h4>Multiply Your Lead Generation</h4>
                            <img src={RightArrow} alt="RightArrow" />
                        </div>
                        <img src={RightArrow} alt="RightArrow" />
                        <div className="acc-box" data-aos="fade-left">
                            <h4>Embrace a Phenomenal ROI</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coach Banner Ends */}


            {/* Coach Banner Starts */}

            <section className="accontant-data">
                <div className="container">
                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Experience Unparalleled Results:</h2>
                        <p className="hdng-16">With RED3SIXTY, witness a remarkable 33% increase in your close rate and watch your clients' profits soar by 27%. Prepare for a transformation that will skyrocket your coaching practice and elevate your clients to unparalleled levels of success!</p>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Multiply Your Lead Generation:</h2>
                        <p className="hdng-16">Expand your client base exponentially with RED3SIXTY. Our platform has the power to increase your lead generation by an astounding 300%. Connect with high-potential clients, showcase your expertise, and position yourself as the go-to business coach in your industry!</p>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Embrace a Phenomenal ROI:</h2>
                        <p className="hdng-16">For an initial cost of just $199, RED3SIXTY offers an ROI that will leave you astounded. Experience an approximate ROI of 6,655% – that's over 66 times the initial investment! Get ready to reap extraordinary rewards and witness the financial success that RED3SIXTY delivers.</p>
                        <p className="hdng-16">RED3SIXTY offers a comprehensive suite of services that will revolutionize your consulting practice. From unlimited diagnostics and report generation to lead generation and enhanced efficiency, our platform has everything you need to take your business to the next level</p>
                        <NavLink to="/coaching-success" className="custom-btn"><span>Unlock Your Coaching Success Now!</span></NavLink>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Tailored for Business Coaches:</h2>
                        <p className="hdng-16">RED3SIXTY understands the unique needs of business coaches like you. Our platform provides unlimited diagnostics, report generation, and lead generation capabilities, giving you the tools to deliver exceptional value to your clients. Differentiate yourself from the competition and position yourself as the catalyst for their business growth!</p>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Propel Your Coaching Career:</h2>
                        <p className="hdng-16">Step into the future of coaching with RED3SIXTY. Leverage data-driven insights, streamlined processes, and powerful tools that enable you to make informed decisions that drive tangible results. Prepare to elevate your coaching practice, exceed client expectations, and achieve unrivalled success!</p>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Join the RED3SIXTY Revolution Today:</h2>
                        <p className="hdng-16">Don't miss out on this incredible opportunity to unlock your full potential and achieve remarkable success as a business coach. Take the leap and join the RED3SIXTY revolution. Click the button below to discover how our platform can transform your coaching practice!</p>
                        <p className="hdng-16">RED3SIXTY offers a comprehensive suite of services that will revolutionize your consulting practice. From unlimited diagnostics and report generation to lead generation and enhanced efficiency, our platform has everything you need to take your business to the next level</p>
                        <p className="hdng-16">Prepare for a future of extraordinary growth, unmatched profitability, and limitless possibilities. With RED3SIXTY by your side, you'll become the business coach of choice and make an indelible impact on your clients' success!</p>
                        <NavLink to="/coaching-success" className="custom-btn"><span>Unlock Your Coaching Success Now!</span></NavLink>
                    </div>

                </div>
            </section>

            {/* Coach Banner Ends */}

             {/* Accountant Banner Ends */}

            <section className="accountant-box bg-gd">
                <div className="container" data-aos="fade-up">
                    <h2 className="hdng">Find new business clients and close more deals</h2>
                    <ul className="site-ul">
                        <li>1. Find pre-qualified leads</li>
                        <li>2. Easily identify services</li>
                        <li>3. Sell automated reports</li>
                        <li>4. Close business clients</li>
                    </ul>
                    <p className="hdng-16">There are no hidden fees. The cost includes all training, certification and support. We have structured easy to pay options all with our money back guarantee. Whether you are looking to start small or really invest in your business</p>
                    <NavLink to="/potential" className="custom-btn"><span>Unlock Your Potential Now!</span></NavLink>
                </div>
            </section>

            {/* Accountant Banner Ends */}

            {/* Accountant Banner Ends */}

            <section className="accountant-box">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Laptop_Img} alt="RightArrow" />
                        </div>
                        <div className="col-md-6">
                            <div className="box-gd">
                                <h2 className="hdng">Build your consulting business</h2>
                                <p className="hdng-18">Everything you need in one solution</p>
                                <h5> <del> Normal Price: $2940 </del> </h5>
                                <h4>ONLY: $199 Lifetime access; or $25 per month</h4>
                                <NavLink to="/potential" className="custom-btn"><span>Unlock Your Potential Now!</span></NavLink>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Accountant Banner Ends */}

            {/* Accountant Banner Ends */}

            <section className="accountant-box bg-gd text-center">
                <div className="container" data-aos="fade-up">
                    <h2 className="hdng">Easily find your next paying customer in 3 steps</h2>
                    <p className="hdng-16">Point and click to have 100s of leads ready for you to sell consulting products and services to. Find, convert and close new business clients</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="account-box-gd">
                                <h4>Step 1</h4>
                                <h5>Find pre-qualified leads</h5>
                                <p className="hdng-16">Automatically find leads by industry or location. Leads are pre-scored and easily qualified</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="account-box-gd">
                                <h4>Step 2</h4>
                                <h5>Generate custom reports</h5>
                                <p className="hdng-16">Automatically generate a google business profile report highlighting services that you can provide</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="account-box-gd">
                                <h4>Step 3</h4>
                                <h5>Send customised emails</h5>
                                <p className="hdng-16">Send customers their free report and easily convert them to paying customers. Access additional reports and services</p>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/potential" className="custom-btn"><span>Unlock Your Potential Now!</span></NavLink>
                </div>
            </section>

            {/* Accountant Banner Ends */}



            {/* Accountant Banner Ends */}

            <section className="accountant-box">
                <div className="container" data-aos="fade-up">
                    <h2 className="hdng">Here are some of the services these businesses are looking for:</h2>
                    <ul className="site-ul">
                        <li>1. Google Business Profile improvement </li>
                        <li>2. Business valuation services</li>
                        <li>3. Business growth diagnostics</li>
                        <li>4. Growth Acceleration</li>
                        <li>5. Customer Service improvement</li>
                        <li>6. Customer Service improvement</li>
                    </ul>
                    <p className="hdng-16">There are no hidden fees. The cost includes all training, certification and support. We have structured easy to pay options all with our money back guarantee. Whether you are looking to start small or really invest in your business</p>
                    <NavLink to="/potential" className="custom-btn"><span>Unlock Your Potential Now!</span></NavLink>
                </div>
            </section>

            {/* Accountant Banner Ends */}


            {/* Accountant Banner Ends */}

            <section className="accountant-box bg-gd">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Laptop_Img} alt="RightArrow" />
                        </div>
                        <div className="col-md-6">
                            <div className="box-gd">
                                <h2 className="hdng">Build your consulting business</h2>
                                <p className="hdng-18">Everything you need in one solution</p>
                                <h5> <del> Normal Price: $2940 </del> </h5>
                                <h4>ONLY: $199 Lifetime access; or $25 per month</h4>
                                <NavLink to="/potential" className="custom-btn"><span>Unlock Your Potential Now!</span></NavLink>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Accountant Banner Ends */}


            {/* Accountant Banner Ends */}

            <section className="accountant-box">
                <div className="container" data-aos="fade-up">
                    <h2 className="hdng">What do you get?</h2>
                    <p className="hdng-16">Everything you need to start or grow a business consulting firm. The solution is perfect for Accountants, consultants, coaches looking to start or scale. You get:</p>
                    <ul className="site-ul">
                        <li><b>1. Access to unlimited lead generation platform</b></li>
                        <li>2. Access to unlimited GBP report generation</li>
                        <li>3. Access to business diagnostic services</li>
                        <li><b>4. Unlimited business diagnostic report generation</b></li>
                        <li>5. Business consultant certification</li>
                        <li><b>6. Unlimited online training</b></li>
                        <li>7. Access to AI platform</li>
                    </ul>
                    <NavLink to="/potential" className="custom-btn"><span>Unlock Your Potential Now!</span></NavLink>
                </div>
            </section>

            {/* Accountant Banner Ends */}


            {/* Accountant Banner Ends */}

            <section className="accountant-box bg-gd">
                <div className="container" data-aos="fade-up">
                    <h2 className="hdng">How much does it cost?</h2>
                    <p className="hdng-16">We have structured easy to pay options all with our money back guarantee. Whether you are looking to start small or really invest in your business the following options:</p>
                    <ul className="site-ul">
                        <li>1. Standard $25 / Monthly: Lead generation, certification and 1 business diagnostic</li>
                        <li>2. Basic $39 / Monthly: Lead generation, certification and 2 business diagnostics</li>
                        <li>3. Advanced $49 / Monthly: Lead generation, certification, 3 business diagnostics</li>
                        <li>4. Lifetime $199 / Once Off: Lead generation, certification, unlimited business diagnostics</li>
                    </ul>
                    <NavLink to="/potential" className="custom-btn"><span>Unlock Your Potential Now!</span></NavLink>
                </div>
            </section>

            {/* Accountant Banner Ends */}

            {/* Accountant Banner Ends */}

            <section className="accountant-box">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Laptop_Img} alt="RightArrow" />
                        </div>
                        <div className="col-md-6">
                            <div className="box-gd">
                                <h2 className="hdng">Build your consulting business</h2>
                                <p className="hdng-18">Everything you need in one solution</p>
                                <h5> <del> Normal Price: $2940 </del> </h5>
                                <h4>ONLY: $199 Lifetime access; or $25 per month</h4>
                                <NavLink to="/potential" className="custom-btn"><span>Unlock Your Potential Now!</span></NavLink>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Accountant Banner Ends */}




            
            <section className="gd-hdng">
                <h2 className="sec-hdng">Welcome to the world of RED3SIXTY – Where Your Coaching Journey Begins!</h2>
            </section>


        </div>

    )
}


export default ACoach
