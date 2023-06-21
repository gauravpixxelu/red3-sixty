import React from 'react';
import { useEffect } from 'react';
import Linkedin from '../assets/icons/linkedin.png';
import Phone from '../assets/icons/phone-pin.svg';
import Map from '../assets/icons/map-pin.svg';
import Message from '../assets/icons/message-pin.svg';
import Team1 from '../assets/images/team-1.jpg';
import Team2 from '../assets/images/team-2.jpg';
import Team3 from '../assets/images/team-3.jpg';
import Team4 from '../assets/images/team-4.jpg';
import Team5 from '../assets/images/team-5.jpg';
import Team6 from '../assets/images/team-6.jpg';
import Team7 from '../assets/images/team-7.jpg';
import { NavLink } from "react-router-dom";
import ContactForm from './ContactForm';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (

        <div className="contact-page">



            {/* Team Slider Section Starts */}

            <section className="team-slider" data-aos="fade-up">
                <div className="container">
                    <h2 className="sec-hdng" >Our Team</h2>
                    <Carousel responsive={responsive} infinite={true} >
                        <div className="team-box" >
                            <img src={Team1} alt="Team1" />
                            <h3>Ushi Goshalia</h3>
                            <p>Strategic Partners</p>
                            <NavLink to="https://www.linkedin.com/in/ushi-goshalia-73224126" target="_blank"><img src={Linkedin} alt="Linkedin" />Connect With Me</NavLink>
                        </div>

                        <div className="team-box">
                            <img src={Team2} alt="Team2" />
                            <h3>Christo Olwagen</h3>
                            <p>Consultant Training</p>
                            <NavLink to="https://www.linkedin.com/in/olwagen" target="_blank"><img src={Linkedin} alt="Linkedin" />Connect With Me</NavLink>
                        </div>

                        <div className="team-box">
                        <img src={Team3} alt="Team3" />
                            <h3>Estelanie van der Merwe</h3>
                            <p>Technology</p>
                            <NavLink to="https://www.linkedin.com/in/estelanie-van-der-merwe-77a399115" target="_blank"><img src={Linkedin} alt="Linkedin" />Connect With Me</NavLink>
                        </div>

                        <div className="team-box">
                        <img src={Team4} alt="Team4" />
                            <h3>Aakash Choudhary</h3>
                            <p>Development Lead</p>
                            <NavLink to="https://www.linkedin.com/in/aakash-choudhary-441019246/" target="_blank"><img src={Linkedin} alt="Linkedin" />Connect With Me</NavLink>
                        </div>

                        <div className="team-box">
                        <img src={Team5} alt="Team5" />
                            <h3>Ashish Kumar</h3>
                            <p>Technical lead</p>
                            <NavLink to="https://www.linkedin.com/in/ashish-kumar-421a2b245/" target="_blank"><img src={Linkedin} alt="Linkedin" />Connect With Me</NavLink>
                        </div>

                        <div className="team-box">
                        <img src={Team6} alt="Team6" />
                            <h3>Steve Sutton</h3>
                            <p>Founder</p>
                            <NavLink to="https://www.linkedin.com/in/suttons" target="_blank"><img src={Linkedin} alt="Linkedin" />Connect With Me</NavLink>
                        </div>

                        <div className="team-box">
                        <img src={Team7} alt="Team7" />
                            <h3>Mandisa Jostrey</h3>
                            <p>Enterprise Delivery</p>
                            <NavLink to="https://www.linkedin.com/in/mandisa-thembelihle-jostrey-726a0162" target="_blank"><img src={Linkedin} alt="Linkedin" />Connect With Me</NavLink>
                        </div>
                    </Carousel>
                </div>
            </section>

            {/* Team Slider Section Ends */}







            {/* Map Section Starts */}

            <section className="address-maps form-cnt">
                <div className="container">
                    <h2 className="sec-hdng" data-aos="fade-left">Get in Touch</h2>
                    <p className="hdng-18" data-aos="fade-right">We’re happy to talk to you.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="op-cnt" data-aos="fade-left">
                                <div className="contact-txt-icon">
                                    <img src={Phone} alt="Phone" />
                                </div>
                                <div className="contact-txt">
                                    <p>Call us</p>
                                    <NavLink to="tel:0110282854">0110282854</NavLink>
                                </div>
                            </div>

                            <div className="op-cnt" data-aos="fade-right">
                                <div className="contact-txt-icon">
                                <img src={Message} alt="Message" />
                                </div>
                                <div className="contact-txt">
                                    <p>Email us</p>
                                    <NavLink to="mailto:estelanie@red3-sixty.com">estelanie@red3-sixty.com</NavLink>
                                </div>
                            </div>

                            <div className="op-cnt" data-aos="fade-up">
                                <div className="contact-txt-icon">
                                <img src={Map} alt="Map" />
                                </div>
                                <div className="contact-txt">
                                    <p>Address</p>
                                    <NavLink to="https://goo.gl/maps/5TGpaq2MataZtRJA8" target="_blank">Africa, Portugal</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6" data-aos="fade-left">
                            <div className="form-cnt-txt">
                                <ContactForm />
                            </div>
                        </div>

                        <div className="col-md-6"  data-aos="fade-right">
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12456.612288185082!2d-9.364376!3d38.691328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec8b1fdf106b5%3A0xde4917e8b3937ad7!2sPra%C3%A7a%205%20de%20Outubro%2C%202775-275%20Parede%2C%20Portugal!5e0!3m2!1sen!2sus!4v1676539415039!5m2!1sen!2sus" width="100%" height="350" title="one"></iframe>
                            </div>
                        </div>

                        <div className="col-md-6"  data-aos="fade-left">
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14334.610594845668!2d27.914135!3d-26.077606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9575a6071a6a59%3A0x57ab8ac799410836!2sWild%20Fig%20Business%20Park!5e0!3m2!1sen!2sus!4v1676539430397!5m2!1sen!2sus" width="100%" height="350" title="two"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section Ends */}



        </div>

    )
}


export default Contact