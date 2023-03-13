import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Home() {
    return (
        <div className="home-page">

            {/* Banner Section Starts */}

            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner-content">
                                <h4>Rapid Enterprise Development</h4>
                                <h1>Consulting Business Growth Platform</h1>
                                <p>Start or Grow your professional services business</p>
                                <a href="#" className="custom-btn"><span>Platform Benefits</span></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src="images/banner-img.png" alt="" />
                                <img className="gdxo" src="images/banner-img-bg.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner Section Ends */}

            {/* Curve Section Starts */}

            <section className="curve">
                <div className="container">
                    <div className="curve-content"></div>
                    <div className="curve-text">
                        <p>Schedule a meeting and see how RED3SIXTY will help you through a guided tour.</p>
                        <a href="#" className="custom-btn"><span>Book Now</span></a>
                    </div>
                </div>
            </section>

            {/* Curve Section Ends */}


            {/* About Section Starts */}

            <section className="about-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-block-content">
                                <h4 className="small-hdn">ABOUT RED3SIXTY</h4>
                                <h2 className="hdng">Whether you are a Consultant, Executive Coach or Accountant, RED3SIXTY was designed with you in mind</h2>
                                <p className="hdng-16">We have developed business growth platforms aimed at helping you run diagnostics and determine where your customer needs to focus in order to grow their business. The systems help predict your customer growth and develop plans delivering up to 26% more profits in their business.</p>
                                <p className="hdng-16">The coaching and consulting platform make starting and or scaling your professional services business easier.</p>
                                <p className="hdng-16">The platform provides a one-stop consulting solution enabling easy customer business diagnostics, development support, and much more!</p>
                                <a href="#" class="custom-btn"><span>Platform Benefits</span></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-block-image">
                                <img src="images/about-sec.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section Ends */}


            {/* Video Section Starts */}

            <section className="home-points">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="points-video">
                                <video autoplay="autoplay" class="myVideo" muted="muted">
                                    <source src="images/dreamstime.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="points-content ">
                                <ul className="site-ul">
                                    <li><img src="icons/check.svg" alt="" />Become a successful business consultant</li>
                                    <li><img src="icons/check.svg" alt="" />Generate recurring income by providing business consulting services</li>
                                    <li><img src="icons/check.svg" alt="" />Don’t just trade hours for money but sell proprietary business diagnostics</li>
                                    <li><img src="icons/check.svg" alt="" />Gain access to world class business development tools</li>
                                    <li><img src="icons/check.svg" alt="" />Instantly pinpoint business growth opportunities for your clients</li>
                                    <li><img src="icons/check.svg" alt="" />Generate a detailed customer business growth blueprint</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section Ends */}


            {/* Consulting Section Starts */}

            <section className="consulting-block">
                <div className="container">
                    <div className="consulting-hdngs">
                        <h4 className="small-hdn">UPDATES & RESOURCES</h4>
                        <h2 className="sec-hdng">Start your consulting business at a fraction of the cost of a franchise</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="consulting-video">
                                <h5 className="hdng-h5">To help you generate the revenue you get:</h5>
                                <ul className="site-ul">
                                    <li><span className="image-circle"><img src="icons/counslt-ic-1.svg" alt="" /></span>6 Enterprise Diagnostics</li>
                                    <li><span className="image-circle"><img src="icons/counslt-ic-2.svg" alt="" /></span>6 Detailed Benchmark Reports</li>
                                    <li><span className="image-circle"><img src="icons/counslt-ic-3.svg" alt="" /></span>KPI Definition And Tracking</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src="images/counslt-img.png" alt="" />
                                <img className="gdxo" src="images/banner-img-bg.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="consulting-content">
                                <h5 className="hdng-h5">Plus gain access to:</h5>
                                <ul className="site-ul">
                                    <li><span className="image-circle"><img src="icons/counslt-ic-4.svg" alt="" /></span>Improvement Actions Tracking</li>
                                    <li><span className="image-circle"><img src="icons/counslt-ic-5.svg" alt="" /></span>1800 hours Training Videos</li>
                                    <li><span className="image-circle"><img src="icons/counslt-ic-6.svg" alt="" /></span>45 Custom Operations Worksheets</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Section Ends */}


            {/* Consulting Section Starts */}

            <section className="platform-block">
                <div className="container">
                    <div className="row platform-1">
                        <div className="col-md-6">
                            <div className="platform-txt">
                                <h4 className="small-hdn">ENTERPRISE GROWTH PLATFORM</h4>
                                <h2 className="hdng">Platform Demo</h2>
                                <p className="hdng-16">In this call, we will show you how easy it is to use the platform to scale and grow your consulting or coaching business. The platform is designed to help you generate revenue from day one! No need to commit and no sales pitch!</p>
                                <a href="#" class="custom-btn"><span>Book Now</span></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src="images/platform-img1.png" alt="" />
                                <img className="gdxo" src="images/circle-shape.png" alt="" />
                            </div>
                        </div>
                        <img className="vector gd" src="images/right-arrow.png" alt="" />
                    </div>

                    <div className="row platform-2">
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src="images/platform-img2.png" alt="" />
                                <img className="gdxo" src="images/circle-shape.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="platform-txt">
                                <h4 className="small-hdn">ENTERPRISE GROWTH PLATFORM</h4>
                                <h2 className="hdng">Earning Potential</h2>
                                <p className="hdng-16">In this call, we will take you through the process of calculating what revenue you can earn from day one. We will show you the products and services you get access to help your customers grow their businesses. Book now and start earning consulting or coaching revenue the next day!</p>
                                <a href="#" class="custom-btn"><span>Book Now</span></a>
                            </div>
                        </div>
                        <img className="vector dg" src="images/left-arrow.png" alt="" />
                    </div>

                    <div className="row platform-3">
                        <div className="col-md-6">
                            <div className="platform-txt">
                                <h4 className="small-hdn">ENTERPRISE GROWTH PLATFORM</h4>
                                <h2 className="hdng">Opportunity Review</h2>
                                <p className="hdng-16">In this call, we take you through the entire process step by step. From registering on the platform, training, and delivering your first consulting or coaching engagement. We will show you the cost of the platform, what you can earn and how to deliver.</p>
                                <a href="#" class="custom-btn"><span>Book Now</span></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src="images/platform-img3.png" alt="" />
                                <img className="gdxo" src="images/circle-shape.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Section Ends */}


            {/* Logo Slder Section Ends */}

            <section className="logo-carousel">
                <div className="container">
                    <Carousel responsive={responsive} infinite={true}>
                        <img src="images/logo-1.jpg" alt="" />
                        <img src="images/logo-2.jpg" alt="" />
                        <img src="images/logo-3.jpg" alt="" />
                        <img src="images/logo-4.jpg" alt="" />
                        <img src="images/logo-5.jpg" alt="" />
                        <img src="images/logo-6.jpg" alt="" />
                    </Carousel>
                </div>
            </section>
            {/* Logo Slder Section Ends */}


            {/* Diagnostic Section Starts */}

            <section className="diagno-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="diagno-block-content">
                                <h4 className="small-hdn">RED3SIXTY</h4>
                                <h2 className="hdng">Diagnostic Platform</h2>
                                <p className="hdng-16">Gain access to our RED3SIXTY business diagnostic platform ensuring you are certified and ready to provide the diagnostic solutions to your customers. The platform provides a structured customer acquisition process followed by an automatic business diagnostic report generation aimed at scaling your consulting practice.</p>
                                <a href="#" class="custom-btn"><span>Find Out More</span></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="diagno-block-image">
                                <img src="images/diagnostic-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diagnostic Section Ends */}


            {/* Coaches Section Starts */}

            <section className="coaches-block">
                <div className="container">
                    <div className="consulting-hdngs">
                        <h2 className="sec-hdng">What Coaches and Consultants say!</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="coaches-box">
                                <img src="images/coach1.png" alt="" />
                                <p className="hdng-16">“Start your consulting business at a fraction of the cost of a franchise”</p>
                                <h4 className="box-hdn">Save 1000’s by choosing this low-cost option and get all the benefits of a franchise</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="coaches-box">
                                <img src="images/coach2.png" alt="" />
                                <p className="hdng-16">“Get everything you need to start generating sales and earning an income”</p>
                                <h4 className="box-hdn">Get access to systems and training enabling you to start trading in month 1</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="coaches-box">
                                <img src="images/coach3.png" alt="" />
                                <p className="hdng-16">“Low monthly cost and risk-free commitment”</p>
                                <h4 className="box-hdn">No need to overcommit, the low monthly fee ensures you can easily break even in month 2</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coaches Section Ends */}

            {/* Book Demo Section Starts */}

            <section className="book-block">
                <div className="container">
                    <div className="consulting-hdngs">
                        <h2 className="sec-hdng">Book a Demo today!</h2>
                    </div>
                </div>
            </section>

            {/* Book Demo Section Ends */}


        </div>

    )
}


export default Home