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

function Overview() {
    return (
        <div className="overview-page">

            {/* Overview Section Starts */}

            <section className="overview-banner-block">
                <div className="container">
                    <div className="overview-block-content">
                        <h2 className="sec-hdng">Goal Setting and engagement management</h2>
                        <p className="hdng-16">Get access to 6 best in practice business diagnostic and growth reports and tools. The platform enables you to structure your customer enagement into monthly modules providing both you and your client with instructions, tools and videos. Your customer is given a login to develop himself and track program objectives.</p>
                        <a href="#" class="custom-btn"><span>Book Demo!</span></a>
                        <a href="#" class="custom-btn-2"><span>Prices</span></a>
                        <img src="images/overview.png" alt="" />
                    </div>
                </div>
            </section>

            {/* Overview Section Ends */}



            {/* Book Online Section Starts */}

            <section className="platform-block">
                <div className="container">
                    <div className="row platform-1">
                        <div className="col-md-6">
                            <div className="platform-txt">
                                <h2 className="hdng">Business Diagnostic Platform</h2>
                                <p className="hdng-16">Each of the diagnostic programs come with Goal setting, content, videos and all the tools you will need to work with your customer on a month to month basis.</p>
                                <p className="hdng-16">The Goals module enables you to set and manage improvement actions inline with the business diagnostic KPI's</p>
                                <a href="#" class="custom-btn"><span>Book Demo!</span></a>
                                <a href="/pricing" class="custom-btn-2"><span>Prices</span></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo tab-gd" src="images/over-img1.png" alt="" />
                                <img className="gdxo" src="images/circle-shape.png" alt="" />
                            </div>
                        </div>
                        <img className="vector gd" src="images/right-arrow.png" alt="" />
                    </div>

                    <div className="row platform-2">
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src="images/over-img2.png" alt="" />
                                <img className="gdxo" src="images/circle-shape.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="platform-txt">
                                <h2 className="hdng">Content Management</h2>
                                <p className="hdng-16">Each module provides access to report specific videos explaining what the topics are that you will be working with the customer.</p>
                                <p className="hdng-16">Each video is available for your customer to watch and prepare for your monthly coaching or consulting sessions. This ensures that your customer has knowledge of the module being covered and is able to work on module deliverables in the session</p>
                                <a href="#" class="custom-btn"><span>Book Demo!</span></a>
                                <a href="/pricing" class="custom-btn-2"><span>Prices</span></a>
                            </div>
                        </div>
                        <img className="vector dg" src="images/left-arrow.png" alt="" />
                    </div>

                    <div className="row platform-1">
                        <div className="col-md-6">
                            <div className="platform-txt">
                                <h2 className="hdng">Specialised Tools</h2>
                                <p className="hdng-16">Each module has it own specialised tools that enables you to work with the customer in your monthly sessions. Each tool provides clear improvement steps for your customer to implement.</p>
                                <p className="hdng-16">These tools consists of module specific activities that enable deeper analysis and customer engagement. The tools also provide further actions to complete</p>
                                <a href="#" class="custom-btn"><span>Book Demo!</span></a>
                                <a href="/pricing" class="custom-btn-2"><span>Prices</span></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src="images/over-img3.png" alt="" />
                                <img className="gdxo" src="images/circle-shape.png" alt="" />
                            </div>
                        </div>
                        <img className="vector gd" src="images/right-arrow.png" alt="" />
                    </div>

                    <div className="row platform-2">
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src="images/over-img4.png" alt="" />
                                <img className="gdxo" src="images/circle-shape.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="platform-txt">
                                <h2 className="hdng">Business Gap Analysis</h2>
                                <p className="hdng-16">There are 6 different business diagnostic analysis and reporting modules. Each providing specific business gap analysis and improvement plans.</p>
                                <p className="hdng-16">Increase SME revenue capability & Generate Profits Focus on overall critical business growth areas Ensure governance compliance and return on investment for shareholders</p>
                                <a href="#" class="custom-btn"><span>Book Demo!</span></a>
                                <a href="/pricing" class="custom-btn-2"><span>Prices</span></a>
                            </div>
                        </div>
                        <img className="vector dg" src="images/left-arrow.png" alt="" />
                    </div>

                    <div className="row platform-1">
                        <div className="col-md-6">
                            <div className="platform-txt">
                                <h2 className="hdng">Business Valuation</h2>
                                <p className="hdng-16">We will provide you with a detailed valuation and strategic analysis to assist you and your customer with building a successful and scalable business.</p>
                                <p className="hdng-16">Based on their Analysis Score we are able to calculate the value of their business today and then estimate the value that you can add by working together on the development.</p>
                                <a href="#" class="custom-btn"><span>Book Demo!</span></a>
                                <a href="/pricing" class="custom-btn-2"><span>Prices</span></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo tab-gd" src="images/over-img5.png" alt="" />
                                <img className="gdxo" src="images/circle-shape.png" alt="" />
                            </div>
                        </div>
                        <img className="vector gd" src="images/right-arrow.png" alt="" />
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src="images/over-img6.png" alt="" />
                                <img className="gdxo" src="images/circle-shape.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="platform-txt">
                                <h2 className="hdng">Ultimate Consultant Guide</h2>
                                <p className="hdng-16">Gain access to our extensive management consultant resource platform. The platform had an advanced search functionality that covers 100s of topics providing you with information and easy-to-follow instructions. Deliver advanced business diagnostic and consulting services like a professional in no time</p>
                                <a href="#" class="custom-btn"><span>Book Demo!</span></a>
                                <a href="/pricing" class="custom-btn-2"><span>Prices</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Book Online Section Ends */}




            {/* Logo Slder Section Ends */}

            <section className="logo-carousel">
                <div className="container">
                    <h2 className="sec-hdng">Leverage 100's of APPs to further scale your consulting business</h2>
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






        </div>

    )
}


export default Overview