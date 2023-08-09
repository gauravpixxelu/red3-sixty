import React from 'react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";
import Business from './images/business.svg';
import Rocket from './images/rocket.png';
import Flags from './images/flags.png';
import Quote from './images/quote.svg';
import Star from './images/star.svg';
import Circle_Shape from './images/circle-shape.png';
import Benfits_Img from './images/benefits.png';
import Service1 from './images/service1.svg';
import Service2 from './images/service2.svg';
import Service3 from './images/service3.svg';
import Service4 from './images/service4.svg';
import Service5 from './images/service5.svg';
import Logo1 from './images/logo-2.jpg';
import Logo2 from './images/logo-2.jpg';
import Logo3 from './images/logo-3.jpg';
import Logo4 from './images/logo-4.jpg';
import Logo5 from './images/logo-5.jpg';
import Logo6 from './images/logo-6.jpg';
import HireImg from './images/image-service.png';
import CounterHome from './CounterHome';
import TechHome from './TechHome';
import WorkSlider from './WorkSlider';
import ServiceForm from './ServiceForm';
import ServiceMarquee from './ServiceMarquee';
import ServiceTab from './ServiceTab';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Modal from 'react-modal';




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


function Services() {

    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        document.body.classList.add('servcies')
        return () => {
            document.body.classList.remove('servcies')
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-page">

            <Helmet>
                <title>Business Coach | Diagnostic Platform | RED3SIXTY</title>
                <meta name="description" content="Experience life-changing transformations through tailored coaching. Discover the power of RED3SIXTY to create a remarkable future." />
            </Helmet>


            {/* --- Services Banner --- */}

            <section className="service-banner" >
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner-content">
                                <h4>Web Design | Web Development | eCommerce Development</h4>
                                <h1>We Give Eagle wings to your Business, now it's your turn to decide where to fly.</h1>
                                <p>Develop clean, secure, and robust websites for your right target audience. Make your business a brand by creating high-end web solutions with Red3-sixty</p>
                            </div>
                            <div className="service-banner-box">
                                <img src={Quote} alt="Quote" />
                                <h5>Highly recommend working with Red3-sixty. Professional, on-time, and on-budget delivery. Customer service and quality are their top priority</h5>
                                <p>Conan Venus, Owner, Conan Venus And Company</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-form">
                                <h3>Maximize Your Online Success with Our Web Design and Development Expertise</h3>
                                <p className="hdng-18">Submit the Form Below to Request Custom Services</p>
                                <ServiceForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Services Banner --- */}


            {/* --- Service Marquee --- */}

            <section className="service-marque" >
                <ServiceMarquee />
            </section>

            {/* --- Service Marquee --- */}


            {/* --- Technologies --- */}

            <section className="service-gd" data-aos="fade-up">
                <div className="container">
                    <div className="technologies-block">
                        <h4 class="small-hdn">SERVICES</h4>
                        <h2 className="sec-hdng">Create a global impact with your business solution <br />by prioritizing the Right Traffic</h2>
                        <p className="hdng-18">Beat your competitors by simply listening to and understanding the voice of your traffic. Gauging the user analytics, we assist in creating a compelling and converting version of your Website. Red3-sixty eliminates the friction, so your users do not have even a single doubt about your business.</p>
                    </div>
                    <div className="service-block-gd">
                        <div className="service-gd-box">
                            <img src={Service1} alt="Rocket" />
                            <h4>Web Design</h4>
                            <p className="hdng-16">Immerse your audience in captivating digital experiences. Our design experts blend creativity with functionality, delivering websites that leave a lasting impact.</p>
                        </div>
                        <div className="service-gd-box">
                            <img src={Service2} alt="Rocket" />
                            <h4>Ui/Ux Design</h4>
                            <p className="hdng-16">Elevate user satisfaction with our UI/UX design service. We craft seamless interfaces that enhance usability, ensuring your audience stays engaged and delighted.</p>
                        </div>
                        <div className="service-gd-box">
                            <img src={Service3} alt="Rocket" />
                            <h4>Web Development</h4>
                            <p className="hdng-16">Turn your ideas into reality with our web development service. Our team builds responsive, high-performance websites that help empower your online presence.</p>
                        </div>
                        <div className="service-gd-box">
                            <img src={Service4} alt="Rocket" />
                            <h4>E-Commerce</h4>
                            <p className="hdng-16">We design and build ideal e-commerce websites, empowering your business to thrive in the digital sphere with enhanced functionality and user-friendly interfaces.</p>
                        </div>
                        <div className="service-gd-box">
                            <img src={Service5} alt="Rocket" />
                            <h4>Digital Marketing</h4>
                            <p className="hdng-16">Amplify your online presence with our digital marketing services. From strategic campaigns to posts, we deliver results that elevate your brand's visibility and success.</p>
                        </div>
                        <div className="service-gd-box">
                            <h4>Get In Touch</h4>
                            <p className="hdng-16">Ready to embark on your digital journey? Contact us now to discuss your project and unlock the digital possibilities.</p>
                            <div className="popup-gd">
                                {/* Render a button or other element to trigger the popup */}
                                <button onClick={openPopup} className="custom-btn"><span>Contact Our Expert</span></button>

                                {/* Render the popup component */}
                                <Modal isOpen={isOpen} onRequestClose={closePopup} className="lifetime-form">
                                    <ServiceForm />
                                    <button className="close" onClick={closePopup}>Close</button>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Technologies --- */}


            {/* --- Technologies --- */}

            <section className="technologies" data-aos="fade-up">
                <div className="container">
                    <div className="technologies-block">
                        <h4 class="small-hdn">The Technologies We Use</h4>
                        <h2 className="sec-hdng">We use the most recent, state-of-the-art technologies. You name it, we know it.</h2>
                        <TechHome />
                    </div>
                </div>
            </section>

            {/* --- Technologies --- */}


            {/* --- Assesment --- */}

            <section className="assesment" data-aos="fade-up">
                <div className="container">
                    <div className="assement-block">
                        <div className="assesment-hdng">
                            <h2>Not only are website development, web design, and e-commerce rocket science, but the rocket itself. And Red3-sixty is the scientist behind it.</h2>
                        </div>
                        <img className="rocket" src={Rocket} alt="Rocket" />
                        <div className="assesment-btn">
                            <div className="popup-gd">
                                {/* Render a button or other element to trigger the popup */}
                                <button onClick={openPopup} className="custom-btn-2 blk"><span>Get A Free Assessment Now</span></button>

                                {/* Render the popup component */}
                                <Modal isOpen={isOpen} onRequestClose={closePopup} className="lifetime-form">
                                    <ServiceForm />
                                    <button className="close" onClick={closePopup}>Close</button>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Assesment --- */}


            {/* --- Work --- */}

            <section className="work" data-aos="fade-up">
                <div className="container">
                    <div className="work-hdng">
                        <h2 className="sec-hdng">Check Out Our Web Design and <br />Development Portfolio</h2>
                        <WorkSlider />
                    </div>
                </div>
            </section>

            {/* --- Work --- */}


            {/* --- Technologies --- */}

            <section className="hire">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hire-txt">
                                <h4 class="small-hdn">Hire Now</h4>
                                <h2 className="sec-hdng">Hire a UI/UX Designer or Developer</h2>
                                <p className="hdng-16"> If you got a small project or some minor altercations, and are looking to hire a designer or developer on a part-time or full-time basis? Don’t worry, We’ve got you all covered.</p>
                                <p className="hdng-16">You can hire a UI/UX Designer or a Web Developer from Red3-sixty to add a modern touch to your website or app.</p>
                                <ul className="site-ul">
                                    <li><img src={Star} alt="Star" />Transparent Communication</li>
                                    <li><img src={Star} alt="Star" />IP Protection</li>
                                    <li><img src={Star} alt="Star" />Cutting-Edge Designs</li>
                                    <li><img src={Star} alt="Star" />Agile Methodologies</li>
                                    <li><img src={Star} alt="Star" />On-Time Delivery Assured</li>
                                </ul>
                                <div className="popup-gd">
                                    {/* Render a button or other element to trigger the popup */}
                                    <button onClick={openPopup} className="custom-btn"><span>Hire Now</span></button>

                                    {/* Render the popup component */}
                                    <Modal isOpen={isOpen} onRequestClose={closePopup} className="lifetime-form">
                                        <ServiceForm />
                                        <button className="close" onClick={closePopup}>Close</button>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hire-img">
                                <img src={HireImg} alt="HireImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Technologies --- */}


            {/* Book Online Section Starts */}

            <section className="platform-block">
                <div className="container">
                    <div className="row platform-4" data-aos="fade-right">
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src={Benfits_Img} alt="Benfits_Img1" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="platform-txt">
                                <h2 className="hdng">Redesign your old website</h2>
                                <p className="hdng-16">A website redesign is a high-level overhaul that involves significantly changing elements like the code, content, structure, and visuals of your current website to better serve your visitors. A great website redesign tends to boost revenue, lower bounce rates, and improve user experience (UX). The Things we'll provide for your websites are:</p>
                                <ul className="site-ul">
                                    <li><img src={Star} alt="Star" />Frontend Development <b>(React, Sass ,HTML etc.)</b></li>
                                    <li><img src={Star} alt="Star" />Backend Development <b>(Php, Laravel, Nodejs etc.)</b></li>
                                    <li><img src={Star} alt="Star" />CMS Development <b>(Wordpress, Shopify, PrestaShop etc.)</b></li>
                                    <li><img src={Star} alt="Star" />Virus Free Websites</li>
                                    <li><img src={Star} alt="Star" />On Page SEO</li>
                                    <li><img src={Star} alt="Star" />Build a Custom Design <b>(Figma, XD)</b></li>
                                </ul>
                                <div className="popup-gd">
                                {/* Render a button or other element to trigger the popup */}
                                <button onClick={openPopup} className="custom-btn"><span>Website Redesign starts form $999</span></button>

                                {/* Render the popup component */}
                                <Modal isOpen={isOpen} onRequestClose={closePopup} className="lifetime-form">
                                    <ServiceForm />
                                    <button className="close" onClick={closePopup}>Close</button>
                                </Modal>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Book Online Section Ends */}


                        {/* --- Pricing --- */}

            {/* <section className="service-pricing" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="service-price-box price-box1">
                                <h3>Pricing 1</h3>
                                <div className="price-box">
                                    <ul>
                                        <li>Business Builder Diagnostic</li>
                                        <li>Unlimited Diagnostic Reports</li>
                                        <li>Unlimited Customer Creation</li>
                                        <li>Access to Portal</li>
                                        <li>Email Diagnostic System</li>
                                        <li>Training Modules</li>
                                        <li>Development Modules</li>
                                        <li>Goal Tracking</li>
                                    </ul>
                                    <NavLink to="#" className="custom-btn"><span>Hire Now</span></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="service-price-box price-box2">
                                <h3>Pricing 2</h3>
                                <div className="price-box">
                                    <ul>
                                        <li>Business Builder Diagnostic</li>
                                        <li>Unlimited Diagnostic Reports</li>
                                        <li>Unlimited Customer Creation</li>
                                        <li>Access to Portal</li>
                                        <li>Email Diagnostic System</li>
                                        <li>Training Modules</li>
                                        <li>Development Modules</li>
                                        <li>Goal Tracking</li>
                                    </ul>
                                    <NavLink to="#" className="custom-btn"><span>Hire Now</span></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="service-price-box price-box3">
                                <h3>Pricing 3</h3>
                                <div className="price-box">
                                    <ul>
                                        <li>Business Builder Diagnostic</li>
                                        <li>Unlimited Diagnostic Reports</li>
                                        <li>Unlimited Customer Creation</li>
                                        <li>Access to Portal</li>
                                        <li>Email Diagnostic System</li>
                                        <li>Training Modules</li>
                                        <li>Development Modules</li>
                                        <li>Goal Tracking</li>
                                    </ul>
                                    <NavLink to="#" className="custom-btn"><span>Hire Now</span></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="service-price-box price-box4">
                                <h3>Pricing 4</h3>
                                <div className="price-box">
                                    <ul>
                                        <li>Business Builder Diagnostic</li>
                                        <li>Unlimited Diagnostic Reports</li>
                                        <li>Unlimited Customer Creation</li>
                                        <li>Access to Portal</li>
                                        <li>Email Diagnostic System</li>
                                        <li>Training Modules</li>
                                        <li>Development Modules</li>
                                        <li>Goal Tracking</li>
                                    </ul>
                                    <NavLink to="#" className="custom-btn"><span>Hire Now</span></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

<section className="service-tab" id="service-tabs" data-aos="fade-up">
                <div className="container">
                    <h2 className="sec-hdng">Our Packages</h2>
                    <ServiceTab />
                </div>
            </section>

            {/* --- Pricing --- */}


            {/* --- Logo Slider --- */}

            <section className="logo-carousel">
                <h2 className="sec-hdng">Trusted and Implemented by our <br />Strategic Partners</h2>
                <div className="container" data-aos="fade-up">
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

            {/* --- Logo Slider --- */}


            {/* --- Customers Outlook --- */}

            <section className="customers-outlook" data-aos="fade-up">
                <div className="container">
                    <div className="customers-hdng">
                        <h2 className="sec-hdng">Customers outlook</h2>
                        <p className="hdng-18">We sell so you can sell even better and uplift your business in your respected arena with a well-tailored website.</p>
                        <img src={Flags} alt="Flags" />
                    </div>
                </div>
            </section>

            {/* --- Customers Outlook --- */}
            

            {/* --- Assesment --- */}

            <section className="assesment" data-aos="fade-up">
                <div className="container">
                    <div className="assement-block">
                        <div className="assesment-hdng">
                            <h2 className="sec-hdng">Congratulations! Red3-sixty is happy that your search finally ends here.</h2>
                        </div>
                        <div className="assesment-btn">
                            <div className="popup-gd">
                                {/* Render a button or other element to trigger the popup */}
                                <button onClick={openPopup} className="custom-btn-2 blk"><span>Get A Free Assessment Now</span></button>

                                {/* Render the popup component */}
                                <Modal isOpen={isOpen} onRequestClose={closePopup} className="lifetime-form">
                                    <ServiceForm />
                                    <button className="close" onClick={closePopup}>Close</button>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Assesment --- */}


            {/* --- Satisfaction Review --- */}

            <section className="satisfaction" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="counter">
                                <CounterHome />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img src={Business} alt="Business" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Satisfaction Review --- */}


            <section className="marque-slides" data-aos="fade-up">
                <div class="marquee">
                    <div class="marquee__inner" aria-hidden="true">
                        <p><NavLink to="#"><img src={Star} alt="Star" />Hire Front/End Developers</NavLink></p>
                        <p><NavLink to="#"><img src={Star} alt="Star" />Hire Node.js Developers</NavLink></p>
                        <p><NavLink to="#"><img src={Star} alt="Star" />Hire PHP Developers</NavLink></p>
                        <p><NavLink to="#"><img src={Star} alt="Star" />Hire Shopify Developers</NavLink></p>
                        <p><NavLink to="#"><img src={Star} alt="Star" />Hire WordPress Developers</NavLink></p>
                        <p><NavLink to="#"><img src={Star} alt="Star" />Hire Webflow Developers</NavLink></p>
                        <p><NavLink to="#"><img src={Star} alt="Star" />Hire React Developers</NavLink></p>
                        <p><NavLink to="#"><img src={Star} alt="Star" />Hire Graphic Designers</NavLink></p>
                        <p><NavLink to="#"><img src={Star} alt="Star" />Hire UI/UX Designers</NavLink></p>
                    </div>
                </div>
            </section>


        </div>

    )
}


export default Services
