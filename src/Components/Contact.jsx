import React from 'react';
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
    return (

        <div className="contact-page">



            {/* Team Slider Section Starts */}

            <section className="team-slider">
                <div className="container">
                    <h2 className="sec-hdng">Our Team</h2>
                    <Carousel responsive={responsive} infinite={true}>
                    <div className="team-box">
                        <img src="images/team-1.jpg" alt="" />
                        <h3>Ushi Goshalia</h3>
                        <p>Strategic Partners</p>
                        <a href="https://www.linkedin.com/in/ushi-goshalia-73224126" target="_blank"><img src="icons/linkedin.png" alt="" />Connect With Me</a>
                    </div>    
                    
                    <div className="team-box">
                        <img src="images/team-2.jpg" alt="" />
                        <h3>Christo Olwagen</h3>
                        <p>Consultant Training</p>
                        <a href="https://www.linkedin.com/in/olwagen" target="_blank"><img src="icons/linkedin.png" alt="" />Connect With Me</a>
                    </div> 

                    <div className="team-box">
                        <img src="images/team-3.jpg" alt="" />
                        <h3>Estelanie van der Merwe</h3>
                        <p>Technology</p>
                        <a href="https://www.linkedin.com/in/estelanie-van-der-merwe-77a399115" target="_blank"><img src="icons/linkedin.png" alt="" />Connect With Me</a>
                    </div> 

                    <div className="team-box">
                        <img src="images/team-4.jpg" alt="" />
                        <h3>Aakash Choudhary</h3>
                        <p>Development Lead</p>
                        <a href="https://www.linkedin.com/in/aakash-choudhary-441019246/" target="_blank"><img src="icons/linkedin.png" alt="" />Connect With Me</a>
                    </div> 

                    <div className="team-box">
                        <img src="images/team-5.jpg" alt="" />
                        <h3>Ashish Kumar</h3>
                        <p>Technical lead</p>
                        <a href="https://www.linkedin.com/in/ashish-kumar-421a2b245/" target="_blank"><img src="icons/linkedin.png" alt="" />Connect With Me</a>
                    </div> 

                    <div className="team-box">
                        <img src="images/team-6.jpg" alt="" />
                        <h3>Steve Sutton</h3>
                        <p>Founder</p>
                        <a href="https://www.linkedin.com/in/suttons" target="_blank"><img src="icons/linkedin.png" alt="" />Connect With Me</a>
                    </div> 

                    <div className="team-box">
                        <img src="images/team-7.jpg" alt="" />
                        <h3>Mandisa Jostrey</h3>
                        <p>Enterprise Delivery</p>
                        <a href="https://www.linkedin.com/in/mandisa-thembelihle-jostrey-726a0162" target="_blank"><img src="icons/linkedin.png" alt="" />Connect With Me</a>
                    </div>    
                    </Carousel>
                </div>
            </section>

            {/* Team Slider Section Ends */}









            {/* Team Slider Section Starts */}

            <section className="address-maps">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12456.612288185082!2d-9.364376!3d38.691328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec8b1fdf106b5%3A0xde4917e8b3937ad7!2sPra%C3%A7a%205%20de%20Outubro%2C%202775-275%20Parede%2C%20Portugal!5e0!3m2!1sen!2sus!4v1676539415039!5m2!1sen!2sus" width="100%" height="350"></iframe>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14334.610594845668!2d27.914135!3d-26.077606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9575a6071a6a59%3A0x57ab8ac799410836!2sWild%20Fig%20Business%20Park!5e0!3m2!1sen!2sus!4v1676539430397!5m2!1sen!2sus" width="100%" height="350"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Slider Section Ends */}



        </div>

    )
}


export default Contact