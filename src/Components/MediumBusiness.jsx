import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Medium_Business from '../assets/images/medium-business.jpg';
import Medium_Tab1 from '../assets/images/medium-tab-1.jpg';
import Medium_Tab2 from '../assets/images/medium-tab-2.jpg';
import Medium_Tab3 from '../assets/images/medium-tab-3.jpg';
import Medium_Tab4 from '../assets/images/medium-tab-4.jpg';
import Medium_Tab5 from '../assets/images/medium-tab-5.jpg';

function MediumBusiness() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="medium-business-page">

            <Helmet>
                <title>Business Diagnostics | Business Growth Blueprint | RED3SIXTY</title>
                <meta name="description" content="If your company gets stuck in an operation, we will provide business accelerator tools and technology to ensure your growth." />
            </Helmet>


            {/* Banner Section Ends */}

            <section className="businessess-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7" data-aos="fade-left">
                            <div className="businessess-block-hdng">
                                <h2 className="sec-hdng">Growth Accelerator Methodology and Tools</h2>
                                <h4 className="clr-hdng">Company Size: Meduim, Turnover Between 11m And 50m (Qse)</h4>
                                <p className="hdng-16">The Growth Accelerator Analysis process is aimed at accurately predicting the success of a business and specifically what needs to be done to increase its future success rate and performance. The objective is to increase maturity and profits while building a business capable of sustainable growth over 10 years Maturity Level.</p>
                                <p className="hdng-16">The areas that drive sustainable growth can be divided into 5 focus areas i.e. Aspirations – your vision for the business, Where to Play – the markets and strategy you chose, How to Win – the activities that will ensure success, Capabilities – your businesses ability to execute and Systems – are you automating for success and growth.</p>
                            </div>

                            <div className="businessess-main">
                                <p className="hdng-16">Are you running or managing a business with a high future success rate and sustainable competitive advantage? Are you looking for a plan to shift your business in the right direction? Just complete the following survey and we will show you how! This survey, while not complicated, will need you to focus for the next 15-20 minutes to ensure we establish the best plan for your business needs. Are you ready to take your business to the next level?</p>
                            </div>
                        </div>
                        <div className="col-md-5" data-aos="fade-right">
                            <div className="businessess-block-growth">
                                <h2 className="hdng">Growth Accelerator Diagnostic Score</h2>
                                <img src={Medium_Business} alt="Medium_Business" />
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* Banner Section Ends */}




            {/* Modules Section Starts */}

            <section className="modules-block">
                <div className="container">
                    <nav>
                        <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist" data-aos="fade-up">
                            <button class="nav-link active" id="module1-tab" data-bs-toggle="tab" data-bs-target="#module1" type="button" role="tab" aria-controls="module1" aria-selected="true">Module 1</button>
                            <button class="nav-link" id="module2-tab" data-bs-toggle="tab" data-bs-target="#module2" type="button" role="tab" aria-controls="module2" aria-selected="false">Module 2</button>
                            <button class="nav-link" id="module3-tab" data-bs-toggle="tab" data-bs-target="#module3" type="button" role="tab" aria-controls="module3" aria-selected="false">Module 3</button>
                            <button class="nav-link" id="module4-tab" data-bs-toggle="tab" data-bs-target="#module4" type="button" role="tab" aria-controls="module4" aria-selected="true">Module 4</button>
                            <button class="nav-link" id="module5-tab" data-bs-toggle="tab" data-bs-target="#module5" type="button" role="tab" aria-controls="module5" aria-selected="false">Module 5</button>
                        </div>

                    </nav>
                    <div class="tab-content col3-tab" id="nav-tabContent" data-aos="fade-up">
                        <div class="tab-pane fade active show" id="module1" role="tabpanel" aria-labelledby="module1-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Aspirations</h4>
                                        <p className="hdng-16">Aspirations are where you want the business to go, and what you want out of the business. The business needs to generate a return in the form of both return on capital invested and remuneration. Stated aspirations in the form of a strategy or plan ensure clear communication and alignment of employees. Clarity and purpose create a culture in the business aligned with the execution and delivery on business aspirations.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Growth Strategy Analysis</li>
                                            <li>Five-Year Financial Plan</li>
                                            <li>Presentation Linking Culture to Strategy</li>
                                            <li>Culture Linkage to Strategy</li>
                                            <li>Management Culture Analysis</li>
                                            <li>Culture Analysis</li>
                                            <li>Shareholder Value Analysis</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Primary – Aspirations (Yearly)</li>
                                            <li>Secondary – Review Growth Strategy</li>
                                            <li>Advanced – Review Shareholder</li>
                                            <li>Primary – Complete 5 Year Financial Plan</li>
                                            <li>Primary – Organisational Culture Analysis</li>
                                            <li>Secondary – Management Culture</li>
                                            <li>Advanced – Business Model</li>
                                            <li>Advanced – Culture Linkage to Strategy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Medium_Tab1} alt="Medium_Tab1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module2" role="tabpanel" aria-labelledby="module2-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Where to Play</h4>
                                        <p className="hdng-16">Where to Play focusses the business on what market the business wants to target and the customer segments they want to link their products and services to.</p>
                                        <p className="hdng-16">In order to ensure effective positioning, the current work in progress needs to be analysed and optimized. A strategy needs to be developed detailing market trends and related growth; an innovation forecast needs to be completed. Where to Play needs to be supported by a strong marketing and sales plan that ensures detailed planning.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Ultimate Marketing Assessment </li>
                                            <li>Growth Planning System </li>
                                            <li>Growth Planning System Linkage </li>
                                            <li>Demand Generation Maturity Assessment </li>
                                            <li>Website Maturity Assessment </li>
                                            <li>Lead Generation Maturity Assessment </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Where To Play (Yearly) Business Builder – Review Marketing Funnel Calculator</li>
                                            <li>Secondary – Review Growth Planning System</li>
                                            <li>Primary – World-Class</li>
                                            <li>Marketing Assessment</li>
                                            <li>Secondary – Demand Generation Maturity Assessment</li>
                                            <li>Secondary – Website Maturity Analysis</li>
                                            <li>Secondary – Lead Generation Maturity Assessment</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Medium_Tab2} alt="Medium_Tab2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module3" role="tabpanel" aria-labelledby="module3-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>How to Win</h4>
                                        <p className="hdng-16">In order to shift your business from “playing not to lose” to “playing to win”, you have to ensure that financial performance is aggressively reported and measured. The business needs to deliver on budget and as per forecast. Staff performance needs to be measured and improved in line with the business strategy. Playing to win requires the execution of the strategy and 100% alignment of customer service and delivery processes.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>10 Step Strategy Workbook</li>
                                            <li>10-Step Strategy Agenda</li>
                                            <li>Bid Assessment</li>
                                            <li>Win-Loss Review</li>
                                            <li>Risk Assessment</li>
                                            <li>One Page Strategy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <p className="hdng-16">How To Win (Yearly)</p>
                                        <ul className="tools">
                                            <li>Primary – Complete 10-Step Strategy Review</li>
                                            <li>Primary – Complete Win-loss Assessment</li>
                                            <li>Primary – Complete Bid Assessment</li>
                                            <li>Primary – Complete Risk Assessment</li>
                                            <li>Secondary – Complete One Page Strategy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Medium_Tab3} alt="Medium_Tab3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module4" role="tabpanel" aria-labelledby="module4-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Capabilities</h4>
                                        <p className="hdng-16">The task here is to define the competencies that support the where-to-play and how-to-win choices. In order to effectively deliver the business strategy, it is imperative that the business’s capabilities are optimized and aligned through effective task management i.e. Mature project management. The business’s ability to consistently deliver services and products must be optimized through business process optimization.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">

                                            <li>ISO Master Class</li>
                                            <li>ISO Readiness Survey</li>
                                            <li>ISO Readiness Presentation</li>
                                            <li>Project Management Maturity Assessment</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Primary – Complete ISO Gap Analysis</li>
                                            <li>Primary – Complete Project Management Maturity Assessment</li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Medium_Tab4} alt="Medium_Tab4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module5" role="tabpanel" aria-labelledby="module5-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Systems</h4>
                                        <p className="hdng-16">Strategists must define the systems, structures, and measures required to support the choices. This framework can be applied at all levels of the company, including the organization level or strategic group. Business systems must be implemented to automate the delivery and tracking of all aspects of the business.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">

                                            <li>New Software Analysis</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Primary – Systems (Yearly)</li>
                                            <li>Primary – Complete Systems Analysis</li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Medium_Tab5} alt="Medium_Tab5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>






            {/* Modules Section Ends */}

        </div>

    )
}


export default MediumBusiness