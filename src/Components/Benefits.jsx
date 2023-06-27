import React from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import BookForm from './BookForm';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Logo1 from '../assets/images/logo-1.jpg';
import Logo2 from '../assets/images/logo-2.jpg';
import Logo3 from '../assets/images/logo-3.jpg';
import Logo4 from '../assets/images/logo-4.jpg';
import Logo5 from '../assets/images/logo-5.jpg';
import Logo6 from '../assets/images/logo-6.jpg';
import Frame from '../assets/images/frame.png';
import Right_Arrow from '../assets/images/right-arrow.png';
import Left_Arrow from '../assets/images/left-arrow.png';
import Circle_Shape from '../assets/images/circle-shape.png';
import Benfits_Img2 from '../assets/images/benfits-img-2.png';
import Benfits_Img1 from '../assets/images/benfits-img-1.png';
import Benfits_Img3 from '../assets/images/benfits-img-3.png';
import Benfits_Img4 from '../assets/images/benfits-img-4.png';
import Module_Overview from '../assets/images/module-overview.jpg';
import Diagonstic_Overview from '../assets/images/diagonstic-overview.jpg';
import Business_Performance from '../assets/images/business-performance.jpg';
import Service_Innovation from '../assets/images/service-innovation.jpg';
import Customer_Analysis from '../assets/images/customer-analysis.jpg';
import Marketing_Analysis from '../assets/images/marketing-analysis.jpg';
import Performance_Analysis from '../assets/images/performance-analysis.jpg';
import Sales_Planning from '../assets/images/sales-planning.jpg';
import Marketing_Lead from '../assets/images/marketing-lead.jpg';
import Finacial_Planning from '../assets/images/finacial-planning.jpg';
import Capability_Analysis from '../assets/images/capability-analysis.jpg';
import Implementing_Governace from '../assets/images/implementing-governace.jpg';
import BusinessPlanPopup from './BusinessPlan/BusinessPlanPopup';
import IntroductionPopup from './Introduction/IntroductionPopup';
import { lazy, Suspense } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const LazyYouTube = lazy(() => import('react-youtube'));


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};



function Benefits() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="benefits-page">

      <Helmet>
        <title>Business Consulting Solutions | Diagnostic Platform Certification | RED3SIXTY</title>
        <meta name="description" content="Looking for an opportunity to start and grow your own consulting practice? RED3SIXTY is an international business support platform dedicated to helping small and medium sized consulting and coaching businesses." />
      </Helmet>


      {/* Benefits Section Starts */}

      <section className="benefits-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="fade-right">
              <div className="benefits-block-content">
                <h4 className="small-hdn">Benefits RED3SIXTY</h4>
                <h2 className="sec-hdng">Looking for an opportunity to start and grow your own consulting practice?</h2>
                <p className="hdng-16">RED3SIXTY is an International business support platform dedicated to helping small and medium-sized consulting and coaching businesses scale.</p>
                <p className="hdng-16">Average earnings between R348k and R1,2m per year.</p>
                <p className="hdng-16">Full training is provided to successful applicants and all RED3SIXTY consultants are fully supported.</p>
                <div className="buttons-benfi">
                  <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch <br />Demo</span></NavLink>
                  <BusinessPlanPopup />
                  <IntroductionPopup />
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="benefits-block-image">
                <img src={Frame} alt="Benefits_Img" />
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyLoadComponent>
                    <LazyYouTube
                      className="video-back"
                      videoId="qKywLbJRfx8"
                      muted
                      opts={{
                        width: '490',
                        height: '305',
                        playerVars: {
                          autoplay: 1,
                          mute: 1,
                        },
                      }}
                    />
                  </LazyLoadComponent>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section Ends */}



      {/* Logo Slder Section Ends */}

      <section className="logo-carousel">
        <div className="container" data-aos="fade-up">
          <Carousel responsive={responsive} infinite={true} >
            <img src={Logo1} alt="Logo1" />
            <img src={Logo2} alt="Logo2" />
            <img src={Logo3} alt="Logo3" />
            <img src={Logo4} alt="Logo4" />
            <img src={Logo5} alt="Logo5" />
            <img src={Logo6} alt="Logo6" />
          </Carousel>
        </div>
      </section>
      {/* Logo Slder Section Ends */}



      {/* Book Online Section Starts */}

      <section className="platform-block">
        <div className="container">
          <div className="row platform-4" data-aos="fade-right">
            <div className="col-md-6">
              <div className="banner-image">
                <img className="abxo" src={Benfits_Img4} alt="Benfits_Img1" />
                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="platform-txt">
                <h2 className="hdng">Pre-Qualified Leads and customer creation!</h2>
                <p className="hdng-16">Discover more leads, get more customers! Close more deals! All Leads are pre-qualified! No need for cold calls! Use Pre-populated emails to ensure high conversions. Generate high ROI linked to your business plan.</p>
                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                <NavLink to="/pricing" className="custom-btn-2"><span>Prices</span></NavLink>
              </div>
            </div>
            <img className="vector dg" src={Left_Arrow} alt="Left_Arrow" data-aos="fade-up" />
          </div>

          <div className="row platform-1">
            <div className="col-md-6" data-aos="fade-right">
              <div className="platform-txt">
                <h2 className="hdng">Engagement Management</h2>
                <p className="hdng-16">The RED3SIXTY platform enables both customer and consultant tools and content download once the modules are activated. The content and tools enable business-specific development linked to improving the performance as indicated in the report. Tools and content can all be customized to match branding and company information.</p>
                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                <NavLink to="/pricing" className="custom-btn-2"><span>Prices</span></NavLink>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="banner-image">
                <img className="abxo" src={Benfits_Img2} alt="Benfits_Img2" />
                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
              </div>
            </div>
            <img className="vector gd" src={Right_Arrow} alt="Right_Arrow" data-aos="fade-up" />
          </div>

          <div className="row platform-2" data-aos="fade-right">
            <div className="col-md-6">
              <div className="banner-image">
                <img className="abxo" src={Benfits_Img1} alt="Benfits_Img1" />
                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="platform-txt">
                <h2 className="hdng">Automation</h2>
                <p className="hdng-16">The RED3SIXTY platform enables the automatic report generation linked to the customer-specific diagnostic. The reports provide insights linked to business gaps and opportunities making it easier to map the customer development journey.</p>
                <p className="hdng-16">Report generation forms part of a new revenue stream as the customer can select to purchase the report. There are 4 main diagnostics that the platform currently supports all with linked report generation and management functionality.</p>
                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                <NavLink to="/pricing" className="custom-btn-2"><span>Prices</span></NavLink>
              </div>
            </div>
            <img className="vector dg" src={Left_Arrow} alt="Left_Arrow" data-aos="fade-up" />
          </div>

          <div className="row platform-3">
            <div className="col-md-6" data-aos="fade-right">
              <div className="platform-txt">
                <h2 className="hdng">Revenue Generation</h2>
                <p className="hdng-16">The RED3SIXTY platform supports the full process from customer creation, diagnostic survey selection, customer interaction, diagnostic analysis, customer report generation and monthly customer engagement management.</p>
                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                <NavLink to="/pricing" className="custom-btn-2"><span>Prices</span></NavLink>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="banner-image">
                <img className="abxo" src={Benfits_Img3} alt="Benfits_Img3" />
                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Online Section Ends */}



      {/* Modules Section Starts */}

      <section className="modules-block">
        <div className="container">
          <div className="modules-block-hdng" data-aos="fade-up">
            <h2 className="sec-hdng">Includes 3 day online Platform and Methodology Certification</h2>
            <p className="hdng-16">Certification is aimed at ensuring you are able to start generating revenue in week 2 of signing up</p>
          </div>



          <nav>
            <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist" data-aos="fade-up">
              <button className="nav-link active" id="module1-tab" data-bs-toggle="tab" data-bs-target="#module1" type="button" role="tab" aria-controls="module1" aria-selected="true">Module 1</button>
              <button className="nav-link" id="module2-tab" data-bs-toggle="tab" data-bs-target="#module2" type="button" role="tab" aria-controls="module2" aria-selected="false">Module 2</button>
              <button className="nav-link" id="module3-tab" data-bs-toggle="tab" data-bs-target="#module3" type="button" role="tab" aria-controls="module3" aria-selected="false">Module 3</button>
              <button className="nav-link" id="module4-tab" data-bs-toggle="tab" data-bs-target="#module4" type="button" role="tab" aria-controls="module4" aria-selected="true">Module 4</button>
              <button className="nav-link" id="module5-tab" data-bs-toggle="tab" data-bs-target="#module5" type="button" role="tab" aria-controls="module5" aria-selected="false">Module 5</button>
              <button className="nav-link" id="module6-tab" data-bs-toggle="tab" data-bs-target="#module6" type="button" role="tab" aria-controls="module6" aria-selected="false">Module 6</button>
              <button className="nav-link" id="module7-tab" data-bs-toggle="tab" data-bs-target="#module7" type="button" role="tab" aria-controls="module7" aria-selected="true">Module 7</button>
              <button className="nav-link" id="module8-tab" data-bs-toggle="tab" data-bs-target="#module8" type="button" role="tab" aria-controls="module8" aria-selected="false">Module 8</button>
              <button className="nav-link" id="module9-tab" data-bs-toggle="tab" data-bs-target="#module9" type="button" role="tab" aria-controls="module9" aria-selected="false">Module 9</button>
              <button className="nav-link" id="module10-tab" data-bs-toggle="tab" data-bs-target="#module10" type="button" role="tab" aria-controls="module10" aria-selected="true">Module 10</button>
              <button className="nav-link" id="module11-tab" data-bs-toggle="tab" data-bs-target="#module11" type="button" role="tab" aria-controls="module11" aria-selected="false">Module 11</button>
              <button className="nav-link" id="module12-tab" data-bs-toggle="tab" data-bs-target="#module12" type="button" role="tab" aria-controls="module12" aria-selected="false">Module 12</button>
            </div>

          </nav>
          <div className="tab-content" id="nav-tabContent" data-aos="fade-up">
            <div className="tab-pane fade active show" id="module1" role="tabpanel" aria-labelledby="module1-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="tab-cnt">
                    <h4>RED Platform and Module Overview</h4>
                    <p className="hdng-16">Business Builder Overview to ensure that you are fully prepared to deliver the services to your customers:</p>
                    <ul className="tools">
                      <li>Overview of all the Modules and Tools – Business Builder Overview</li>
                      <li>Overview of the Survey process – Survey Update Overview</li>
                      <li>Overview of the Business Builder Report – Business Builder Report Overview</li>
                      <li>Overview of the RED Portal – Consultant View Module Overview</li>
                    </ul>
                    <p className="hdng-16">Demo of “Failure is not an option” seminar. Download the “Failure is not an option” content – 8 Business Success Areas</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-img">
                    <img src={Module_Overview} alt="Module_Overview" />
                  </div>
                </div>
              </div>
            </div>



            <div className="tab-pane fade" id="module2" role="tabpanel" aria-labelledby="module2-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="tab-cnt">
                    <h4>Business Builder Diagnostic Overview</h4>
                    <p className="hdng-16">Help your customers determine if they are running or managing a business with a high future success rate and with sustainable competitive advantage. Help your customers generate a plan to shift their business in the right direction! Your customer just completes the Business Builder survey and we will show you how to deliver the results! The Business Builder survey, while not complicated, will need them to focus for 30 minutes to ensure you establish the best plan for their business needs.</p>
                    <p className="hdng-16">Are you ready to take your customers business to the next level?</p>
                    <ul className="tools">
                      <li>Review the Business Builder Solution</li>
                      <li>Review the Business Builder Report</li>
                      <li>Review Business Builder Module Objectives</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-img">
                    <img src={Diagonstic_Overview} alt="Diagonstic_Overview" />
                  </div>
                </div>
              </div>
            </div>


            <div className="tab-pane fade" id="module3" role="tabpanel" aria-labelledby="module3-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="tab-cnt">
                    <h4>Improving Business Performance</h4>
                    <p className="hdng-16">Most organizations only realize 6% of their strategies potential value due to issues in development or execution. In this module we review the crucial aspects of target setting and performance tracking:</p>
                    <ul className="tools">
                      <li>Business Planning</li>
                      <li>Implementing a Growth Planning System</li>
                      <li>Review Business Planning Development Module</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-img">
                    <img src={Business_Performance} alt="Business_Performance" />
                  </div>
                </div>
              </div>
            </div>


            <div className="tab-pane fade" id="module4" role="tabpanel" aria-labelledby="module4-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="tab-cnt">
                    <h4>Product and Service Innovation</h4>
                    <p className="hdng-16">Innovation should be encouraged across the entire organization. Formal innovation targets should be set by your customer to ensure their long term relevance.</p>
                    <p className="hdng-16">The following strategies will be reviewed:</p>
                    <ul className="tools">
                      <li>Developing a Product Roadmap</li>
                      <li>Tracking and Managing Product Development</li>
                      <li>Reviewing Product Profitability</li>
                    </ul>
                    <p className="hdng-16">The innovation and product development process will focus on market development, product development and diversification.</p>
                    <p className="hdng-16">Innovation process is a formal process and should be measured to ensure continued growth.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-img">
                    <img src={Service_Innovation} alt="Service_Innovation" />
                  </div>
                </div>
              </div>
            </div>


            <div className="tab-pane fade" id="module5" role="tabpanel" aria-labelledby="module5-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="tab-cnt">
                    <h4>Customer Analysis</h4>
                    <p className="hdng-16">In order for your customer’s business to succeed you have to ensure they have a consistent number of new customers added whilst at the same time ensuring existing customers are retained. You need to develop a monthly sales plan targeting the required number of new customers with relevant product or service revenues linked to the overall strategy they need to achieve.</p>
                    <p className="hdng-16">The following activities and tools are reviewed:</p>
                    <ul className="tools">
                      <li>Convert sales and revenue targets into number of customers that need to be added monthly</li>
                      <li>Ensure that your customer retention is high and that you are not losing any customers monthly</li>
                      <li>Track profitability on product/service level ensuring that each are measured against a business case</li>
                      <li>Investigate customer service and sales process automation in order to increase end to end customer service levels</li>
                      <li>Measure customer service using the net promoter score system.</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-img">
                    <img src={Customer_Analysis} alt="Customer_Analysis" />
                  </div>
                </div>
              </div>
            </div>


            <div className="tab-pane fade" id="module6" role="tabpanel" aria-labelledby="module6-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="tab-cnt">
                    <h4>Market Analysis</h4>
                    <p className="hdng-16">What market are your customers targeting and how are they growing market share?</p>
                    <p className="hdng-16">Market development and penetration should form the core focus of all their growth activities. Growth should be actively targeted over and above the function of maintaining the current performance. Growth activities should be linked to their market opportunities and not resource availability.</p>
                    <p className="hdng-16">The following activities and tools are reviewed:</p>
                    <ul className="tools">
                      <li>Market Research Analysis</li>
                      <li>Customer Profiling</li>
                      <li>Market Segmentation</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-img">
                    <img src={Marketing_Analysis} alt="Marketing_Analysis" />
                  </div>
                </div>
              </div>
            </div>


            <div className="tab-pane fade" id="module7" role="tabpanel" aria-labelledby="module7-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="tab-cnt">
                    <h4>Resource Performance Analysis</h4>
                    <p className="hdng-16">The most important aspect of helping your customer execute their strategy is ensuring all their resources in the business is aligned to achieving its goals. If the people in their business are not 100% aligned to the business vision they will not be able to deliver effectively. The following activities will ensure you optimize your customers resource management:</p>
                    <ul className="tools">
                      <li>Develop a resource requirements plan in line with the overall strategy for your business</li>
                      <li>Ensure each position has a job description and targets linked to the overall plan</li>
                      <li>Link compensation and training to the relevant job descriptions</li>
                      <li>Measure performance of each employee and department monthly</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-img">
                    <img src={Performance_Analysis} alt="Performance_Analysis" />
                  </div>
                </div>
              </div>
            </div>


            <div className="tab-pane fade" id="module8" role="tabpanel" aria-labelledby="module8-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="tab-cnt">
                    <h4>Sales Planning</h4>
                    <p className="hdng-16">In order to effectively deliver and manage sales you have to measure sales performance weekly/monthly. For sales to deliver on targets there has to be a business specific sales process and sales funnel. The sales funnel should be aligned with the relevant sales software.</p>
                    <p className="hdng-16">The following activities and tools are reviewed:</p>
                    <ul className="tools">
                      <li>Sales Planning</li>
                      <li>Sales Forecasting</li>
                      <li>Sales Skills Analysis</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-img">
                    <img src={Sales_Planning} alt="Sales_Planning" />
                  </div>
                </div>
              </div>
            </div>


            <div className="tab-pane fade" id="module9" role="tabpanel" aria-labelledby="module9-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="tab-cnt">
                    <h4>Marketing and Lead Generation</h4>
                    <p className="hdng-16">In todays saturated markets helping to differentiate your customers business from their competitors is a must if they are to succeed. Competing is not just about lowering their prices but more about researching and understanding their competitors strategy and positioning their business for success. The following activities and tools are reviewed:</p>
                    <ul className="tools">
                      <li>Developing a lead acquisition model</li>
                      <li>Setting up marketing funnel conversions</li>
                      <li>Setting up lead scoring</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-img">
                    <img src={Marketing_Lead} alt="Marketing_Lead" />
                  </div>
                </div>
              </div>
            </div>


            <div className="tab-pane fade" id="module10" role="tabpanel" aria-labelledby="module10-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="tab-cnt">
                    <h4>Financial Planning</h4>
                    <p className="hdng-16">The following activities and tools are reviewed:</p>
                    <ul className="tools">
                      <li>Financial Planning Overview</li>
                      <li>Financial Performance Analysis</li>
                      <li>Income Statement Analysis</li>
                      <li>Balance Sheet Overview</li>
                      <li>Cash Flow Forecasting</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-img">
                    <img src={Finacial_Planning} alt="Finacial_Planning" />
                  </div>
                </div>
              </div>
            </div>


            <div className="tab-pane fade" id="module11" role="tabpanel" aria-labelledby="module11-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="tab-cnt">
                    <h4>Capability Analysis and Planning</h4>
                    <p className="hdng-16">For your customers business to grow it must be able to consistently deliver high quality product or services. In order to do this the right capabilities and competencies needs to be in place.</p>
                    <p className="hdng-16">The following activities and tools are reviewed:</p>
                    <ul className="tools">
                      <li>Full Competencies Analysis and Planning</li>
                      <li>Capability Assessment</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-img">
                    <img src={Capability_Analysis} alt="Capability_Analysis" />
                  </div>
                </div>
              </div>
            </div>


            <div className="tab-pane fade" id="module12" role="tabpanel" aria-labelledby="module12-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="tab-cnt">
                    <h4>Implementing Governance</h4>
                    <p className="hdng-16">Corporate governance is as vital to SMEs as it is for large corporations. Implementation of cost-effective and simple mechanisms and processes will establish structure, improve operations, contribute to business growth and ensure effective compliance with the law.</p>
                    <p className="hdng-16">The following activities and tools are reviewed:</p>
                    <ul className="tools">
                      <li>King Overall Review</li>
                      <li>King IV Principles</li>
                      <li>King Compliance</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-img">
                    <img src={Implementing_Governace} alt="Implementing_Governace" />
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </section>






      {/* Modules Section Ends */}




      {/* Book Demo Section Starts */}

      <section className="book-block">
        <div className="container">
          <div className="consulting-hdngs" data-aos="fade-right">
            <h2 className="sec-hdng">Book a Demo today!</h2>
          </div>
          <BookForm />
        </div>
      </section>

      {/* Book Demo Section Ends */}


    </div>

  )
}


export default Benefits