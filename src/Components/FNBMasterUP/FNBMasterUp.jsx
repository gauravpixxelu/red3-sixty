import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import FNBMasterUPForm from './FNBMasterUPForm'
import HeaderFNB from './HeaderFNB'
import FNBAbout from './FNBMasterUP-images/about-fnb.jpg'
import SSL_Image from './FNBMasterUP-images/ssl-image.png'
import Check from './FNBMasterUP-images/check.png'
import FNBAbout_1 from './FNBMasterUP-images/about-fnb-1.jpg'
import FNBAbout_2 from './FNBMasterUP-images/about-fnb-2.jpg'
import Banner_Img from './FNBMasterUP-images/banner-img.png'
import Brochure from './FNBPDF/brochure.pdf'



function FNBMasterUp() {

    useEffect(() => {
        document.body.classList.add('fnb')
        return () => {
            document.body.classList.remove('fnb')
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="fnbmasterup-page">


                {/*----- Header FNB -----*/}
                <HeaderFNB />
                {/*----- Header FNB -----*/}



                {/*----- Banner FNB -----*/}

                <section className="banner-fnb">
                    <div className="container">
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-7">
                                <div className="fnb-banner-txt">
                                    <h1>FNB MasterUp Programme 2023</h1>
                                    <h4>We are looking for Business owners like you!</h4>
                                    <p>Are you an ambitious entrepreneur or a visionary business leader of a Small to Medium Enterprise (SME) showing promising potential for growth and innovation? Does your business fall within the Qualifying Small Enterprise (QSE) category, with a turnover between R10m and R50m Is your business 51% black owned?</p>
                                    <div className="fnb-btns">
                                        <a href="#apply-now" className="custom-btn" aria-label="Apply Now"><span>Apply Now</span></a>
                                        <a href={Brochure} className="custom-btn-2" download><span>Brochure</span></a>
                                    </div>
                                    <div className="ssl-block">
                                        <img src={SSL_Image} alt="" />
                                        <ul>
                                            <li><img src={Check} alt="" />Potentially Safe</li>
                                            <li><img src={Check} alt="" />Valid HTTPS Found</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="fnb-banner-img">
                                    <img src={Banner_Img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*----- Banner FNB -----*/}



                {/*----- About FNB -----*/}

                <section className="about-fnb">
                    <div className="container" data-aos="fade-up">
                        <div className="about-inner-sec">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="about-img">
                                        <img src={FNBAbout} alt="FNBAbout" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-txt">
                                        <p className="hdng-16">If you are passionate about taking your business to the next level and are open to leveraging cutting-edge technology and innovative growth strategies, you might be the ideal candidate for the “FNB MasterUp”.</p>
                                        <p className="hdng-16">Despite the challenges of your business environment, if you are resilient, forward-thinking, and committed to learning and personal growth, the “FNB MasterUp” might be the perfect platform for your business’s acceleration.</p>
                                        <p className="hdng-16">If you are prepared to engage in an intensive 10-month Blended Development Program, working alongside expert mentors, consultants, and possibly a part-time CFO, to drive your business success, you could be the candidate we are looking for.</p>
                                        <p className="hdng-16">In summary, if you are a dynamic, dedicated, and visionary SME leader ready to fast-track your business growth and make a significant impact on the national economy, the “FNB MasterUp” awaits your application.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*----- About FNB -----*/}


                {/*----- Criteria FNB -----*/}

                <section className="criteria-fnb">
                    <div className="container" data-aos="fade-up">
                        <div className="criteria-hdng">
                            <h2 className="sec-hdng">Selection criteria</h2>
                            <p className="hdng-18">Ensure all entries receive access to platform for self development (No Cost). Target 60 Medium sized black owner businesses for blended approach</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="criteria-box">
                                    <h4>1</h4>
                                    <p className="hdng-16">Turnover of between R10m and R50m. At least 51% black ownership in accordance with broad-based black economic empowerment definitions</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="criteria-box">
                                    <h4>2</h4>
                                    <p className="hdng-16">Business-to-business operating model. Must be tax-compliant</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="criteria-box">
                                    <h4>3</h4>
                                    <p className="hdng-16">Black ownership greater than 51%. Not a participant in another business development programme</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*----- Criteria FNB -----*/}


                {/*----- About FNB Service -----*/}

                <section id="about" className="about-fnb-service">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-fnb-service-txt">
                                    <h2 className="sec-hdng">About</h2>
                                    <p className="hdng-16">The “FNB MasterUp”, between First National Bank (FNB) and RED3SIXTY, Is a partnership its a program designed for Small and Medium Enterprises (SMEs). The initiative is set to bridge the gap between acceleration and funding requirements for SMEs, utilizing a sophisticated technology-assisted platform to support growth and investment. Committed to fostering a new generation of innovative, resilient, and successful SMEs, the program epitomizes the synergy of finance and technology in promoting sustainable economic development.</p>
                                    <a href="#apply-now" className="custom-btn" aria-label="Apply Now"><span>Apply Now</span></a>
                                    <div className="ssl-block">
                                        <img src={SSL_Image} alt="" />
                                        <ul>
                                            <li><img src={Check} alt="" />Potentially Safe</li>
                                            <li><img src={Check} alt="" />Valid HTTPS Found</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-fnb-service-img">
                                    <img src={FNBAbout_1} alt="FNBAbout" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*----- About FNB Service -----*/}


                {/*----- About Red3Sixty Service -----*/}

                <section className="about-fnb-service red-service">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-fnb-service-img">
                                    <img src={FNBAbout_2} alt="FNBAbout" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-fnb-service-txt">
                                    <h2 className="sec-hdng">About RED3SIXTY</h2>
                                    <p className="hdng-16">RED3SIXTY and its Strategic Partner, Business Doctors, have over the last 15 years focused on developing solutions and analysis capabilities delivered through the Business Doctors Franchise network of experienced professionals.</p>
                                    <p className="hdng-16">RED3SIXTY develops business growth methodologies and analytics through benchmarking and automation solutions focused on helping consultants and their customers (SME’s) succeed. RED3SIXTY is well established and operates internationally and locally with a national network able to support business development initiatives down to provincial and local area levels.</p>
                                    <a href="#apply-now" className="custom-btn" aria-label="Apply Now"><span>Apply Now</span></a>
                                    <div className="ssl-block">
                                        <img src={SSL_Image} alt="" />
                                        <ul>
                                            <li><img src={Check} alt="" />Potentially Safe</li>
                                            <li><img src={Check} alt="" />Valid HTTPS Found</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*----- About Red3Sixty Service -----*/}


                {/*----- Application Process -----*/}

                <section id="application-process" className="process-fnb">
                    <div className="container" data-aos="fade-up">
                        <h2 className="sec-hdng">Application Process</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="application-box">
                                    <div className="application-box-icon">
                                        <h5>Step 1</h5>
                                    </div>
                                    <div className="application-box-txt">
                                        <h4>Complete the Entry Form</h4>
                                        <p className="hdng-16">Begin your application process by filling out our entry form. The form is designed to capture basic information about your business such as name, type of business, contact information, and a brief description of your enterprise.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="application-box">
                                    <div className="application-box-icon">
                                        <h5>Step 2</h5>
                                    </div>
                                    <div className="application-box-txt">
                                        <h4>Complete the Business Questionnaire</h4>
                                        <p className="hdng-16">Once you have successfully completed the entry form, the next step is to fill out our detailed business questionnaire. This is an essential part of the application process as it allows us to understand your business model, growth strategy, target market, financial health, and more. We recommend you take your time to fill out this section thoroughly and accurately.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="application-box">
                                    <div className="application-box-icon">
                                        <h5>Step 3</h5>
                                    </div>
                                    <div className="application-box-txt">
                                        <h4>Application Review</h4>
                                        <p className="hdng-16">After you've completed and submitted the business questionnaire, our team of experts will begin the process of reviewing your application. This involves a thorough examination of the information provided to determine the potential and viability of your business in relation to our program's goals and objectives.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="application-box">
                                    <div className="application-box-icon">
                                        <h5>Step 4</h5>
                                    </div>
                                    <div className="application-box-txt">
                                        <h4>Invitation to Present Your Business</h4>
                                        <p className="hdng-16">If your application is shortlisted after the review, you will be invited to present your business to a panel. This is a unique opportunity to showcase the value proposition, the vision, and the strategy of your business. You'll have a chance to highlight why your business is a perfect fit</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="application-box">
                                    <div className="application-box-icon">
                                        <h5>Step 5</h5>
                                    </div>
                                    <div className="application-box-txt">
                                        <h4>Site Visit and Audit</h4>
                                        <p className="hdng-16">If you successfully impress our panel with your business presentation, we will conduct a site visit and audit as part of the selection process. This involves visiting your business premises, meeting your team, reviewing your operations, and conducting a detailed audit of your business processes and financial health.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="application-box">
                                    <div className="application-box-icon">
                                        <h5>Step 6</h5>
                                    </div>
                                    <div className="application-box-txt">
                                        <h4>Acceptance into the Program</h4>
                                        <p className="hdng-16">If the site visit and audit are successful, congratulations! You will receive an acceptance letter inviting you to join the FNB MasterUp. At this point, we will provide you with more information about what to expect as part of the program, as well as the next steps to kickstart your growth journey with us.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*----- Application Process -----*/}


                {/*----- FNB Accordian -----*/}

                <section id="faqs" className="fnb-faq">
                    <div className="container">
                        <h2 className="sec-hdng">FAQ's</h2>
                        <div className="accordion" id="accordionExample" data-aos="fade-up">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">What is the FNB MasterUp Program?</button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">The "FNB MasterUp" is a FNB enterprise development programme initiated in collaboration with RED3SIXTY focusing on providing platform-based business development support aimed at small to medium enterprises. The programme will be delivered by RED3SIXTY on an online platform with tailored business development modules and masterclasses. The programme key objectives are as follows:</p>
                                        <p className="hdng-16"><b>Ensure Funding Readiness:</b> entails supporting the enterprises to improve their investability and be able to unlock opportunities to enable scaling through effective business plans, financial projections, and pitch assets.</p>
                                        <p className="hdng-16"><b>Provide Growth Acceleration:</b> entails supporting enterprises operationally improve how they run the business in order to reduce the failure rate and improve sustainability. Improve business capabilities through automation and innovation and improve the valuation of the business and access to markets.</p>
                                        <p className="hdng-16"><b>Provide Operational and business support systems transformation:</b> entails Improved access to systems and platforms to achieve operational efficiency through technology enabled systems impacting cost reduction, efficiency improvements and customer satisfaction.</p>
                                        <p className="hdng-16"><b>Providing Marketing funding support:</b> Development of professional website and monthly marketing budget support</p>
                                        <p className="hdng-16"><b>Providing Professional Consulting Services:</b> Professional Business and Financial Consultants to help you scale your business. Able to dedicate time monthly to focus on your business needs.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What is the RED3SIXTY online platform</button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">The AI development platform offers efficiency, personalized insights, data-driven decision-making, scalability, predictive analytics, a competitive edge, enhanced client experiences, real-time analysis, consistency, and innovation, all of which collectively enhance your consulting business's effectiveness, quality, and growth potential.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Who can apply for this program?</button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">This program targets Small to Medium Enterprises (SMEs), Qualifying Small Enterprises (QSEs) with at least 51% black ownership as determined in the broad-based black economic empowerment definitions, with a turnover between R10m and R50m. Ambitious entrepreneurs or visionary business leaders of a <b>Small to Medium Enterprise (SME) </b>showing promising potential for growth and innovation. Entrepreneurs passionate about taking their business to the next level and are open to leveraging cutting-edge technology and innovative growth strategies.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How do I apply for the programme?</button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">Simply complete the application and business diagnostic to be entered and considered for entry into the program. You can find all the details and steps at <NavLink to="https://fnbmasterup.co.za/" target="_blank">www.fnbmasterup.co.za</NavLink> FNB Master UP</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Will I have to pay for the programme?</button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">No, the programme is free for the qualifying SMEs with successful applications</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">When is the call for applications closing?</button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">Applications will close on the 31st of October 2023</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">When will I know if I have been successful in the programme?</button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">Once applications have closed, the vetting and selection process will take 2 months and final businesses will be emailed in December 2023.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">What is the selection criteria for the program?</button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16"><b>1.</b> Turnover from R10m to R50</p>
                                        <p className="hdng-16"><b>2.</b> At least 51% black ownership in accordance with broad based black economic empowerment definitions,</p>
                                        <p className="hdng-16"><b>3.</b> Business to business operating model,</p>
                                        <p className="hdng-16"><b>4.</b> Across various sectors,</p>
                                        <p className="hdng-16"><b>5.</b> High growth potential score as assessed during the programme</p>

                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNine">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">How is the high growth potential score determined?</button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">RED3SIXTY uses advanced AI systems to calculate the success rate and growth potential of your business. This is based on the questionnaire you complete.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">How many small to medium enterprises will be selected?</button>
                                </h2>
                                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">60 qualifying SMEs will be selected into the programme.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEleven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">When is the programme scheduled to begin and what is the duration of the program?</button>
                                </h2>
                                <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">The business development support is expected to commence in December 2023 to August 2024 for a duration of 10 months.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwelve">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">Where will the programme be held.</button>
                                </h2>
                                <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">The programme will be an online programme undertaken on a technology platform ran by RED3Sixty. The programme will have a blended approach which will include learning on the platform and virtual masterclasses.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThirteen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">How often will I be required to be online on the platform</button>
                                </h2>
                                <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">The online platform facilitates self-development aligned with the gaps identified in your business diagnostics. You'll invest just 2 hours weekly, engaging with relevant topics tailored to the month's focus. It's a seamless way to enhance your skills while addressing your business needs.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingForteen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForteen" aria-expanded="false" aria-controls="collapseForteen">What is the Growth Accelerator Analysis process?</button>
                                </h2>
                                <div id="collapseForteen" className="accordion-collapse collapse" aria-labelledby="headingForteen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">The Growth Accelerator Analysis process is a core methodology designed to predict the success of a business and identify what needs to be done to increase its future success rate and performance.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFifteen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">How does the program help in funding readiness?</button>
                                </h2>
                                <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">Monthly growth development activities include specific benchmarking and development for funding readiness as well as funding readiness sessions. Investability analysis report will also be provided.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSixteen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">Will I receive funding during the programme?</button>
                                </h2>
                                <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="hdng-16">No, the programme will not be offering any funding. The business can use all the resources to assist with applying for funding.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*----- FNB Accordian -----*/}

                {/*----- FNB Form -----*/}

                <section id="apply-now" className="fnb-form" data-aos="fade-up">
                    <div className="container">
                        <h2 className="sec-hdng">Apply Now</h2>
                        <div className="fnb-form-block">
                            <FNBMasterUPForm />
                        </div>
                    </div>
                </section>

                {/*----- FNB Form -----*/}

            </div>
        </>
    );
};

export default FNBMasterUp