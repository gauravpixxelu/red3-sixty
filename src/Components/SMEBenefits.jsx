import React from 'react';
import { useEffect } from 'react';
import Benefit1 from '../assets/icons/benefit-1.svg';
import Benefit2 from '../assets/icons/benefit-2.svg';
import Benefit3 from '../assets/icons/benefit-3.svg';

function SMEBenefits() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className="sme-benefit-page">



            {/* Logo Slder Section Ends */}

            <section className="sme-block">
                <div className="container">
                    <div className="sme-panel">
                        <div className="sme-hdng" data-aos="fade-up">
                            <p className="hdng-18">The Business Builder framework is designed to accurately determine at what stage your customers business is at present while at the same time highlighting critical areas that you will help focus on to ensure your customers business grows and succeeds.</p>
                            <p className="hdng-18">The Business Builder uses an algorithm developed by incorporating the lessons and insights gained from working with 1000s of business owners over the last 15 years. By applying the framework you will be able to drastically increase your customers chance of building a sustainable business in the shortest time.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4" data-aos="fade-right">
                                <div className="sme-box">
                                    <img src={Benefit1} alt="Benefit1" />
                                    <h4 className="box-hdn">+80% Reliability</h4>
                                    <p className="hdng-16">over 2000 SMEs completed the survey with more than 80% results reliability</p>
                                </div>
                            </div>

                            <div className="col-md-4" data-aos="fade-down ">
                                <div className="sme-box">
                                    <img src={Benefit2} alt="Benefit2" />
                                    <h4 className="box-hdn">+89% Success Rate</h4>
                                    <p className="hdng-16">more than 1000 SMEs improved their business. Achieced 89% success rate</p>
                                </div>
                            </div>

                            <div className="col-md-4" data-aos="fade-left">
                                <div className="sme-box">
                                    <img src={Benefit3} alt="Benefit3" />
                                    <h4 className="box-hdn">+30% KPI Improvement Y1</h4>
                                    <p className="hdng-16">individual SMEs achieved more than 50% increase across KPIs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Slder Section Ends */}


            {/* Logo Slder Section Ends */}

            <section className="acc-block">
                <div className="container">
                    <h2 className="sec-hdng" data-aos="fade-up">What are the benefits for your customer using the diagnostic report or development modules?</h2>
                    <div class="accordion" id="accordionExample" data-aos="fade-up">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Insights to 10 building blocks aimed at growing their business</button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <th>Diagnostic Features</th>
                                                <th>Diagnostic Advantages</th>
                                                <th>Diagnostic Benefits</th>
                                            </tr>
                                            <tr>
                                                <td>Online Survey</td>
                                                <td>Easy access from any device</td>
                                                <td>15 min online survey</td>
                                            </tr>
                                            <tr>
                                                <td>Automated Report</td>
                                                <td>Performance improvement insights</td>
                                                <td>Access to best practice gap analysis</td>
                                            </tr>
                                            <tr>
                                                <td>Online Development modules</td>
                                                <td>Do It Yourself Business Improvement</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">High growth strategy assessment and development linked to KPI tracking</button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <th>Diagnostic Features</th>
                                                <th>Diagnostic Advantages</th>
                                                <th>Diagnostic Benefits</th>
                                            </tr>
                                            <tr>
                                                <td>Strategy Development model</td>
                                                <td>Develop a winning strategy</td>
                                                <td>High performance strategy</td>
                                            </tr>
                                            <tr>
                                                <td>Performance GAP analysis</td>
                                                <td>Ability to increase performance</td>
                                                <td>Focused performance management</td>
                                            </tr>
                                            <tr>
                                                <td>Balanced Scorecard Tracking</td>
                                                <td>Monthly tracking</td>
                                                <td>Weekly and monthly Key Performance Indicator tracking and improvement</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Improved product and service profitability</button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <th>Diagnostic Features</th>
                                                <th>Diagnostic Advantages</th>
                                                <th>Diagnostic Benefits</th>
                                            </tr>
                                            <tr>
                                                <td>Product Profitability planning</td>
                                                <td>Improved margins</td>
                                                <td>Increase business profitability</td>
                                            </tr>
                                            <tr>
                                                <td>Product development roadmap</td>
                                                <td>Increased product development</td>
                                                <td>Improved product to market performance</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Increased market share and improved customer targeting</button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <th>Diagnostic Features
                                                </th>
                                                <th>Diagnostic Advantages
                                                </th>
                                                <th>Diagnostic Benefits
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>Market Analysis</td>
                                                <td>target market mapping</td>
                                                <td>increased market share</td>
                                            </tr>
                                            <tr>
                                                <td>Ideal Customer Profile Mapping</td>
                                                <td>ideal customer profiles</td>
                                                <td>Improved ability to target ideal customers</td>
                                            </tr>
                                            <tr>
                                                <td>Market Segmentation</td>
                                                <td>accurate market sizing</td>
                                                <td>Improved ability to target ideal markets</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Increased referrals, more up and cross sell opportunities</button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <th>Diagnostic Features</th>
                                                <th>Diagnostic Advantages</th>
                                                <th>Diagnostic Benefits</th>
                                            </tr>
                                            <tr>
                                                <td>Customer Satisfaction Survey</td>
                                                <td>Accurate customer satisfaction data</td>
                                                <td>Improve customer satisfaction</td>
                                            </tr>
                                            <tr>
                                                <td>Customer Lifetime calculator</td>
                                                <td>Accurate LTV financial calculations</td>
                                                <td>Focus on high value customers</td>
                                            </tr>
                                            <tr>
                                                <td>CRM Assessment</td>
                                                <td>Identify customer processing gaps</td>
                                                <td>Improved order to cash process</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSix">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Increased organisational capabilities</button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <th>Diagnostic Features</th>
                                                <th>Diagnostic Advantages</th>
                                                <th>Diagnostic Benefits</th>
                                            </tr>
                                            <tr>
                                                <td>Core Competencies analysis</td>
                                                <td>Identify sales, operations and financial management gaps</td>
                                                <td>Improved organisational competancy enabling better performance</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSeven">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">Accurate finacial reporting and automated analysis</button>
                            </h2>
                            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <th>Diagnostic Features</th>
                                                <th>Diagnostic Advantages</th>
                                                <th>Diagnostic Benefits</th>
                                            </tr>
                                            <tr>
                                                <td>Break even analysis</td>
                                                <td>Ability to forecast better</td>
                                                <td>Yearly cashflow forecast and planning</td>
                                            </tr>
                                            <tr>
                                                <td>Financial reporting analysis</td>
                                                <td>Identify financial improvement areas</td>
                                                <td>Increased financial performance</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingEight">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">Increased marketing and sales leads</button>
                            </h2>
                            <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <th>Diagnostic Features</th>
                                                <th>Diagnostic Advantages</th>
                                                <th>Diagnostic Benefits</th>
                                            </tr>
                                            <tr>
                                                <td>Market Funnel Calculator</td>
                                                <td>Allocate marketing targets</td>
                                                <td>More sales leads</td>
                                            </tr>
                                            <tr>
                                                <td>Lead Acquisition model</td>
                                                <td>Mapping of lead generation activities</td>
                                                <td>Identification and management of lead sources</td>
                                            </tr>
                                            <tr>
                                                <td>Lead Generation Objectives planner</td>
                                                <td>Track lead generation performance</td>
                                                <td>Better lead generation and conversion</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingNine">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">Sales performance improvement resulting in increased conversion</button>
                            </h2>
                            <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <th>Diagnostic Features</th>
                                                <th>Diagnostic Advantages</th>
                                                <th>Diagnostic Benefits</th>
                                            </tr>
                                            <tr>
                                                <td>Sales Skills assessment</td>
                                                <td>Identification of sales skills gaps</td>
                                                <td>Improved sales team performance</td>
                                            </tr>
                                            <tr>
                                                <td>Sales Forecasting planner</td>
                                                <td>Increased sales target performance</td>
                                                <td>Sales ability to forecast and meet targets</td>
                                            </tr>
                                            <tr>
                                                <td>Sales productivity assessment</td>
                                                <td>Identification of sales activities needed to make target</td>
                                                <td>mapping and tracking of sales activities</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTen">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">Increased employee engagement and better succession planning</button>
                            </h2>
                            <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <th>Diagnostic Features</th>
                                                <th>Diagnostic Advantages</th>
                                                <th>Diagnostic Benefits</th>
                                            </tr>
                                            <tr>
                                                <td>Key man analysis</td>
                                                <td>critical resource mapping and succession planning</td>
                                                <td>elimination of single points of employee failure</td>
                                            </tr>
                                            <tr>
                                                <td>Leadership and management assessment</td>
                                                <td>leadership and management skills gaps</td>
                                                <td>Improved Organisational leadership and management</td>
                                            </tr>
                                            <tr>
                                                <td>Employee satisfaction survey</td>
                                                <td>employee satisfaction data</td>
                                                <td>Increased employee engagement</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingEleven">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">Compliance to best practice governance framework</button>
                            </h2>
                            <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <th>Diagnostic Features</th>
                                                <th>Diagnostic Advantages</th>
                                                <th>Diagnostic Benefits</th>
                                            </tr>
                                            <tr>
                                                <td>Governance framework</td>
                                                <td>implementation of governance framework</td>
                                                <td>Governance alignment aqnd compliance</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* Logo Slder Section Ends */}










        </div>

    )
}


export default SMEBenefits