import React from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Circle_Shape from '../assets/images/circle-shape.png';
import Platform_Img1 from '../assets/images/platform-img1.png';
import Platform_Img2 from '../assets/images/platform-img2.png';
import Platform_Img3 from '../assets/images/platform-img3.png';
import Right_Arrow from '../assets/images/right-arrow.png';
import Left_Arrow from '../assets/images/left-arrow.png';

function BookOnline() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="book-online-page">

            <Helmet>
                <title>Diagnostic Platform Certification | Business Consulting | RED3SIXTY</title>
                <meta name="description" content="Available Online Platform Demo In this call, we'll show you how easy it is to use the platform to grow your consulting or coaching business. Book online now." />
            </Helmet>

            {/* Book Online Section Starts */}

            <section className="platform-block">
                <div className="container">
                    <div className="row platform-1">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="platform-txt">
                                <h4 className="small-hdn">AVAILABLE ONLINE</h4>
                                <h2 className="hdng">Platform Demo</h2>
                                <p className="hdng-16">In this call, we will show you how easy it is to use the platform to scale and grow your consulting or coaching business. The platform is designed to help you generate revenue from day one! No need to commit and no sales pitch!</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="banner-image">
                                <img className="abxo" src={Platform_Img1} alt="Platform_Img1" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <img className="vector gd" src={Right_Arrow} alt="Right_Arrow" data-aos="fade-up" />
                    </div>

                    <div className="row platform-2">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="banner-image">
                                <img className="abxo" src={Platform_Img2} alt="Platform_Img2" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="platform-txt">
                                <h4 className="small-hdn">AVAILABLE ONLINE</h4>
                                <h2 className="hdng">Earning Potential</h2>
                                <p className="hdng-16">In this call, we will take you through the process of calculating what revenue you can earn from day one. We will show you the products and services you get access to help your customers grow their businesses. Book now and start earning consulting or coaching revenue the next day!</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                            </div>
                        </div>
                        <img className="vector dg" src={Left_Arrow} alt="Left_Arrow" data-aos="fade-up" />
                    </div>

                    <div className="row platform-3">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="platform-txt">
                                <h4 className="small-hdn">AVAILABLE ONLINE</h4>
                                <h2 className="hdng">Opportunity Review</h2>
                                <p className="hdng-16">In this call, we take you through the entire process step by step. From registering on the platform, training, and delivering your first consulting or coaching engagement. We will show you the cost of the platform, what you can earn and how to deliver.</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="banner-image">
                                <img className="abxo" src={Platform_Img3} alt="Platform_Img3" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Book Online Section Ends */}




        </div>

    )
}


export default BookOnline