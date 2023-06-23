import React from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";

function UnlockYourPotential() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="potential-page">


            {/* Potential Data Starts */}

            <section className="potential-data potential-bg" >
                <div className="container" data-aos="fade-up">
                    <h2 className="hdng">Do the following problems resonate with you?</h2>
                    <p className="hdng-16">"I struggle with marketing and promoting my consulting services within my existing accounting client base, limiting awareness of the value-added services I can provide beyond traditional accounting."</p>
                    <p className="hdng-16">"I struggle with incorporating business diagnostics into my accounting and consulting approach, which hampers my ability to provide comprehensive insights and tailored solutions to clients."</p>
                    <p className="hdng-16">"I lack a structured approach or methodology for incorporating consulting into my existing accounting practice, resulting in inconsistencies or inefficiencies in delivering consulting services to clients."</p>
                    <p className="hdng-16">"I lack efficient and standardized processes for integrating business diagnostics into my accounting and consulting services, leading to inefficiencies and inconsistencies in delivering insights to clients."</p>
                    <NavLink to="/contact" className="custom-btn"><span>Book an online demo Now!</span></NavLink>
                </div>
            </section>

            {/* Potential Data Ends */}

            {/* Potential Data Starts */}

            <section className="potential-data">
                <div className="container" data-aos="fade-up">
                    <h2 className="hdng">Well, we have the solution!</h2>
                    <p className="hdng-16">RED3SIXTY helps accountants position themselves as trusted consultants by providing them with industry-specific insights, methodologies, and expertise. The platform equips accountants with the knowledge and tools to demonstrate their holistic financial guidance and consulting capabilities, building trust with clients seeking comprehensive solutions.</p>
                    <p className="hdng-16">RED3SIXTY provides a comprehensive framework and guidance to help accountants transition from charging for hours to charging for value. The platform offers tools to assess the value provided to clients, establish pricing structures, and communicate the value proposition effectively.</p>
                    <p className="hdng-16">RED3SIXTY's platform utilizes AI and data analytics to help accountants identify targeted consulting opportunities within specific industries or niches. It provides insights into industry trends, challenges, and client needs, enabling accountants to focus their efforts and deliver tailored consulting solutions.</p>
                    <p className="hdng-16">RED3SIXTY's platform provides tools for efficient project management and resource allocation. Accountants can leverage these features to effectively balance their time and resources between providing traditional accounting services and delivering consulting projects, optimizing productivity and client satisfaction.</p>
                    <NavLink to="/contact" className="custom-btn"><span>Book an online demo Now!</span></NavLink>
                </div>
            </section>

            {/* Potential Data Ends */}

            {/* Potential Data Starts */}

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

            {/* Potential Data Ends */}

            {/* Potential Data Starts */}

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

            {/* Potential Data Ends */}


            {/* Potential Data Starts */}

            <section className="potential-data potential-bg">
                <div className="container" data-aos="fade-up">
                    <h2 className="hdng">Our Vision</h2>
                    <p className="hdng-16">At RED3SIXTY, our vision is to revolutionize the consulting industry by empowering consultants, accountants, and coaches with cutting-edge technology and comprehensive solutions. We strive to be the premier platform that drives business growth, transforms client outcomes, and inspires excellence in the consulting profession. Through our innovative tools, unlimited capabilities, and unwavering commitment to value, we envision a future where every consultant has the power to unlock their full potential, deliver exceptional results, and make a lasting impact on businesses worldwide..</p>
                    <NavLink to="/contact" className="custom-btn"><span>Book an online demo Now!</span></NavLink>
                </div>
            </section>

            {/* Potential Data Ends */}


        </div>

    )
}


export default UnlockYourPotential