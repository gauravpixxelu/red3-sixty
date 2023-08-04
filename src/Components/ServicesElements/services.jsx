import React from 'react';
import { useEffect, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";
import Business from '../ServicesElements/images/business.svg';
import Rocket from '../ServicesElements/images/rocket.png';
import Flags from '../ServicesElements/images/flags.png';
import Reason1 from '../ServicesElements/images/reason1.svg';
import Reason2 from '../ServicesElements/images/reason2.svg';
import Reason3 from '../ServicesElements/images/reason3.svg';
import Up from '../ServicesElements/images/up.svg';
import Down from '../ServicesElements/images/down.svg';
import CounterHome from '../ServicesElements/CounterHome';
import TechHome from '../ServicesElements/TechHome';
import WorkSlider from '../ServicesElements/WorkSlider';


function Services() {
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
                                <h5>Highly recommend working with Pixxelu. Professional, on-time, and on-budget delivery. Customer service and quality are their top priority</h5>
                                <p>Conan Venus, Owner, Conan Venus And Company</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-form">
                            <h3>Maximize Your Online Success with Our Web Design and Development Expertise</h3>
                            <p className="hdng-18">Submit the Form Below to Request Custom Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- Services Banner --- */}




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
                            <NavLink to="#" className="custom-btn-2 blk"><span>Get A Free Assessment Now</span></NavLink>
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






            <section className="reasons">
                <div className="container" data-aos="fade-up">
                    <h2 className="sec-hdng">Reasons Why We Are The Prime Across the Globe</h2>
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-4">
                            <div className="reasons-block">
                                <img src={Reason1} alt="Reason1" />
                                <h4 className="hdng-h4">Clear Consultation</h4>
                                <p className="hdng-16">Schedule a direct meeting with our consultant; then and there, we can plan and strategize the ideation and implementation to be carried out. A requisite timeline and budget can also be devised as per your considerations.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <img src={Down} alt="Down" className="down" />
                            <div className="reasons-block">
                                <img src={Reason2} alt="Reason2" />
                                <h4 className="hdng-h4">Value In-Depth Research</h4>
                                <p className="hdng-16">After the consultation, our experts and designers take the matter into their hands. Comparative study and research create a better scope that can draw convertible traffic.</p>
                            </div>
                            <img src={Up} alt="Up" className="up" />
                        </div>

                        <div className="col-md-4">
                            <div className="reasons-block">
                                <img src={Reason3} alt="Reason3" />
                                <h4 className="hdng-h4">Quick & affordable</h4>
                                <p className="hdng-16">We create what's best and what's easy for you to purchase. Time and money are crucial factors in any business, and we fully understand this. Our customization and catering are pocket- and time friendly.</p>
                            </div>
                        </div>
                    </div>
                    <div className="reasons-btn">
                        <NavLink to="#" className="custom-btn"><span>Get A Free Assessment Now</span></NavLink>
                    </div>

                </div>
            </section>




            {/* --- Customers Outlook --- */}

            <section className="customers-outlook" data-aos="fade-up">
                <div className="container">
                    <div className="customers-hdng">
                        <h2 className="sec-hdng">Customers outlook</h2>
                        <p className="hdng-16">We sell so you can sell even better and uplift your business in your respected arena with a well-tailored website.</p>
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
                            <NavLink to="#" className="custom-btn-2 blk"><span>Get A Free Assessment Now</span></NavLink>
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

            {/* --- Video Review --- */}




        </div>

    )
}


export default Services
