import React from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";

function UnlockYourConsultingSuccess() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="consulting-page">


            {/* Consulting Data Starts */}

            <section className="potential-data potential-bg" >
                <div className="container" data-aos="fade-up">
                    <h2 className="hdng">Do the following problems resonate with you?</h2>
                    <div className="potential-block">
                        <h5>Charging for Value, Not Hours:</h5>
                        <p className="hdng-16">"I struggle to break free from the traditional billing model based on hours worked, which doesn't accurately reflect the value I provide to clients."</p>
                        <p className="hdng-16">"I find it challenging to determine the fair pricing for my consulting services based on the value I deliver to clients."</p>
                    </div>

                    <div className="potential-block">
                        <h5>Finding Consulting Opportunities:</h5>
                        <p className="hdng-16">"I have difficulty identifying and accessing potential consulting opportunities that align with my expertise and target market."</p>
                        <p className="hdng-16">"I struggle to stand out and attract high-value clients who can benefit from my consulting services."</p>
                    </div>

                    <div className="potential-block">
                        <h5>Incorporating Consulting into Existing Business:</h5>
                        <p className="hdng-16">"I'm unsure how to effectively integrate consulting services into my existing business structure and offerings."</p>
                        <p className="hdng-16">"I find it challenging to balance my current workload while incorporating consulting projects into my schedule."</p>
                    </div>

                    <NavLink to="/contact" className="custom-btn"><span>Book an online demo Now!</span></NavLink>
                </div>
            </section>

            {/* Consulting Data Ends */}

            {/* Consulting Data Starts */}

            <section className="potential-data">
                <div className="container" data-aos="fade-up">
                    <h2 className="hdng">Well, we have the solution!</h2>
                    <div className="potential-block">
                        <h5>Charging for Value, Not Hours:</h5>
                        <p className="hdng-16">"RED3SIXTY enables management consultants to accurately determine the value of their consulting services by providing comprehensive diagnostics and data-driven insights that showcase the impact of their expertise on clients' businesses."</p>
                        <p className="hdng-16">"With RED3SIXTY, consultants can confidently shift to a value-based pricing model, ensuring fair compensation for their services and building stronger client relationships based on the value delivered."</p>
                    </div>

                    <div className="potential-block">
                        <h5>Finding Consulting Opportunities:</h5>
                        <p className="hdng-16">"RED3SIXTY's lead generation capabilities empower management consultants to discover and access a wide range of consulting opportunities, connecting them with potential clients who align with their expertise and target market."</p>
                        <p className="hdng-16">"Through RED3SIXTY's platform, consultants gain exposure to a network of high-value clients and blue-chip companies, opening doors to new consulting projects and expanding their client base."</p>
                    </div>

                    <div className="potential-block">
                        <h5>Incorporating Consulting into Existing Business:</h5>
                        <p className="hdng-16">"RED3SIXTY provides management consultants with a seamless integration process, allowing them to easily incorporate consulting services into their existing business structure and offerings."</p>
                        <p className="hdng-16">"With the support of RED3SIXTY's tools and resources, consultants can efficiently manage their workload, balance existing commitments, and successfully integrate consulting projects into their schedule without compromising the quality of their services."</p>
                    </div>

                    <NavLink to="/contact" className="custom-btn"><span>Book an online demo Now!</span></NavLink>
                </div>
            </section>

            {/* Consulting Data Ends */}

            {/* Consulting Data Starts */}

            <section className="potential-data potential-bg">
                <div className="container" data-aos="fade-up">
                    <h2 className="hdng">What’s the Return on Investment?</h2>
                    <p className="hdng-16">Target - Improved close rate by 33% and increased profits by 27%<br />
                        Target - Increase Lead Generation by 300%<br />
                        Initial Cost = $199<br />
                        Net Increase in Revenue = $13,460 (20 new once off customers ($100)and 5 consulting engagements ($191))<br />
                        ROI = ($13,460 - $199) / $199 * 100 <br />
                        ROI = $13,261 / $199 * 100<br />
                        ROI ≈ 6,655% (Month 1)
                    </p>
                    <p className="hdng-16">In this scenario, the ROI is approximately 6,655%. This means that the accountant would generate a return on investment that is more than 66 times the initial cost of signing up for RED3SIXTY.</p>
                    <NavLink to="/contact" className="custom-btn"><span>Book an online demo Now!</span></NavLink>
                </div>
            </section>

            {/* Consulting Data Ends */}

            {/* Consulting Data Starts */}

            <section className="potential-data">
                <div className="container" data-aos="fade-up">
                    <h2 className="hdng">What do you get?</h2>
                    <p className="hdng-16">We have developed business growth platforms aimed at helping you run diagnostics and determine where your customer needs to focus in order to grow their business. You get:</p>
                    <ul className="site-ul">
                        <li><b>1.</b>A lead generating system guaranteed to provide you unlimited qualified leads</li>
                        <li><b>2.</b>Business diagnostics proven to convert leads into paying customers</li>
                        <li><b>3.</b>Unlimited diagnostics and auto completed reports ready to sell to your clients</li>
                        <li><b>4.</b>Automated development platform with more the 40 tools and 100’s hours of training content and videos</li>
                        <li><b>5.</b>Training and delivery manuals making delivery of any business solution easy</li>
                        <li><b>6.</b>Online certification ensuring you are certified and ready to start delivering </li>
                    </ul>
                    <NavLink to="/contact" className="custom-btn"><span>Book an online demo Now!</span></NavLink>
                </div>
            </section>

            {/* Consulting Data Ends */}


            {/* Consulting Data Starts */}

            <section className="potential-data potential-bg">
                <div className="container" data-aos="fade-up">
                    <h2 className="hdng">Our Vision</h2>
                    <p className="hdng-16">At RED3SIXTY, our vision is to revolutionize the consulting industry by empowering consultants, accountants, and coaches with cutting-edge technology and comprehensive solutions. We strive to be the premier platform that drives business growth, transforms client outcomes, and inspires excellence in the consulting profession. Through our innovative tools, unlimited capabilities, and unwavering commitment to value, we envision a future where every consultant has the power to unlock their full potential, deliver exceptional results, and make a lasting impact on businesses worldwide.</p>
                    <NavLink to="/contact" className="custom-btn"><span>Book an online demo Now!</span></NavLink>
                </div>
            </section>

            {/* Consulting Data Ends */}


        </div>

    )
}


export default UnlockYourConsultingSuccess 