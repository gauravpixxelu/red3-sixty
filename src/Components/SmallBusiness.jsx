import React from 'react';
import { useEffect } from 'react';
import Small_Business from '../assets/images/small-business.jpg';
import Small_Tab from '../assets/images/small-tab-1.jpg';
import Product_Innovation from '../assets/images/product-innovation.jpg';
import Market_Defination from '../assets/images/market-defination.jpg';
import Growing_Customer from '../assets/images/growing-customer.jpg';
import Capability_Deliver from '../assets/images/capability-deliver.jpg';
import Finance_Profitable from '../assets/images/finance.jpg';
import Marketing_Strategy from '../assets/images/marketing-strategy.jpg';
import Sales_Deliver from '../assets/images/sales-deliver.jpg';
import Optimal_Team from '../assets/images/optimal-team.jpg';
import Compliance_Req from '../assets/images/compliance-req.jpg';

function SmallBusiness() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className="small-business-page">


            {/* Banner Section Ends */}

            <section className="businessess-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7" data-aos="fade-left">
                            <div className="businessess-block-hdng">
                                <h2 className="sec-hdng">Business Builder Methodology and Tools</h2>
                                <p className="hdng-16">The Business Builder framework is designed to accurately determine at what stage your customer’s business is at present, while at the same time highlighting critical areas that you need to focus on with them to ensure their business grows and succeeds. The Business Builder uses an algorithm developed by incorporating the lessons and insights gained from working with 1000s of business owners over the last 20 years. By applying the framework to their business it will drastically increase your customer’s chance of building a sustainable business in the shortest time.</p>
                            </div>

                            <div className="businessess-main">
                                <p className="hdng-16">Once the benchmarking is completed the platform automatically enables supplier-specific development modules. Each of the modules is structured to include specific tools and goals to ensure the benchmark indicator for each module is targeted and improved.</p>
                            </div>
                        </div>
                        <div className="col-md-5" data-aos="fade-right">
                            <div className="businessess-block-growth">
                                <h2 className="hdng">Business Builder Diagnostic Score</h2>
                                <img src={Small_Business} alt="Small_Business" />
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
                            <button class="nav-link" id="module6-tab" data-bs-toggle="tab" data-bs-target="#module6" type="button" role="tab" aria-controls="module6" aria-selected="false">Module 6</button>
                            <button class="nav-link" id="module7-tab" data-bs-toggle="tab" data-bs-target="#module7" type="button" role="tab" aria-controls="module7" aria-selected="true">Module 7</button>
                            <button class="nav-link" id="module8-tab" data-bs-toggle="tab" data-bs-target="#module8" type="button" role="tab" aria-controls="module8" aria-selected="false">Module 8</button>
                            <button class="nav-link" id="module9-tab" data-bs-toggle="tab" data-bs-target="#module9" type="button" role="tab" aria-controls="module9" aria-selected="false">Module 9</button>
                            <button class="nav-link" id="module10-tab" data-bs-toggle="tab" data-bs-target="#module10" type="button" role="tab" aria-controls="module10" aria-selected="true">Module 10</button>
                        </div>

                    </nav>
                    <div class="tab-content col3-tab" id="nav-tabContent" data-aos="fade-up">
                        <div class="tab-pane fade active show" id="module1" role="tabpanel" aria-labelledby="module1-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Business Planning</h4>
                                        <p className="hdng-16">Most organizations only realize 6% of their strategies potential value due to issues in development or execution. In this module we review the crucial aspects of target setting and performance tracking.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Project Charter Template</li>
                                            <li>SWOT Analysis Tool</li>
                                            <li>Advanced – Balanced Scorecard Strategy Map</li>
                                            <li>Business Model Survey</li>
                                            <li>Growth Planning System</li>
                                            <li>Growth Rate Calculator</li>
                                            <li>Business Planning Tool Review</li>
                                            <li>Five Forces Analysis Template</li>
                                            <li>STEP Analysis Template</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Primary – Increase Business Planning Benchmark (Monthly)</li>
                                            <li>Primary – Review Growth Planning System (Monthly)</li>
                                            <li>Primary – Update the Business Model Survey (Yearly)</li>
                                            <li>Secondary – SWOT Analysis (Yearly)</li>
                                            <li>Primary – Strategy Formulation (Yearly)</li>
                                            <li>Advanced – Update GAP Analysis (Quarterly)</li>
                                            <li>Advanced – Business Model Viability (Yearly)</li>
                                            <li>Primary – Update Balanced Scorecard (Monthly)</li>
                                            <li>Primary – Strategy Formulation (Yearly)</li>
                                            <li>Secondary – Update Project Prioritisation. (Monthly)</li>
                                            <li>Advanced – Portfolio Development (Yearly)</li>
                                            <li>Advanced – Update the Strategy Metric Dashboard (Monthly)</li>
                                            <li>Advanced – Complete 5 Forces Analysis Template (Yearly)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Small_Tab} alt="Small_Tab" />
                                    </div>
                                </div>
                            </div>
                        </div>
						
                        <div class="tab-pane fade" id="module2" role="tabpanel" aria-labelledby="module2-tab">
                          <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Product/Service Innovation</h4>
                                        <p className="hdng-16">To ensure continued relevance and increased sales an innovation process needs to be developed and implemented. To ensure growth and sales increase both markets and competitor trends should be monitored. Based on market demand and not lack of sales a formal innovation process should be adopted.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Innovation Tool Review</li>
                                            <li>Product Profitability</li>
                                            <li>Product Development Process Diagram</li>
                                            <li>Product Roadmap</li>
                                            <li>Product Development Strategy Scorecard</li>
                                            <li>Product Development Maturity Assessment</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Primary – Increase Innovation Performance Benchmark (Monthly)</li>
                                            <li>Primary – Complete Product Development Maturity Assessment</li>
                                            <li>Product Development (Yearly)</li>
                                            <li>Primary – Update Product Profitability Analysis</li>
                                            <li>Product Development (Yearly)</li>
                                            <li>Primary – Update Product Roadmap</li>
                                            <li>Product Development (Yearly)</li>
                                            <li>Advanced – Capture Product Development Process</li>
                                            <li>Product Development (Yearly)</li>
                                            <li>Secondary – Update Product Development Scorecard</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Product_Innovation} alt="Product_Innovation" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="tab-pane fade" id="module3" role="tabpanel" aria-labelledby="module3-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Market Definition</h4>
                                        <p className="hdng-16">Market development and penetration should form the core focus of all their growth activities. Growth should be actively targeted over and above the function of maintaining the current performance. Growth activities should be linked to their market opportunities and not resource availability.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Market Research Template</li>
                                            <li>Customer Profile Template</li>
                                            <li>Market Segment Analysis Tool</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Primary – Increase Market Definition Benchmark (Monthly)</li>
                                            <li>Primary – Complete Market Segmentation Analysis</li>
                                            <li>Market Development (Yearly)</li>
                                            <li>Primary – Update Customer Profile Template</li>
                                            <li>Market Development (Yearly)</li>
                                            <li>Secondary – Complete Market Research Template</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Market_Defination} alt="Market_Defination" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="tab-pane fade" id="module4" role="tabpanel" aria-labelledby="module4-tab">
                           <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Finding and Growing Customers</h4>
                                        <p className="hdng-16">In order for your customer’s business to succeed, you have to ensure they have a consistent number of new customers that are added, while at the same time ensuring existing customers are retained. You need to develop a monthly sales plan targeting the required number of new customers with relevant product or service revenues linked to the overall strategy they need to achieve.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>CRM Maturity Assessment</li>
                                            <li>Customer Lifetime Value Calculator</li>
                                            <li>Customer Satisfaction Survey</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Primary – Increase Customer Growth Benchmark (Monthly)</li>
                                            <li>Primary – Send out Customer Survey (Quarterly)</li>
                                            <li>Customer Service Improvement (Yearly)</li>
                                            <li>Primary – Complete CRM Assessment</li>
                                            <li>Customer Service Improvement (Yearly)</li>
                                            <li>Primary – Update LTV Calculator</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Growing_Customer} alt="Growing_Customer" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="tab-pane fade" id="module5" role="tabpanel" aria-labelledby="module5-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Capability to Deliver</h4>
                                        <p className="hdng-16">For your customer’s business to grow it must be able to consistently deliver high quality product or services. In order to do this, the right capabilities and competencies needs to be in place.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Core Competencies Assessment</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Primary – Increase Capability Benchmark (Monthly)</li>
                                            <li>Primary – Complete Core Capability Assessment</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Capability_Deliver} alt="Capability_Deliver" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="tab-pane fade" id="module6" role="tabpanel" aria-labelledby="module6-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Finance Profitable</h4>
                                        <p className="hdng-16">How well are your customers managing cash flow, margins and profitability ?</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Break Even Analysis</li>
											<li>Income Statement Worksheet</li>
											<li>Cash Flow Forecast</li>
											<li>Balance Sheet Template</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                           
                                        <li>Primary – Increase Finance Benchmark (Monthly)</li>
                                       <li>Primary – Update Income Statement Analysis</li>
                                       <li>Financial Management (Monthly) </li>
                                       <li>Secondary – Update Break Even Analysis</li>
                                       <li>Financial Management (Monthly) </li>
                                       <li>Primary – Update Cash Flow Forecast</li>
                                       <li>Financial Management (Monthly) </li>
                                       <li>Primary – Update Balance Sheet template</li>
                                       </ul>
                                        
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Finance_Profitable} alt="Finance_Profitable" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="tab-pane fade" id="module7" role="tabpanel" aria-labelledby="module7-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Market Strategy</h4>
                                        <p className="hdng-16">In today’s saturated markets, helping to differentiate your customer’s business from their competitors are a must if they are to succeed. Competing is not just about lowering their prices but more about researching and understanding their competitors strategy and positioning their business for success</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Marketing Funnel Calculator</li>
											<li>Lead Acquisition Model</li>
											<li>Lead Generation Prioritisation Tool</li>
											<li>Lead Scoring Template</li>
											<li>Lead Generation Objectives Scorecard</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Primary – Increase Market Strategy Benchmark (Monthly)</li>
											<li>Primary – Marketing Funnel Calculator</li>
											<li>Marketing Lead Generation (Monthly)</li>
											<li>Primary – Lead Acquisition Model</li>
											<li>Marketing Lead Generation (Monthly)</li>
											<li>Secondary – Lead Generation Prioritisation Tool</li>
											<li>Marketing Lead Generation (Monthly)</li>
											<li>Secondary – Update Lead Scoring Template</li>
											<li>Marketing Lead Generation (Monthly)</li>
											<li>Primary – Update the Lead Generation Objectives Scorecard</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Marketing_Strategy} alt="Marketing_Strategy" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="tab-pane fade" id="module8" role="tabpanel" aria-labelledby="module8-tab">
                           <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Sales Plan Delivery</h4>
                                        <p className="hdng-16">In order to effectively deliver and manage sales you have to measure sales performance weekly/monthly. For sales to deliver on targets there has to be a business specific sales process and sales funnel. The sales funnel should be aligned with the relevant sales software.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Sales Forecasting Tool</li>
                                            <li> Sales Productivity Metrics</li>
                                            <li> Sales Skills Assessment</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            
                                        <li>Primary – Increase Sales Plan Benchmark (Monthly)</li>
                                        <li>Primary – Complete the Sales Skills Assessment</li>
                                        <li>Sales Management (Monthly)</li>
                                        <li>Primary – Sales Forecasting Tool</li>
                                        <li>Sales Management (Monthly) </li>
                                       <li>Primary – Update Sales Productivity Metrics</li>
</ul>
                                       
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Sales_Deliver} alt="Sales_Deliver" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="tab-pane fade" id="module9" role="tabpanel" aria-labelledby="module9-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Managing Optimal Teams</h4>
                                        <p className="hdng-16">The most important aspect of helping your customer execute their strategy is ensuring all their resources in the business is aligned to achieving its goals. If the people in their business are not 100% aligned to the business vision they will not be able to deliver effectively.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                          <li> Organisational Chart</li>
                                           <li>Management and Leadership Maturity Assessment</li>
                                           <li>Succession Management Matrix</li>
                                           <li>Employee Satisfaction Survey</li>
                                           <li>Performance Review Template</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            
                                        <li>Primary – Increase Team Management Benchmark (Monthly)</li>
										<li>Advanced – Leadership and Management Assessment</li>
										<li>People Management (Monthly)</li>
										<li>Primary – Update Employee Succession Plan Metrics</li>
										<li>People Management (Monthly)</li>
										<li>Primary – Complete Employee Satisfaction Surveys</li>
										<li>People Management (Monthly)</li>
										<li>Primary – Update Organisational Chart</li>
										<li>People Management (Monthly)</li>
										<li>Primary – Complete Performance Review Template</li>
										</ul>
                                       
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Optimal_Team} alt="Optimal_Team" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="tab-pane fade" id="module10" role="tabpanel" aria-labelledby="module10-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Governance and Compliance</h4>
                                        <p className="hdng-16">Corporate Governance is as vital to SME’s as it is for large corporations. Implementation of cost-effective and simple mechanisms and processes will establish structure, improve operations, contribute to business growth and ensure effective compliance with the law.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>King IV One Page Summary </li>
                                               <li> King IV Analysis </li>
                                                 <li>King IV Principles </li>
                                                <li> King IV Summary </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            
                                        <li>Primary – Increase Governance Benchmark (Monthly)</li>
										<li>Primary – Review and Implement King IV</li>
</ul>
                                       
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Compliance_Req} alt="Compliance_Req" />
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


export default SmallBusiness