import React from 'react';
import { useEffect } from 'react';
import Access_Market from '../assets/images/access-market.jpg';
import Access_Img1 from '../assets/images/access-img-1.jpg';
import Access_Img2 from '../assets/images/access-img-2.jpg';
import Access_Img3 from '../assets/images/access-img-3.jpg';
import Access_Img4 from '../assets/images/access-img-4.jpg';
import Access_Img5 from '../assets/images/access-img-5.jpg';
import Access_Img6 from '../assets/images/access-img-6.jpg';
import Access_Img7 from '../assets/images/access-img-7.jpg';
import Access_Img8 from '../assets/images/access-img-8.jpg';
import Access_Img9 from '../assets/images/access-img-9.jpg';
import Access_Img10 from '../assets/images/access-img-10.jpg';
import Access_Img11 from '../assets/images/access-img-11.jpg';
import Access_Img12 from '../assets/images/access-img-12.jpg';

function AccessToMarket() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="access-to-market-page">



            {/* Banner Section Ends */}

            <section className="businessess-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7" data-aos="fade-left">
                            <div className="businessess-block-hdng">
                                <h2 className="sec-hdng">Access to Market (ATM) Methodology and Tools</h2>
                                <h4 className="clr-hdng">Company size: SME, Turnover 1m to 51m</h4>
                                <p className="hdng-16">Winning new customers is critical for a business in both new and existing markets. In new markets, acquiring new customers is essential for establishing a foothold and generating revenue. </p>
                                <p className="hdng-16">Without a customer base, a business cannot survive. In existing markets, winning new customers can help a business to continue to grow and diversify its revenue streams. New customers also bring new revenue which can help the company to expand and invest in new product or services, hiring new employees and expanding in new geographic locations.</p>
                            </div>

                        </div>
                        <div className="col-md-5" data-aos="fade-right">
                            <div className="businessess-block-growth">
                                <h2 className="hdng">ATM Diagnostic Score</h2>
                                <img src={Access_Market} alt="Access_Market" />
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
                            <button class="nav-link" id="module11-tab" data-bs-toggle="tab" data-bs-target="#module11" type="button" role="tab" aria-controls="module11" aria-selected="false">Module 11</button>
                            <button class="nav-link" id="module12-tab" data-bs-toggle="tab" data-bs-target="#module12" type="button" role="tab" aria-controls="module12" aria-selected="false">Module 12</button>
                        </div>

                    </nav>
                    <div class="tab-content col3-tab" id="nav-tabContent" data-aos="fade-up">
                        <div class="tab-pane fade active show" id="module1" role="tabpanel" aria-labelledby="module1-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Planning for profitable growth</h4>
                                        <p className="hdng-16">Planning for profitable growth takes an overview of the business growth process, and introduces a few key concepts / frameworks for growth that sets the scenes for the work to follow.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Business Model canvas</li>
                                            <li>Lean Model canvas</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            <li>Organisational life cycle</li>
                                            <li>Business model</li>
                                            <li>Sales conversion process</li>
                                            <li>Retention and growth</li>
                                            <li>Profitable growth model</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                        <img src={Access_Img1} alt="Access_Img1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module2" role="tabpanel" aria-labelledby="module2-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Quick Profit Improvement</h4>
                                        <p className="hdng-16">This module contain a number of “quick fixes” for profit improvement, from the point of view that it does not require any significant investment in the development of new products and services or markets, and very limited if any structural adjustment to the organisational structure, resources, assets, processes etc.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Sales Productivity</li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
                                            
 	                                    <li>Improving sales productivity </li>
 	                                    <li>Capture more profit t</li>
 	                                    <li>Reduce costs to increase profit </li>
 	                                    <li>Strategic control points</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                    <img src={Access_Img2} alt="Access_Img2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module3" role="tabpanel" aria-labelledby="module3-tab">
                           <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Improving proposal success</h4>
                                        <p className="hdng-16">This module introduces the core concepts necessary for improving the success rate of proposals. There are some markets that are highly commoditised, and this is sadly especially true for corporate supply chains where the program participants are trying to break in via Procurement</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Proposal success assessment</li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
 	                                   <li>The Stall Zone </li>
 	                                   <li>Corporate procurement roles</li>
 	

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                    <img src={Access_Img3} alt="Access_Img3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module4" role="tabpanel" aria-labelledby="module4-tab">
                           <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Analysing an Integrated Report</h4>
                                        <p className="hdng-16">This module is highly specific to suppliers that are targeting listed companies, and consist mostly of watching the video that talks through the process of analysing such a report for South African listed companies. It does have benefit for other suppliers in demonstrating how to research and understand the needs and goals of their target customers but the information might be harder to find and interpret.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Proposal Success Assessment</li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
 	                                   <li>Using an Integrated Report </li>
 	                                  
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                    <img src={Access_Img4} alt="Access_Img4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module5" role="tabpanel" aria-labelledby="module5-tab">
                           <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Developing a Value Proposition</h4>
                                        <p className="hdng-16">This module is focused on developing a clear value proposition with some best practice examples, and highly practical exercises to define a value proposition that meets the customer needs. It builds on the customer understanding that the supplier would have been developing during the homework assignments to date.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>The Value Proposition Canvas</li>
											<li>Customer Value mapping</li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
 	                                   <li>Customer value </li>
									   <li>Market segmentation </li>
									   <li>The Value Proposition Canvas </li>
									   <li>Customer fit </li>
 	                                  
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                    <img src={Access_Img5} alt="Access_Img5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module6" role="tabpanel" aria-labelledby="module6-tab">
                           <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Branding and Design</h4>
                                        <p className="hdng-16">This module introduces suppliers to the concepts of branding and then delivers a highly intensive introduction to design considerations in brand naming, logos, colours. Many suppliers will not have been exposed to this and it can be used to make them rethink/reframe their assumptions about the value of bringing branding and marketing professionals on board in their growth strategy.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Building visibility and presence is a core tool for developing a branding strategy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
 	                                  <li>The purpose and value of a brand,</li>
 	                                  <li>Implementing a branding strategy Naming a brand</li>
 	                                  <li>Developing the visual identity of the brand</li>
 	                                  <li>Building brand visibility, authority and presence</li>	                  
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                    <img src={Access_Img6} alt="Access_Img6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module7" role="tabpanel" aria-labelledby="module7-tab">
                           <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Pricing Power</h4>
                                        <p className="hdng-16">This module covers the critically important topic of pricing and pricing power, and contain some core concepts as well as tools to assist suppliers in pricing their products and services for maximum gain</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Pricing strategy / price formulas</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
 	                                  <li>Pricing is a strategic activity</li>
 	                                  <li>Pricing strategies</li>
 	                                  <li>Value based pricing</li>                  
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                    <img src={Access_Img7} alt="Access_Img7" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module8" role="tabpanel" aria-labelledby="module8-tab">
                             <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Access to Market</h4>
                                        <p className="hdng-16">This module is firstly a revision of the work done to date, in order to run an effective business whilst adding additional depth to some of the previous concepts. It then builds on this to plan for scaling the business by looking at various concepts around building traction and leaping the gap.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Traction and leaping the chasm</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
 	                                  <li>Translating deep understanding about the customer value proposition</li>
                                      <li> Building traction and leaping the chasm     </li>         
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                    <img src={Access_Img8} alt="Access_Img8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module9" role="tabpanel" aria-labelledby="module9-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Innovation for Growth</h4>
                                        <p className="hdng-16">This module is an intense introduction to innovation tools and processes, using the FIT – Framework for Innovative Thinking and design thinking process. The FIT process is described in great detail and would be sufficient for suppliers to apply to innovation in their own companies.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>OODA </li>
                                               <li>Design thinking </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
 	                                  <li>Defining innovation</li>
                                      <li> FIT – Framework for Innovative Thinking</li>         
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                    <img src={Access_Img9} alt="Access_Img9" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module10" role="tabpanel" aria-labelledby="module10-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Creating an irresistible product</h4>
                                        <p className="hdng-16">This module speaks about the characteristics of an irresistible offer, and introduces a framework that could help suppliers build their offer and market presence over time. It is very much a long-term systemic approach and it is unlikely to generate any meaningful results within the scope of a program that is 12 months or shorter</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Brand Builder Model </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
 	                                  <li>The characteristics of an irresistible offer</li>
                                      <li>The brand builder model</li>         
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                    <img src={Access_Img10} alt="Access_Img10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module11" role="tabpanel" aria-labelledby="module11-tab">
                           <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Build a purpose driven brand</h4>
                                        <p className="hdng-16">This module speaks to purpose driven brands – what they are, and how to create one.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>Transforming the brand </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools">
 	                                  <li>What are the benefits to having a purpose driven company</li>
                                      <li>What are the characteristics of a purpose driven brand</li>  
                                      <li>How to build a purpose driven brand</li>									  
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                    <img src={Access_Img11} alt="Access_Img11" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="module12" role="tabpanel" aria-labelledby="module12-tab">
                           <div className="row">
                                <div className="col-md-4">
                                    <div className="tab-cnt">
                                        <h4>Reinvent yourself</h4>
                                        <p className="hdng-16">The final module in the program is a motivational speech for business owners and entrepreneurs, and encourages them to also look at reinventing themselves as a person, with a focus on goals, development, renewal and growth.</p>
                                        <h5>Development Tools</h5>
                                        <ul className="tools">
                                            <li>FIT innovation tool </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-cnt middle-cnt">
                                        <h5>Development Goals</h5>
                                        <ul className="tools"> 	                                
 	                                     <li>Call to action, habits, discipline, acquiring expertise and other tools for improving personal performance</li>
 	                                     <li>Thinking about your current earning power and skills and how future changes could increase or decrease those</li>
                                         <li>the cashflow quadrant</li>
                                         <li>Applying the FIT innovation tool to yourself</li>							  
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tab-img">
                                    <img src={Access_Img12} alt="Access_Img12" />
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


export default AccessToMarket