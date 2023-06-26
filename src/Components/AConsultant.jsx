import React from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import RightArrow from '../assets/icons/arrow-right.svg';
import Consulting from '../assets/video/consulting-solution.mp4';
import TabFrame from '../assets/images/tab-frame.svg';

function AConsultant() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="consultant-page">

            {/* Consultant Banner Starts */}

            <section className="accontant-block">
                <div className="container">

                <div className="video-potential">
                <img src={TabFrame} alt="Benefits_Img" />
                <video autoplay="autoplay" className="myVideo" muted="muted" controls> 
                                    <source src={Consulting} type="video/mp4" />
                                </video>
                                </div>


                    <div className="acc-hndg" data-aos="fade-up">
                        <h2 className="sec-hdng">Unlock Success with RED3SIXTY: Empowering Management Consultants for Extraordinary Results!</h2>
                        <p className="hdng-16">Are you ready to supercharge your consulting practice and achieve unparalleled success? Look no further – RED3SIXTY is here to revolutionize the way you work and propel your career to new heights!</p>
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

            {/* Consultant Banner Ends */}


            {/* Consultant Banner Starts */}

            <section className="accontant-data">
                <div className="container">
                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Experience Unmatched Results:</h2>
                        <p className="hdng-16">RED3SIXTY delivers exceptional outcomes that will transform your business. Witness a remarkable 33% increase in your close rate and watch your profits soar by 27%. Prepare for a financial transformation that will take your consultancy to extraordinary heights!</p>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Multiply Your Lead Generation:</h2>
                        <p className="hdng-16">Expand your client base exponentially with RED3SIXTY. Our platform has the power to increase your lead generation by an astounding 300%. Connect with high-value clients, showcase your expertise, and position yourself as the go-to consultant in your field!</p>
                        <p className="hdng-16">RED3SIXTY offers a comprehensive suite of services that will revolutionize your consulting practice. From unlimited diagnostics and report generation to lead generation and enhanced efficiency, our platform has everything you need to take your business to the next level</p>
                        <NavLink to="/consulting-success" className="custom-btn"><span>Unlock Your Consulting Success Now!</span></NavLink>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Embrace a Phenomenal ROI:</h2>
                        <p className="hdng-16">For an initial cost of just $199, RED3SIXTY offers an ROI that will blow your mind. With an approximate ROI of 6,655%, you can generate a return on investment that is more than 66 times the initial sign-up cost! Get ready to unlock financial success and reap the rewards of your investment.</p>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Tailored for Management Consultants:</h2>
                        <p className="hdng-16">RED3SIXTY understands the unique needs of management consultants like you. Our platform provides unlimited diagnostics, report generation, and lead generation capabilities, giving you the tools to deliver exceptional value to your clients. Differentiate yourself from the competition and position yourself as a trusted advisor with RED3SIXTY!</p>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Propel Your Career to New Heights:</h2>
                        <p className="hdng-16">Step into the future of consulting with RED3SIXTY. Streamline your processes, leverage data-driven insights, and make informed decisions that drive tangible results. Get ready to elevate your consultancy to unparalleled levels of success and leave a lasting impact on your clients.</p>
                    </div>

                    <div className="accont-blocks" data-aos="fade-up">
                        <h2 className="hdng">Join the RED3SIXTY Revolution Today:</h2>
                        <p className="hdng-16">Don't miss out on this incredible opportunity to unlock your full potential and achieve remarkable success. Take the leap and join the RED3SIXTY revolution. Click the button below to discover how our platform can transform your consulting practice!</p>
                        <p className="hdng-16">RED3SIXTY offers a comprehensive suite of services that will revolutionize your consulting practice. From unlimited diagnostics and report generation to lead generation and enhanced efficiency, our platform has everything you need to take your business to the next level</p>
                        <p className="hdng-16">Prepare for a future of extraordinary growth, unmatched profitability, and limitless possibilities. With RED3SIXTY by your side, you'll become the consultant of choice and thrive in the new era of consulting!</p>
                        <NavLink to="/consulting-success" className="custom-btn"><span>Unlock Your Consulting Success Now!</span></NavLink>
                    </div>
                </div>
            </section>

            {/* Consultant Banner Ends */}

            <section className="gd-hdng">
                <h2 className="sec-hdng">Welcome to the world of RED3SIXTY – Where Your Consulting Success Begins!</h2>
            </section>


        </div>

    )
}


export default AConsultant