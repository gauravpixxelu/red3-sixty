import React from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import RightArrow from '../assets/icons/arrow-right.svg';

function AnAccountant() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="accountant-page">

            {/* Accountant Banner Starts */}

            <section className="accontant-block">
                <div className="container">
                    <div className="acc-hndg" data-aos="fade-up">
                        <h2 className="sec-hdng">Unlock Success with RED3SIXTY: Empowering Accountants for Remarkable Results!</h2>
                        <p className="hdng-16">Are you ready to take your accounting practice to the next level? Say goodbye to average results and embrace the power of RED3SIXTY – the game-changing platform that delivers extraordinary outcomes for accountants like you!</p>
                    </div>

                    <div className="acc-graph">
                        <div className="acc-box" data-aos="fade-left">
                            <h4>Achieve Unparalleled Results</h4>
                            <img src={RightArrow} alt="RightArrow" />
                        </div>

                        <div className="acc-box" data-aos="fade-left">
                            <h4>Multiply Your Lead Generation</h4>
                            <img src={RightArrow} alt="RightArrow" />
                        </div>
                        <img src={RightArrow} alt="RightArrow" />
                        <div className="acc-box" data-aos="fade-left">
                            <h4>Unleash a Phenomenal ROI</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accountant Banner Ends */}


            {/* Accountant Banner Starts */}

            <section className="accontant-data">
                <div className="container">
                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Achieve Unparalleled Results:</h2>
                        <p className="hdng-16">With RED3SIXTY, you can achieve remarkable results that will transform your business. Experience a 33% increase in your close rate and watch your profits soar by 27%. Imagine the financial growth and prosperity that awaits you!</p>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Multiply Your Lead Generation:</h2>
                        <p className="hdng-16">Expand your client base like never before with RED3SIXTY. Our platform has the power to increase your lead generation by a staggering 300%. Connect with more potential clients, showcase your expertise, and skyrocket your success!</p>
                        <p className="hdng-16">RED3SIXTY offers a comprehensive suite of services that will revolutionize your consulting practice. From unlimited diagnostics and report generation to lead generation and enhanced efficiency, our platform has everything you need to take your business to the next level</p>
                        <NavLink to="/potential" className="custom-btn"><span>Unlock Your Potential Now!</span></NavLink>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Unleash a Phenomenal ROI:</h2>
                        <p className="hdng-16">The initial cost of signing up for RED3SIXTY is only $199, but the return on investment (ROI) is beyond imagination. You'll generate an ROI of approximately 6,655% – that's over 66 times the initial investment! Prepare for unprecedented financial gains and a thriving practice.</p>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">A Platform Tailored for Accountants:</h2>
                        <p className="hdng-16">RED3SIXTY understands the unique needs of accountants. We offer unlimited report generation, diagnostics, and engagements, ensuring you have the tools to deliver exceptional value to your clients. With our platform, you'll elevate your services, differentiate yourself from the competition, and position yourself as a trusted advisor.</p>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Embrace the Future of Accounting:</h2>
                        <p className="hdng-16">The accounting landscape is evolving, and RED3SIXTY is here to equip you with the tools and capabilities to thrive in this dynamic environment. Experience streamlined processes, data-driven insights, and enhanced efficiency – all while delivering exceptional results that set you apart.</p>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Join the RED3SIXTY Revolution Today:</h2>
                        <p className="hdng-16">Don't miss out on this opportunity to unlock your full potential and achieve remarkable success. Take the leap and join the RED3SIXTY revolution. Click the button below to discover how our platform can transform your accounting practice!</p>
                        <p className="hdng-16">RED3SIXTY offers a comprehensive suite of services that will revolutionize your consulting practice. From unlimited diagnostics and report generation to lead generation and enhanced efficiency, our platform has everything you need to take your business to the next level</p>
                        <p className="hdng-16">Prepare for a future of extraordinary growth, financial success, and unlimited possibilities. With RED3SIXTY by your side, you'll be unstoppable!</p>
                        <NavLink to="/potential" className="custom-btn"><span>Unlock Your Potential Now!</span></NavLink>
                    </div>



                </div>
            </section>

            {/* Accountant Banner Ends */}

            <section className="gd-hdng">
                <h2 className="sec-hdng">Welcome to the world of RED3SIXTY – Where Accountants Thrive!</h2>
            </section>


        </div>

    )
}


export default AnAccountant