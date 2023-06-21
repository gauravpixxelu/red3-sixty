import React from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import BookForm from './BookForm';
import About_Img from '../assets/images/about-img.jpg';
import About1 from '../assets/images/about-1.jpg';
import About2 from '../assets/images/about-2.jpg';
import About3 from '../assets/images/about-3.jpg';
import About4 from '../assets/images/about-4.jpg';
import About5 from '../assets/images/about-5.jpg';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="about-page">

            {/* About Banner Starts */}

            <section className="about-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="about-sec-img">
                                <img src={About_Img} alt="About_Img" />
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="about-sec-content ">
                                <h4 className="small-hdn">About Us</h4>
                                <h1>About Red3Sixty</h1>
                                <p className="hdng-16">RED3SIXTY and its Strategic Partner, Business Doctors, have over the last 15 years focused on developing solutions and analysis capabilities delivered through the Business Doctors Franchise network of experienced professionals.</p>
                                <p className="hdng-16">RED3SIXTY develops business growth methodologies and analytics through benchmarking and automation solutions focused on helping consultants and their customers (SME’s) succeed. RED3SIXTY is well established and operates internationally and locally with a national network able to support business development initiatives down to provincial and local area levels.</p>
                                <p className="hdng-16">“While retaining our focus of helping business owners scale at the core of what we do, we have leveraged technology to transform into a technology partner. This transformation now enables us to reach more SMEs and have a bigger impact on them and their ability to succeed especially in the current South African and International business climate” Steve Sutton, Founder.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Banner Ends */}

            {/* About Bar Starts */}

            <section className="about-bar">
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col">
                            <div className="about-bar-txt">
                                <h4 className="box-hdn">2004</h4>
                                <p className="hdng-16">Business Doctors UK Established</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-bar-txt">
                                <h4 className="box-hdn">2014</h4>
                                <p className="hdng-16">Launch Business Doctors SA</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-bar-txt">
                                <h4 className="box-hdn">2016</h4>
                                <p className="hdng-16">Launch Zambia, Namibia, Swazi FNB Business Of the Year Award</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-bar-txt">
                                <h4 className="box-hdn">2017</h4>
                                <p className="hdng-16">FNB Business Of the Year Award Launch RED3SIXTY Platform</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-bar-txt">
                                <h4 className="box-hdn">2018</h4>
                                <p className="hdng-16">Franchise of the year Award FNB Business Of the Year Award</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-bar-txt">
                                <h4 className="box-hdn">2019</h4>
                                <p className="hdng-16">NSBC Business Of the Year Award Finalist ABSA ESD Awards</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-bar-txt">
                                <h4 className="box-hdn">2020</h4>
                                <p className="hdng-16">Archive Level 1 BBBEE</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-bar-txt">
                                <h4 className="box-hdn">2022</h4>
                                <p className="hdng-16">Launch RED3SIXTY International</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Bar Ends */}


            {/* About New Section Starts */}

            <section className="about-box-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="about-box">
                                <img className="abxo" src={About1} alt="About1" />
                                <p className="hdng-16">2019 ESD Finalists – The awards showcase the gambit of best practice, and acknowledges leading organisations with successful Supplier Development Programmes that are making a lasting impact beyond simple scorecard compliance. More than 400 entries were received for the inaugural Awards.</p>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="about-box">
                            <img className="abxo" src={About2} alt="About2" />
                                <p className="hdng-16">The National Small Business Chamber (NSBC), in association with World Famous Events, has announced South Africa’s 2019 small business and entrepreneur champions. A big thank you to this year’s event partners Google, Absa, Discovery and Oracle.</p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-left">
                            <div className="about-box">
                            <img className="abxo" src={About3} alt="About3" />
                                <p className="hdng-16">Awarded Best Business Consulting Management Platform – In recognition for the business development methodology and systems. Management Consulting platform assisting consultants to scale their businesses. <NavLink className="read-about" to="https://www.mea-markets.com/issues/business-awards-2022/54/" target="_blank">Read More</NavLink></p>
                                <NavLink to="https://www.mea-markets.com/about-us/" className="custom-btn" target="_blank"><span>About MEA Markets</span></NavLink>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                            <div className="about-box">
                            <img className="abxo" src={About5} alt="About5" />
                                <p className="hdng-16">Best Business Consulting Management Platform Internationally for 2022 – Africa & Transformation Leader. In recognition for the business development methodology and systems internationally… <NavLink className="read-about" to="https://www.mea-markets.com/issues/business-awards-2022/54/" target="_blank">Read More</NavLink></p>
                                <NavLink to="https://www.mea-markets.com/about-us/" className="custom-btn" target="_blank"><span>About MEA Markets</span></NavLink>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-right">
                            <div className="about-box">
                            <img className="abxo" src={About4} alt="About4" />
                                <p className="hdng-16">Awarded Best Consultants and Coaches Support Platform – Based on innovative technology enabling AI supported business performance analysis. The nomination is in recognition of the revenue generation support that the platform provides to consultants and coaches. <NavLink className="read-about" to="https://www.innovationinbusiness.com/issues/technology-innovator-awards-2022/24/" target="_blank">Read More</NavLink></p>
                                <NavLink to="https://www.innovationinbusiness.com/innovation-in-business-announces-the-winners-of-the-technology-innovator-awards-2022/" className="custom-btn" target="_blank"><span>About Innovation in Business</span></NavLink>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>

            {/* About New Section Ends */}



            {/* Book Demo Section Starts */}

            <section className="book-block">
                <div className="container">
                    <div className="consulting-hdngs" data-aos="fade-up">
                        <h2 className="sec-hdng">Book a Demo today!</h2>
                    </div>
                    <BookForm />
                </div>
            </section>

            {/* Book Demo Section Ends */}

        </div>

    )
}


export default About