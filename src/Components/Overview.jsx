import React from 'react';
import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Overview_img1 from '../assets/images/overview-img-1.jpg';
import Overview_img2 from '../assets/images/overview-img-2.jpg';
import Overview_img3 from '../assets/images/overview-img-3.jpg';
import Overview_img4 from '../assets/images/overview-img-4.jpg';
import Overview_img5 from '../assets/images/overview-img-5.jpg';
import Overview_img6 from '../assets/images/overview-img-6.jpg';
import Overview_Img from '../assets/images/overview.png';
import Over_Img1 from '../assets/images/over-img1.png';
import Over_Img2 from '../assets/images/over-img2.png';
import Over_Img3 from '../assets/images/over-img3.png';
import Over_Img4 from '../assets/images/over-img4.png';
import Over_Img5 from '../assets/images/over-img5.png';
import Over_Img6 from '../assets/images/over-img6.png';
import Circle_Shape from '../assets/images/circle-shape.png';
import Right_Arrow from '../assets/images/right-arrow.png';
import Left_Arrow from '../assets/images/left-arrow.png';
import { NavLink } from "react-router-dom";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

function Overview() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className="overview-page">

            {/* Overview Section Starts */}

            <section className="overview-banner-block">
                <div className="container">
                    <div className="overview-block-content" data-aos="fade-up">
                        <h2 className="sec-hdng">Goal Setting and engagement management</h2>
                        <p className="hdng-16">Get access to 6 best in practice business diagnostic and growth reports and tools. The platform enables you to structure your customer enagement into monthly modules providing both you and your client with instructions, tools and videos. Your customer is given a login to develop himself and track program objectives.</p>
                        <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                        <NavLink to="/pricing" className="custom-btn-2"><span>Prices</span></NavLink>
                        <img  src={Overview_Img} alt="Overview" />
                    </div>
                </div>
            </section>

            {/* Overview Section Ends */}



            {/* Book Online Section Starts */}

            <section className="platform-block">
                <div className="container">
                    <div className="row platform-1">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="platform-txt">
                                <h2 className="hdng">Business Diagnostic Platform</h2>
                                <p className="hdng-16">Each of the diagnostic programs come with Goal setting, content, videos and all the tools you will need to work with your customer on a month to month basis.</p>
                                <p className="hdng-16">The Goals module enables you to set and manage improvement actions inline with the business diagnostic KPI's</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                                <NavLink to="/pricing" className="custom-btn-2"><span>Prices</span></NavLink>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="banner-image">
                                <img className="abxo tab-gd" src={Over_Img1} alt="Over_Img1" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <img className="vector gd" src={Right_Arrow} alt="Right_Arrow" data-aos="fade-up"/>
                    </div>

                    <div className="row platform-2">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="banner-image">
                                <img className="abxo" src={Over_Img2} alt="Over_Img2" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="platform-txt">
                                <h2 className="hdng">Content Management</h2>
                                <p className="hdng-16">Each module provides access to report specific videos explaining what the topics are that you will be working with the customer.</p>
                                <p className="hdng-16">Each video is available for your customer to watch and prepare for your monthly coaching or consulting sessions. This ensures that your customer has knowledge of the module being covered and is able to work on module deliverables in the session</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                                <NavLink to="/pricing" className="custom-btn-2"><span>Prices</span></NavLink>
                            </div>
                        </div>
                        <img className="vector dg" src={Left_Arrow} alt="Left_Arrow" data-aos="fade-up"/>
                    </div>

                    <div className="row platform-1">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="platform-txt">
                                <h2 className="hdng">Specialised Tools</h2>
                                <p className="hdng-16">Each module has it own specialised tools that enables you to work with the customer in your monthly sessions. Each tool provides clear improvement steps for your customer to implement.</p>
                                <p className="hdng-16">These tools consists of module specific activities that enable deeper analysis and customer engagement. The tools also provide further actions to complete</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                                <NavLink to="/pricing" className="custom-btn-2"><span>Prices</span></NavLink>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="banner-image">
                                <img className="abxo" src={Over_Img3} alt="Over_Img3" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <img className="vector gd" src={Right_Arrow} alt="Right_Arrow" data-aos="fade-up"/>
                    </div>

                    <div className="row platform-2">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="banner-image">
                                <img className="abxo" src={Over_Img4} alt="Over_Img4" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="platform-txt" data-aos="fade-left">
                                <h2 className="hdng">Business Gap Analysis</h2>
                                <p className="hdng-16">There are 6 different business diagnostic analysis and reporting modules. Each providing specific business gap analysis and improvement plans.</p>
                                <p className="hdng-16">Increase SME revenue capability & Generate Profits Focus on overall critical business growth areas Ensure governance compliance and return on investment for shareholders</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                                <NavLink to="/pricing" className="custom-btn-2"><span>Prices</span></NavLink>
                            </div>
                        </div>
                        <img className="vector dg" src={Left_Arrow} alt="Left_Arrow" data-aos="fade-up"/>
                    </div>

                    <div className="row platform-1">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="platform-txt">
                                <h2 className="hdng">Business Valuation</h2>
                                <p className="hdng-16">We will provide you with a detailed valuation and strategic analysis to assist you and your customer with building a successful and scalable business.</p>
                                <p className="hdng-16">Based on their Analysis Score we are able to calculate the value of their business today and then estimate the value that you can add by working together on the development.</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                                <NavLink to="/pricing" className="custom-btn-2"><span>Prices</span></NavLink>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="banner-image">
                                <img className="abxo tab-gd" src={Over_Img5} alt="Over_Img5" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <img className="vector gd" src={Right_Arrow} alt="Right_Arrow" data-aos="fade-up"/>
                    </div>

                    <div className="row">
                        <div className="col-md-6" data-aos="fade-right ">
                            <div className="banner-image">
                                <img className="abxo" src={Over_Img6} alt="Over_Img6" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="platform-txt">
                                <h2 className="hdng">Ultimate Consultant Guide</h2>
                                <p className="hdng-16">Gain access to our extensive management consultant resource platform. The platform had an advanced search functionality that covers 100s of topics providing you with information and easy-to-follow instructions. Deliver advanced business diagnostic and consulting services like a professional in no time</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                                <NavLink to="/pricing" className="custom-btn-2"><span>Prices</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Book Online Section Ends */}




            {/* Logo Slder Section Ends */}

            <section className="logo-carousel" data-aos="fade-left">
                <div className="container">
                    <h2 className="sec-hdng">Leverage 100's of APPs to further scale your consulting business</h2>
                    <Carousel responsive={responsive} infinite={true} >
                        <img src={Overview_img1} alt="Overview_img1" />
                        <img src={Overview_img2} alt="Overview_img2" />
                        <img src={Overview_img3} alt="Overview_img3" />
                        <img src={Overview_img4} alt="Overview_img4" />
                        <img src={Overview_img5} alt="Overview_img5" />
                        <img src={Overview_img6} alt="Overview_img6" />
                    </Carousel>
                </div>
            </section>
            {/* Logo Slder Section Ends */}






        </div>

    )
}


export default Overview