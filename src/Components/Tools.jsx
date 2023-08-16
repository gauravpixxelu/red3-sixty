import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Project_Prioritisation from '../assets/images/project-prioritisation.jpg';
import Porters_Five_Forces from '../assets/images/porters-five-forces.jpg';
import Balanced_Scorecard from '../assets/images/balanced-scorecard.jpg';
import Product_Development from '../assets/images/product-development.jpg';
import Product_Profitability from '../assets/images/product-profitability.jpg';
import Product_Roadmap from '../assets/images/product-roadmap.jpg';
import Market_Analysis from '../assets/images/market-analysis.jpg';
import Customer_Profile from '../assets/images/Customer-Profile.jpg';
import Market_Segmentation from '../assets/images/market-segmentation.jpg';
import Crm_Maturity from '../assets/images/crm-maturity.jpg';
import Lifetime_Value from '../assets/images/lifetime-value.jpg';
import Customer_Satisfaction from '../assets/images/customer-satisfaction.jpg';
import Module_Img_Block1 from '../assets/images/module-img-block-2.jpg';
import Break_Even from '../assets/images/break-even.jpg';
import Cash_Flow from '../assets/images/cash-flow.jpg';
import Income_Analysis from '../assets/images/income-analysis.jpg';
import Marketing_Funne from '../assets/images/marketing-funne.jpg';
import Lead_Generation from '../assets/images/lead-generation.jpg';
import Acquisition_Model from '../assets/images/acquisition-model.jpg';
import Skill from '../assets/images/skill.jpg';
import Sales_Forecasting from '../assets/images/sales-forecasting.jpg';
import Sales_Activities from '../assets/images/sales-activities.jpg';
import Module_Img_Block2 from '../assets/images/module-img-block.jpg';
import Management from '../assets/images/management.jpg';
import Succession from '../assets/images/succession.jpg';
import Employee from '../assets/images/Employee.jpg';

function Tools() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="tools-page">

            <Helmet>
                <title>Best Business Planning Software | Diagnostic Software | RED3SIXTY</title>
                <meta name="description" content="Find business planning tools. We provide best business planning tools software. You can grow your business with our software." />
            </Helmet>

            {/* Modules Section Starts */}

            <section className="modules-block">
                <div className="container">
                    <div className="modules-block-hdng" data-aos="fade-up">
                        <h2 className="sec-hdng">Business Planning Tools Focus Areas</h2>
                    </div>
                    <nav>
                        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist" data-aos="fade-up">
                            <button className="nav-link active" id="project-prioritisation-tab" data-bs-toggle="tab" data-bs-target="#project-prioritisation" type="button" role="tab" aria-controls="project-prioritisation" aria-selected="true">Project Prioritisation</button>
                            <button className="nav-link" id="porters-five-forces-tab" data-bs-toggle="tab" data-bs-target="#porters-five-forces" type="button" role="tab" aria-controls="porters-five-forces" aria-selected="false">Porter's Five Forces</button>
                            <button className="nav-link" id="balanced-scorecard-tab" data-bs-toggle="tab" data-bs-target="#balanced-scorecard" type="button" role="tab" aria-controls="balanced-scorecard" aria-selected="false">Balanced Scorecard</button>
                        </div>

                    </nav>
                    <div className="tab-content" id="nav-tabContent" data-aos="fade-up">
                        <div className="tab-pane fade active show" id="project-prioritisation" role="tabpanel" aria-labelledby="project-prioritisation-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">Your customer needs to determine which projects are of the highest priority. Without project prioritization, it can be difficult to determine and implement key company strategies. In the process of determining this project prioritization, it is important that you document and outline their decision making process.</p>
                                        <p className="hdng-16">A Project Prioritization Tool to rank projects based on their company strategic fit, economic impact, and feasibility. The project prioritization tool works by allowing you to create a rational method to force rank each project where you define and weight the importance of each of the ranking criteria.</p>
                                        <p className="hdng-16">This tool enables you to rank projects and to score on a scale of 1-10. Once you have done so, a bubble matrix chart is automatically generated to communicate the findings of your analysis. This bubble matrix chart will help you get a visual understanding of the different projects you are working on.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Project_Prioritisation} alt="Project_Prioritisation" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="porters-five-forces" role="tabpanel" aria-labelledby="porters-five-forces-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">This is a model that identifies and analyses five competitive forces that shape every industry and helps determine an industry’s weaknesses and strengths. Five Forces analysis is frequently used to identify an industry’s structure to determine corporate strategy. Porter’s model can be applied to any segment of the economy to understand the level of competition within the industry and enhance your customers long-term profitability.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Porters_Five_Forces} alt="Porters_Five_Forces" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="balanced-scorecard" role="tabpanel" aria-labelledby="balanced-scorecard-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">Your customer needs to communicate strategic objectives, metrics, targets, and initiatives, for each of the 4 key perspectives: Financial, Customer, Learning & Growth, and Business Processes. It is important that you discuss your strategy with your team so that each member understands what the goals and expectations of the department and company.</p>
                                        <p className="hdng-16">We created the Balanced Scorecard Strategy Map to help your company develop of a resource that outlines your company’s strategic objectives, metrics target, and initiatives. With this tool, your company will be able to communicate to your team from a number of perspectives. To utilize this Balanced Scorecard Strategy Map</p>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Balanced_Scorecard} alt="Balanced_Scorecard" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            {/* Modules Section Ends */}


            {/* Modules Section Starts */}

            <section className="modules-block moduleblock_wht">
                <div className="container">
                    <div className="modules-block-hdng" data-aos="fade-up">
                        <h2 className="sec-hdng">Product/Service Innovation Tools Focus Areas</h2>
                    </div>
                    <nav>
                        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist" data-aos="fade-up">
                            <button className="nav-link active" id="product-development-tab" data-bs-toggle="tab" data-bs-target="#product-development" type="button" role="tab" aria-controls="product-development" aria-selected="true">Product Development</button>
                            <button className="nav-link" id="product-profitability-tab" data-bs-toggle="tab" data-bs-target="#product-profitability" type="button" role="tab" aria-controls="product-profitability" aria-selected="false">Product Profitability</button>
                            <button className="nav-link" id="product-roadmap-tab" data-bs-toggle="tab" data-bs-target="#product-roadmap" type="button" role="tab" aria-controls="product-roadmap" aria-selected="false">Product Roadmap</button>
                        </div>

                    </nav>
                    <div className="tab-content" id="nav-tabContent" data-aos="fade-up">
                        <div className="tab-pane fade active show" id="product-development" role="tabpanel" aria-labelledby="product-development-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">Your customer needs to improve your product development competencies. It is important that they benchmark and understand their current product development capabilities and long term goals. We created the Product Development Assessment tool to help you assess your organization’s product development processes and capabilities. This tool allows you to assign a weight to different areas of product development, including Strategy, Process Definition, Portfolio Management, and Sales & Discipline, and then to measure your overall effectiveness.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Product_Development} alt="Product_Development" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="product-profitability" role="tabpanel" aria-labelledby="product-profitability-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16"> Your customer needs to compare the profitability of various products in their portfolio. It is required that they consider important aspects related to the products your company sells, including the unit cost, price and marketing costs.
                                            We created a Microsoft Excel Product Profitability Analysis tool to analyse each product your company sells. To use this tool, first list out each of the products your company commercializes, and then complete the remaining information that is requested. The information required includes the Product Name, Price, Unit Cost, Unit Sales, Revenues, Costs of Goods Sold, Gross Contribution, Marketing & Sales Costs, Product Profit/Loss, and Gross Margin. Once the information has been entered, you will be presented with a graphical representation of the data.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Product_Profitability} alt="Product_Profitability" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="product-roadmap" role="tabpanel" aria-labelledby="product-roadmap-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16"> Your customer needs to create a roadmap for product development and innovation over a certain time period.</p>
                                        <p className="hdng-16"> We created the Product Roadmap Template to analyse market segment needs, trends, products, and technology required to produce market-driven products.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Product_Roadmap} alt="Product_Roadmap" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Section Ends */}


            {/* Modules Section Starts */}

            <section className="modules-block">
                <div className="container">
                    <div className="modules-block-hdng" data-aos="fade-up">
                        <h2 className="sec-hdng">Market Definition Tools Focus Areas</h2>
                    </div>
                    <nav>
                        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist" data-aos="fade-up">
                            <button className="nav-link active" id="market-analysis-tab" data-bs-toggle="tab" data-bs-target="#market-analysis" type="button" role="tab" aria-controls="market-analysis" aria-selected="true">Market Analysis</button>
                            <button className="nav-link" id="customer-profile-tab" data-bs-toggle="tab" data-bs-target="#customer-profile" type="button" role="tab" aria-controls="customer-profile" aria-selected="false">Customer Profile</button>
                            <button className="nav-link" id="market-segmentation-tab" data-bs-toggle="tab" data-bs-target="#market-segmentation" type="button" role="tab" aria-controls="market-segmentation" aria-selected="false">Market Segmentation</button>
                        </div>

                    </nav>
                    <div className="tab-content" id="nav-tabContent" data-aos="fade-up">
                        <div className="tab-pane fade active show" id="market-analysis" role="tabpanel" aria-labelledby="market-analysis-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16"> Your customer needs to determine what type of analysis to conduct on the data collected through a market research effort. We created the Market Research Analysis Template to help you determine what type of analysis to engage in after collecting data in a market research effort. This Microsoft Word template describes the primary types of analysis to help you determine which type to perform.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Market_Analysis} alt="Market_Analysis" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="customer-profile" role="tabpanel" aria-labelledby="customer-profile-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16"> Your customer needs a precise understanding of their customer behaviour and characteristics. It is required that they generate a standard customer profile that can be shared with the departments in their company. We created the Customer Profile Template to help you develop a fictional user persona that profiles the target customer you need to reach with your product development, communications, and PR efforts</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Customer_Profile} alt="Customer_Profile" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="market-segmentation" role="tabpanel" aria-labelledby="market-segmentation-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16"> With limited resources, your customers can’t pursue all possible market opportunities. We created A tool to help you select the markets that represent the best opportunity for your organization.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Market_Segmentation} alt="Market_Segmentation" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* Modules Section Ends */}


            {/* Modules Section Starts */}

            <section className="modules-block moduleblock_wht">
                <div className="container">
                    <div className="modules-block-hdng" data-aos="fade-up">
                        <h2 className="sec-hdng">Customer Analysis Tools Focus Areas</h2>
                    </div>
                    <nav>
                        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist" data-aos="fade-up">
                            <button className="nav-link active" id="crm-maturity-tab" data-bs-toggle="tab" data-bs-target="#crm-maturity" type="button" role="tab" aria-controls="crm-maturity" aria-selected="true">CRM Maturity</button>
                            <button className="nav-link" id="lifetime-value-calculator-tab" data-bs-toggle="tab" data-bs-target="#lifetime-value-calculator" type="button" role="tab" aria-controls="lifetime-value-calculator" aria-selected="false">Lifetime Value Calculator</button>
                            <button className="nav-link" id="customer-satisfaction-tab" data-bs-toggle="tab" data-bs-target="#customer-satisfaction" type="button" role="tab" aria-controls="customer-satisfaction" aria-selected="false">Customer Satisfaction</button>
                        </div>

                    </nav>
                    <div className="tab-content" id="nav-tabContent" data-aos="fade-up">
                        <div className="tab-pane fade active show" id="crm-maturity" role="tabpanel" aria-labelledby="crm-maturity-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">Your customer needs to assess the maturity of their CRM program. It is important that they consider all aspects related to the CRM program and that they report and benchmark their current capabilities. We created the CRM Maturity Assessment to help you evaluate your CRM program maturity. This tool enables you to rate your compliance with best practices across 15 categories, including: Senior Management Commitment, Customer-Centric Organization, Business Goals & Objectives Alignment, Customer Satisfaction Management, Customer Strategy </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Crm_Maturity} alt="Crm_Maturity" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="lifetime-value-calculator" role="tabpanel" aria-labelledby="lifetime-value-calculator-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16"> Your customer needs to determine their company’s customer lifetime value (CLV) considering the following factors: Retention Rate, Referral Rate, Interest Rate, # Orders, Average Order Size, Risk Factor, Acquisition Cost, Marketing Cost and Incentives. Use this tool to determine their company’s customer lifetime value considering the following factors: Retention Rate, Referral Rate, Interest Rate, # Orders, Average Order Size, Risk Factor, Acquisition Cost, Marketing Cost and Incentives. This tool will automatically calculate the following: Total Customers, Annual Revenue, Costs, Net Revenue, NPV Revenue and Lifetime Value</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Lifetime_Value} alt="Lifetime_Value" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="customer-satisfaction" role="tabpanel" aria-labelledby="customer-satisfaction-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">Your customer needs to gauge the current level of customer satisfaction. It is required that you create a survey to analyse the aspects that your customers consider you are doing well and those where you need to improve. We created a Customer Satisfaction template to help you benchmark current levels of satisfaction. The purpose of this survey is to help you serve your customer’s needs more effectively and to help you understand where you are exceeding your customer’s expectations and which areas need improvement. </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Customer_Satisfaction} alt="Customer_Satisfaction" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Section Ends */}


            {/* Modules Section Starts */}

            <section className="modules-block">
                <div className="container">
                    <div className="modules-block-hdng" data-aos="fade-up">
                        <h2 className="sec-hdng">Capabilities Analysis Tools and Focus Areas</h2>
                    </div>
                    <div className="row module-txt-gd">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="module-img-block">
                                <img src={Module_Img_Block1} alt="Module_Img_Block2" />
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="module-txt-block">
                                <h2 className="hdng">Core Competencies</h2>
                                <p className="hdng-16">Your customer needs to audit their organization to identify areas for improvement and make solid recommendations based on your assessment.</p>
                                <p className="hdng-16">Rate their compliance with best practices across the following core competencies: Strategic Planning, CRM, Demand Generation, Performance Measurement, Market Research, Sales, Organizational Development, Human Resources, Systems & Technology, and Product Development.</p>
                                <p className="hdng-16">Your customer needs to audit their organization to identify areas for improvement and make solid recommendations based on your assessmentA Microsoft Excel self-assessment tool to rate your compliance with best practices across the following core competencies: Strategic Planning, CRM, Demand Generation, Performance Measurement, Market Research, Sales, Organizational Development, Human Resources, Systems & Technology, and Product Development.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Modules Section Ends */}


            {/* Modules Section Starts */}

            <section className="modules-block  moduleblock_wht">
                <div className="container">
                    <div className="modules-block-hdng" data-aos="fade-up">
                        <h2 className="sec-hdng">Financial Analysis Tools and Focus Areas</h2>
                    </div>
                    <nav>
                        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist" data-aos="fade-up">
                            <button className="nav-link active" id="break-even-analysis-tab" data-bs-toggle="tab" data-bs-target="#break-even-analysis" type="button" role="tab" aria-controls="break-even-analysis" aria-selected="true">Break Even Analysis</button>
                            <button className="nav-link" id="cash-flow-forecast-tab" data-bs-toggle="tab" data-bs-target="#cash-flow-forecast" type="button" role="tab" aria-controls="cash-flow-forecast" aria-selected="false">Cash Flow Forecast</button>
                            <button className="nav-link" id="income-analysis-tab" data-bs-toggle="tab" data-bs-target="#income-analysis" type="button" role="tab" aria-controls="income-analysis" aria-selected="false">Income Analysis</button>
                        </div>

                    </nav>
                    <div className="tab-content" id="nav-tabContent" data-aos="fade-up">
                        <div className="tab-pane fade active show" id="break-even-analysis" role="tabpanel" aria-labelledby="break-even-analysis-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">Your customers are in the process of examining a product/product line and they aren’t sure how many units they need to sell to hit the break-even point. It is important that you help them determine the unit contribution and variable cost per unit. We created a Break Even analysis calculator help you determine break-even point and profitability. To use this resource, enter the break-even analysis tab and input your sales data, variable costs and fixed costs. As you enter this data, you will see two pie charts, one a unit contribution margin and the other a variable cost per unit chart. At the bottom a net profit/loss number will be automatically presented.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Break_Even} alt="Break_Even" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="cash-flow-forecast" role="tabpanel" aria-labelledby="cash-flow-forecast-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16"> Your customer needs to forecast cash flow and compare the forecast to the actual cash flow. Financial information needs to at the same time provide a comparison of forecasted v. actual cash flow Use the Cash Flow Forecast to monitor and compare forecasted and actual cash flow. This Microsoft Excel spreadsheet provides a detailed analysis of current cash in as well as cash expenditures. While planning for your upcoming year, input your company’s projected cash flow into the “Cash Flow Projection” tab. As the year commences and moves forward, input your actual cash flow into the “Cash Flow Actual” tab. Once you input your company’s specific financial information, a comparison of forecasted v. actual cash flow will be automatically generated in the “Analysis” tab.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Cash_Flow} alt="Cash_Flow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="income-analysis" role="tabpanel" aria-labelledby="income-analysis-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16"> Your customer needs to determine if their company was profitable during a specific period of time. They need to monthly check whether their company made or lost money during the time recorded. We created the Income Statement Template to help you determine your company’s net income/loss. The purpose of this tool, which is also known as a Profit & Loss Statement, is to show whether your company made or lost money during the time recorded.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Income_Analysis} alt="Income_Analysis" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            {/* Modules Section Ends */}


            {/* Modules Section Starts */}

            <section className="modules-block">
                <div className="container">
                    <div className="modules-block-hdng" data-aos="fade-up">
                        <h2 className="sec-hdng">Marketing & Lead Analysis Tools and Focus Areas</h2>
                    </div>
                    <nav>
                        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist" data-aos="fade-up">
                            <button className="nav-link active" id="marketing-funnel-calculator-tab" data-bs-toggle="tab" data-bs-target="#marketing-funnel-calculator" type="button" role="tab" aria-controls="marketing-funnel-calculator" aria-selected="true">Marketing Funnel Calculator</button>
                            <button className="nav-link" id="lead-generation-prioritization-tab" data-bs-toggle="tab" data-bs-target="#lead-generation-prioritization" type="button" role="tab" aria-controls="lead-generation-prioritization" aria-selected="false">Lead Generation Prioritization</button>
                            <button className="nav-link" id="lead-acquisition-model-tab" data-bs-toggle="tab" data-bs-target="#lead-acquisition-model" type="button" role="tab" aria-controls="lead-acquisition-model" aria-selected="false">Lead Acquisition Model</button>
                        </div>

                    </nav>
                    <div className="tab-content" id="nav-tabContent" data-aos="fade-up">
                        <div className="tab-pane fade active show" id="marketing-funnel-calculator" role="tabpanel" aria-labelledby="marketing-funnel-calculator-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16"> Your customer needs a model to illustrate their lead generation & nurturing process. Their lead acquisition model should include Direct & Indirect Marketing Campaigns, Lead Scoring, Lead Nurturing Campaign, and Lead Assignment. We created the Lead Acquisition Model to illustrate your lead generation & nurturing process. This Microsoft PowerPoint Presentation provides you with a real-world example of a potential lead generation process. Your lead acquisition model should include Direct & Indirect Marketing Campaigns, Lead Scoring, Lead Nurturing Campaign, and Lead Assignment.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Marketing_Funne} alt="Marketing_Funne" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="lead-generation-prioritization" role="tabpanel" aria-labelledby="lead-generation-prioritization-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16"> Your customer needs to evaluate their lead generation initiatives. You need to help them identify the lead generation initiatives that will bring the most value to their organization We created the Lead Generation Prioritization Tool to help you evaluate your lead generation initiatives based on their strategic fit, economic impact, and feasibility.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Lead_Generation} alt="Lead_Generation" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="lead-acquisition-model" role="tabpanel" aria-labelledby="lead-acquisition-model-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">Your customer needs a model to illustrate their lead generation & nurturing process. Their lead acquisition model should include Direct & Indirect Marketing Campaigns, Lead Scoring, Lead Nurturing Campaign, and Lead Assignment. We created the Lead Acquisition Model to illustrate your lead generation & nurturing process. This Microsoft PowerPoint Presentation provides you with a real-world example of a potential lead generation process. Your lead acquisition model should include Direct & Indirect Marketing Campaigns, Lead Scoring, Lead Nurturing Campaign, and Lead Assignment.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Acquisition_Model} alt="Acquisition_Model" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            {/* Modules Section Ends */}


            {/* Modules Section Starts */}

            <section className="modules-block  moduleblock_wht">
                <div className="container">
                    <div className="modules-block-hdng" data-aos="fade-up">
                        <h2 className="sec-hdng">Sales Analysis Tools and Focus Areas</h2>
                    </div>
                    <nav>
                        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist" data-aos="fade-up">
                            <button className="nav-link active" id="sales-skills-analysis-tab" data-bs-toggle="tab" data-bs-target="#sales-skills-analysis" type="button" role="tab" aria-controls="sales-skills-analysis" aria-selected="true">Sales Skills Analysis</button>
                            <button className="nav-link" id="sales-forecasting-tab" data-bs-toggle="tab" data-bs-target="#sales-forecasting" type="button" role="tab" aria-controls="sales-forecasting" aria-selected="false">Sales Forecasting</button>
                            <button className="nav-link" id="sales-activities-tab" data-bs-toggle="tab" data-bs-target="#sales-activities" type="button" role="tab" aria-controls="sales-activities" aria-selected="false">Sales Activities</button>
                        </div>

                    </nav>
                    <div className="tab-content" id="nav-tabContent" data-aos="fade-up">
                        <div className="tab-pane fade active show" id="sales-skills-analysis" role="tabpanel" aria-labelledby="sales-skills-analysis-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">Your customer needs to evaluate the skills of the members of your customers sales team. It is important to evaluate the current skills of their sales team. The assessment should allow them evaluate each of their sales reps based on the key needs for their sales department We created the Sales Skills Assessment tool to assist you in evaluating the current skills of your sales team. This assessment will allow you evaluate each of your sales reps based on the key needs for your sales department.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Skill} alt="Skill" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="sales-forecasting" role="tabpanel" aria-labelledby="sales-forecasting-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">Your customer needs to create a sales forecasting tool to analyse their company’s sales opportunities. This should enable them to also chart total vs expected revenue, opportunities at certain stages, probabilities, deal size and top objections. We created the Sales Forecasting Tool to help you prioritize and manage sales opportunities. This tool enables you to chart total vs expected revenue, opportunities at certain stages, probabilities, deal size and top objections. The template works by providing you with a space to fill out the details of a prospect, including the customer name, region, what product or program they are looking to purchase, the expected close date, the stage in the sale´s cycle, and the probability of success.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Sales_Forecasting} alt="Sales_Forecasting" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="sales-activities" role="tabpanel" aria-labelledby="sales-activities-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">Your customer needs to track performance for an inside sales rep or team. It is required that they find a way to measure the productivity of sales representatives, and it is important that they collect and analyse data in order to identify areas that need to be addressed. We created a Sales Productivity Metrics worksheet to capture daily sales productivity metrics for sales reps. These metrics include dials, demos, and more. With this resource, we allow you to transfer these results into our Sales Productivity Metrics (monthly) tool to aggregate metrics for your entire team.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Sales_Activities} alt="Sales_Activities" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            {/* Modules Section Ends */}


            {/* Modules Section Starts */}

            <section className="modules-block">
                <div className="container">
                    <div className="modules-block-hdng" data-aos="fade-up">
                        <h2 className="sec-hdng">People Analysis Tools and Focus Areas</h2>
                    </div>
                    <nav>
                        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist" data-aos="fade-up">
                            <button className="nav-link active" id="management-assessment-tab" data-bs-toggle="tab" data-bs-target="#management-assessment" type="button" role="tab" aria-controls="management-assessment" aria-selected="true">Management Assessment</button>
                            <button className="nav-link" id="succession-planning-tab" data-bs-toggle="tab" data-bs-target="#succession-planning" type="button" role="tab" aria-controls="succession-planning" aria-selected="false">Succession Planning</button>
                            <button className="nav-link" id="employee-survey-tab" data-bs-toggle="tab" data-bs-target="#employee-survey" type="button" role="tab" aria-controls="employee-survey" aria-selected="false">Employee Survey</button>
                        </div>

                    </nav>
                    <div className="tab-content" id="nav-tabContent" data-aos="fade-up">
                        <div className="tab-pane fade active show" id="management-assessment" role="tabpanel" aria-labelledby="management-assessment-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">Your customer needs to attract the best talent to their company and in order to do so, it is important that they evaluate their current leadership team and the quality of their company’s management. We created the Management & Leadership Assessment Tool to help you evaluate your organization’s management and leadership capabilities. This tool allows you to rate your company across the following: Leadership, Training, Staffing, Budgeting, Purchasing, Project Management, Communication, and Team Building. This tool can you help you identify areas of weakness in your company that can be improved upon. With this tool, once you have completed the requested assessment, you will be provided with the results and recommendations for improvement.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Management} alt="Management" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="succession-planning" role="tabpanel" aria-labelledby="succession-planning-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">Your customer needs a succession management matrix to identify and develop the future leaders of their organization. They need to plot employees according to their level of potential & performance (High, Med, Low) to determine how to best develop each person. We created the Succession Management Matrix to identify and develop the future leaders of your organization. Plot employees on the matrix according to their level of potential & performance (High, Med, Low) to determine how to best develop each person.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Succession} alt="Succession" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="employee-survey" role="tabpanel" aria-labelledby="employee-survey-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tab-cnt">
                                        <p className="hdng-16">The survey needs to determine how satisfied your customers employees are with their workplace. This survey should allow employees to evaluate their work environment based on the following areas: Product & Company Training, Office Culture, Management Team & Leadership, Policies & Procedures, Performance Management and Employee Advancement We created the Employee Satisfaction Survey to determine how satisfied your employees are with your workplace. This Microsoft Word based survey tool allows employees to evaluate their work environment based on the following areas: Product & Company Training, Office Culture, Management Team & Leadership, Policies & Procedures, Performance Management and Employee Advancement.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tab-img">
                                        <img src={Employee} alt="Employee" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Section Ends */}


            {/* Modules Section Starts */}

            <section className="modules-block  moduleblock_wht">
                <div className="container">
                    <div className="modules-block-hdng" data-aos="fade-up">
                        <h2 className="sec-hdng">Governance Analysis Tools and Focus Areas</h2>
                    </div>
                    <div className="row module-txt-gd">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="module-txt-block">
                                <h2 className="hdng">Governance Analysis</h2>
                                <p className="hdng-16">SMEs are the drivers of a growing and inclusive economy and of societal transformation. In order to service, SMEs need to be innovative and entrepreneurial, and open to technological change and productivity growth</p>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="module-img-block">
                                <img src={Module_Img_Block2} alt="Module_Img_Block1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Section Ends */}


        </div>

    )
}


export default Tools