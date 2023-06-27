import React from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Popup from './Popup';
import Banner_Img_Bg from '../assets/images/banner-img-bg.png';
import About_Sec from '../assets/images/about-sec.png';
import Check from '../assets/icons/check.svg';
import Counslt_Icon1 from '../assets/icons/counslt-ic-1.svg';
import Counslt_Icon2 from '../assets/icons/counslt-ic-2.svg';
import Counslt_Icon3 from '../assets/icons/counslt-ic-3.svg';
import Counslt_Icon4 from '../assets/icons/counslt-ic-4.svg';
import Counslt_Icon5 from '../assets/icons/counslt-ic-5.svg';
import Counslt_Icon6 from '../assets/icons/counslt-ic-6.svg';
import Circle_Shape from '../assets/images/circle-shape.png';
import Platform_Img1 from '../assets/images/platform-img1.png';
import Platform_Img2 from '../assets/images/platform-img2.png';
import Platform_Img3 from '../assets/images/platform-img3.png';
import Right_Arrow from '../assets/images/right-arrow.png';
import Left_Arrow from '../assets/images/left-arrow.png';
import Logo1 from '../assets/images/logo-1.jpg';
import Logo2 from '../assets/images/logo-2.jpg';
import Logo3 from '../assets/images/logo-3.jpg';
import Logo4 from '../assets/images/logo-4.jpg';
import Logo5 from '../assets/images/logo-5.jpg';
import Logo6 from '../assets/images/logo-6.jpg';
import Diagnostic_Img from '../assets/images/diagnostic-img.png';
import Coach1 from '../assets/images/coach1.png';
import Coach2 from '../assets/images/coach2.png';
import Coach3 from '../assets/images/coach3.png';
import Counslt_Img from '../assets/images/counslt-img.png';
import Dreamstime from '../assets/video/dreamstime.mp4';
import BookForm from './BookForm';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (


        <div className="home-page">

            <Helmet>
                <title>Business Consulting Services | Business Diagnostic Platform | RED3SIXTY</title>
                <meta name="description" content="RED3SIXTY is the largest business consulting platform. Our experts help you address your business challenges, optimize processes, and implement growth strategies." />
            </Helmet>

            {/* Banner Section Starts */}

            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="banner-content">
                                <h4>Rapid Enterprise Development</h4>
                                <h1>Consulting Business Growth Platform</h1>
                                <p>Start or Grow your professional services business</p>
                                <NavLink to="/benefits" className="custom-btn"><span>Platform Benefits</span></NavLink>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="banner-image">
                                <Popup />
                                <img className="gdxo" src={Banner_Img_Bg} alt="Banner_Img_Bg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner Section Ends */}

            {/* Curve Section Starts */}

            <section className="curve">
                <div className="container">
                    <div className="curve-content"></div>
                    <div className="curve-text" data-aos="fade-up">
                        <p>Find out how to start or grow your consulting business now!</p>
                        <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                    </div>
                </div>
            </section>

            {/* Curve Section Ends */}


            {/* About Section Starts */}

            <section className="about-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="about-block-content">
                                <h4 className="small-hdn">ABOUT RED3SIXTY</h4>
                                <h2 className="hdng">Whether you are a Consultant, Executive Coach or Accountant, RED3SIXTY was designed with you in mind</h2>
                                <p className="hdng-16">We have developed business growth platforms aimed at helping you run diagnostics and determine where your customer needs to focus in order to grow their business. The systems help predict your customer growth and develop plans delivering up to 26% more profits in their business.</p>
                                <p className="hdng-16">The coaching and consulting platform make starting and or scaling your professional services business easier.</p>
                                <p className="hdng-16">The platform provides a one-stop consulting solution enabling easy customer business diagnostics, development support, and much more!</p>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="about-block-image">
                                <img src={About_Sec} alt="About_Sec" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section Ends */}


            {/* Video Section Starts */}

            <section className="home-points">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="points-video">
                                <video autoplay="autoplay" className="myVideo" muted="muted">
                                    <source src={Dreamstime} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="points-content">
                                <ul className="site-ul">
                                    <li><img src={Check} alt="Check" />Become a successful business consultant</li>
                                    <li><img src={Check} alt="Check" />Generate recurring income by providing business consulting services</li>
                                    <li><img src={Check} alt="Check" />Don’t just trade hours for money but sell proprietary business diagnostics</li>
                                    <li><img src={Check} alt="Check" />Gain access to world class business development tools</li>
                                    <li><img src={Check} alt="Check" />Instantly pinpoint business growth opportunities for your clients</li>
                                    <li><img src={Check} alt="Check" />Generate a detailed customer business growth blueprint</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section Ends */}


            {/* Consulting Section Starts */}

            <section className="consulting-block">
                <div className="container">
                    <div className="consulting-hdngs" data-aos="fade-up">
                        <h4 className="small-hdn">UPDATES & RESOURCES</h4>
                        <h2 className="sec-hdng">Start your consulting business at a fraction of the cost of a franchise</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3" data-aos="fade-right">
                            <div className="consulting-video">
                                <h5 className="hdng-h5">To help you generate the revenue you get:</h5>
                                <ul className="site-ul">
                                    <li><span className="image-circle"><img src={Counslt_Icon1} alt="Counslt_Icon1" /></span>6 Enterprise Diagnostics</li>
                                    <li><span className="image-circle"><img src={Counslt_Icon2} alt="Counslt_Icon2" /></span>6 Detailed Benchmark Reports</li>
                                    <li><span className="image-circle"><img src={Counslt_Icon3} alt="Counslt_Icon3" /></span>KPI Definition And Tracking</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-down">
                            <div className="banner-image">
                                <img className="abxo" src={Counslt_Img} alt="Counslt_Img" />
                                <img className="gdxo" src={Banner_Img_Bg} alt="Banner_Img_Bg" />
                            </div>
                        </div>
                        <div className="col-md-3" data-aos="fade-left">
                            <div className="consulting-content">
                                <h5 className="hdng-h5">Plus gain access to:</h5>
                                <ul className="site-ul">
                                    <li><span className="image-circle"><img src={Counslt_Icon4} alt="Counslt_Icon4" /></span>Improvement Actions Tracking</li>
                                    <li><span className="image-circle"><img src={Counslt_Icon5} alt="Counslt_Icon5" /></span>1800 hours Training Videos</li>
                                    <li><span className="image-circle"><img src={Counslt_Icon6} alt="Counslt_Icon6" /></span>45 Custom Operations Worksheets</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Section Ends */}


            {/* Consulting Section Starts */}

            <section className="platform-block">
                <div className="container">
                    <div className="row platform-1">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="platform-txt">
                                <h4 className="small-hdn">ENTERPRISE GROWTH PLATFORM</h4>
                                <h2 className="hdng">Platform Demo</h2>
                                <p className="hdng-16">In this call, we will show you how easy it is to use the platform to scale and grow your consulting or coaching business. The platform is designed to help you generate revenue from day one! No need to commit and no sales pitch!</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                                <NavLink to="/pricing" className="custom-btn-2"><span>Sign Up</span></NavLink>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="banner-image">
                                <img className="abxo" src={Platform_Img1} alt="Platform_Img1" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <img className="vector gd" src={Right_Arrow} alt="Right_Arrow" data-aos="fade-up" />
                    </div>

                    <div className="row platform-2">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="banner-image">
                                <img className="abxo" src={Platform_Img2} alt="Platform_Img2" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="platform-txt">
                                <h4 className="small-hdn">ENTERPRISE GROWTH PLATFORM</h4>
                                <h2 className="hdng">Earning Potential</h2>
                                <p className="hdng-16">In this call, we will take you through the process of calculating what revenue you can earn from day one. We will show you the products and services you get access to help your customers grow their businesses. Book now and start earning consulting or coaching revenue the next day!</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                                <NavLink to="/pricing" className="custom-btn-2"><span>Sign Up</span></NavLink>
                            </div>
                        </div>
                        <img className="vector dg" src={Left_Arrow} alt="Left_Arrow" data-aos="fade-up" />
                    </div>

                    <div className="row platform-3">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="platform-txt">
                                <h4 className="small-hdn">ENTERPRISE GROWTH PLATFORM</h4>
                                <h2 className="hdng">Opportunity Review</h2>
                                <p className="hdng-16">In this call, we take you through the entire process step by step. From registering on the platform, training, and delivering your first consulting or coaching engagement. We will show you the cost of the platform, what you can earn and how to deliver.</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                                <NavLink to="/pricing" className="custom-btn-2"><span>Sign Up</span></NavLink>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="banner-image">
                                <img className="abxo" src={Platform_Img3} alt="Platform_Img3" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Section Ends */}


            {/* Logo Slder Section Ends */}

            <section className="logo-carousel">
                <div className="container" data-aos="fade-up">
                    <h2 className="sec-hdng">Trusted and Implemented by our Strategic Partners</h2>
                    <Carousel responsive={responsive} infinite={true} >
                        <img src={Logo1} alt="Logo1" />
                        <img src={Logo2} alt="Logo2" />
                        <img src={Logo3} alt="Logo3" />
                        <img src={Logo4} alt="Logo4" />
                        <img src={Logo5} alt="Logo5" />
                        <img src={Logo6} alt="Logo6" />
                    </Carousel>
                </div>
            </section>
            {/* Logo Slder Section Ends */}


            {/* Diagnostic Section Starts */}

            <section className="diagno-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="diagno-block-content">
                                <h4 className="small-hdn">RED3SIXTY</h4>
                                <h2 className="hdng">Diagnostic Platform</h2>
                                <p className="hdng-16">Gain access to our RED3SIXTY business diagnostic platform ensuring you are certified and ready to provide the diagnostic solutions to your customers. The platform provides a structured customer acquisition process followed by an automatic business diagnostic report generation aimed at scaling your consulting practice.</p>
                                <NavLink to="/benefits" className="custom-btn"><span>Find Out More</span></NavLink>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="diagno-block-image">
                                <img src={Diagnostic_Img} alt="Diagnostic_Img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diagnostic Section Ends */}


            {/* Coaches Section Starts */}

            <section className="coaches-block">
                <div className="container">
                    <div className="consulting-hdngs" data-aos="fade-down">
                        <h2 className="sec-hdng">What Coaches and Consultants say!</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4" data-aos="fade-left">
                            <div className="coaches-box">
                                <img src={Coach1} alt="Coach1" />
                                <p className="hdng-16">“Start your consulting business at a fraction of the cost of a franchise”</p>
                                <h4 className="box-hdn">Save 1000’s by choosing this low-cost option and get all the benefits of a franchise</h4>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                            <div className="coaches-box">
                                <img src={Coach2} alt="Coach2" />
                                <p className="hdng-16">“Get everything you need to start generating sales and earning an income”</p>
                                <h4 className="box-hdn">Get access to systems and training enabling you to start trading in month 1</h4>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-right">
                            <div className="coaches-box">
                                <img src={Coach3} alt="Coach3" />
                                <p className="hdng-16">“Low monthly cost and risk-free commitment”</p>
                                <h4 className="box-hdn">No need to overcommit, the low monthly fee ensures you can easily break even in month 2</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coaches Section Ends */}

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


export default Home