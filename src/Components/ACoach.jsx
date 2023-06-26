import React from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import RightArrow from '../assets/icons/arrow-right.svg';
import Coaching from '../assets/video/coaching-solution.mp4';
import TabFrame from '../assets/images/tab-frame.svg';

function ACoach() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="coach-page">

            {/* Coach Banner Starts */}

            <section className="accontant-block">
                <div className="container">
                    <div className="video-potential">
                        <img src={TabFrame} alt="Benefits_Img" />
                        <video autoplay="autoplay" className="myVideo" muted="muted">
                            <source src={Coaching} type="video/mp4" />
                        </video>
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

            <section className="gd-hdng">
                <h2 className="sec-hdng">Welcome to the world of RED3SIXTY – Where Your Coaching Journey Begins!</h2>
            </section>


        </div>

    )
}


export default ACoach