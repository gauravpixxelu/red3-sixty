import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Large_Business from '../assets/images/large-business.jpg';
import Large_Tab from '../assets/images/large-tab-1.jpg';
import Asset_Retrechment from '../assets/images/asset-retrechment.jpg';
import Core_Align from '../assets/images/core-align.jpg';
import Management_Review from '../assets/images/management-review.jpg';

function LargeBusiness() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="large-business-page">

            <Helmet>
                <title>Customer Diagnostics Management Consultancy | RED3SIXTY</title>
                <meta name="description" content="Read our guide to the best tools for building your turnaround strategy. Formulate appropriate strategic objectives and goals." />
            </Helmet>

            {/* Banner Section Ends */}

            <section className="businessess-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7" data-aos="fade-left">
                            <div className="businessess-block-hdng">
                                <h2 className="sec-hdng">Turn Around Strategiser (TAS) Methodology and Tools</h2>
                                <h4 className="clr-hdng">Company size: Large, Turnover above 51m</h4>
                                <p className="hdng-16">The survey and report are based on research gathered over the last 20 years studying more than 1300 business turnaround programs. The results will help you as a business owner strategize and execute a successful turnaround plan. Easily establish what is needed to get any business back on track and grow above that of your industry peers. This report and results represent a collection of existing turnaround studies aimed at leveraging best practice insights gained together with the results from your survey.</p>
                            </div>

                        </div>
                        <div className="col-md-5" data-aos="fade-right">
                            <div className="businessess-block-growth">
                                <h2 className="hdng">TAS Diagnostic Score</h2>
                                <img src={Large_Business} alt="Large_Business" />
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
                        </div>

                    </nav>
                    <div class="tab-content col3-tab" id="nav-tabContent" data-aos="fade-up">
                        <div class="tab-pane fade active show" id="module1" role="tabpanel" aria-labelledby="module1-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Cost Efficiencies Strategy</h4>
                                        <p className="hdng-16">Cost efficiencies include a varied range of actions, which can all be characterised as “belt-tightening” or “fire-fighting”, with the aim of producing “quick-wins” in order to either stabilise finances in the short-term until more complex strategies are devised or to quickly improve cash flow.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Cost Efficiencies Strategy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Primary – Reduce R&D Expenditure</li>
                                            <li>Primary – Extend Accounts Payable</li>
                                            <li>Primary – Reduce Marketing Spend</li>
                                            <li>Primary – Reduce the Number of Employees</li>
                                            <li>Advanced – Capital Structure Rework</li>
                                            <li>Advanced – Reduce Production Costs</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Large_Tab} alt="Large_Tab" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module2" role="tabpanel" aria-labelledby="module2-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Asset Retrenchment</h4>
                                        <p className="hdng-16">Asset retrenchment is often pursued in concert with, or immediately following a cost-efficiency drive. An asset retrenchment strategy is where areas of the firm that are underperforming are appraised to determine if efficiencies can be made, or whether it is best to divest the asset completely rather than allowing it to continue operating at a weaker level than the rest of the firm.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Fixed asset acquisition to total assets analysis </li>
                                            <li>Repairs and maintenance to fixed assets analysis </li>
                                            <li>Repairs and maintenance to sales analysis </li>
                                            <li>Sales to fixed assets analysis </li>
                                            <li>Net income to fixed assets analysis </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Improve asset utilization</li>
                                            <li>Divest in underperforming assets</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Asset_Retrechment} alt="Asset_Retrechment" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module3" role="tabpanel" aria-labelledby="module3-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Core Alignment</h4>
                                        <p className="hdng-16">A focus on the firm’s core activities is a strategy that entails determining the markets, products, and customers that have the potential to generate the greatest profits and refocusing the firm’s activities on these areas. Successful turnarounds have been associated with a focus on product lines for which the firm is best known, customer segments that are particularly loyal or less price-sensitive, and areas where the firm has distinct competitive strength.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Market Analysis</li>
                                            <li>Product Analysis</li>
                                            <li>Sales Analysis</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Primary – Penetrate more Profits</li>
                                            <li>Primary – Improve the Company’s competitive strategy</li>
                                            <li>Primary – Increase Sales</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Core_Align} alt="Core_Align" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module4" role="tabpanel" aria-labelledby="module4-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Management Review</h4>
                                        <p className="hdng-16">Resource and Team Management Changing the Top Management Team: In concert with CEO change, replacement of part or all of the Top Management Team (TMT) is often advocated. Indeed, many new CEO’s will bring their own trusted colleagues with them. Much of the discussion reported above regarding CEO change is echoed in the findings regarding the TMT. Therefore, to avoid repetition, we describe below only those elements that are specific to the TMT.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Interview Questionnaire</li>
                                            <li>Culture Analysis</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Primary – Review Management Team</li>
                                            <li>Primary – Conduct Culture Analysis</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Management_Review} alt="Management_Review" />
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


export default LargeBusiness