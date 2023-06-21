import React from 'react';
import { useEffect } from 'react';
import Right_Arrow from '../assets/images/right-arrow.png';
import Left_Arrow from '../assets/images/left-arrow.png';
import Circle_Shape from '../assets/images/circle-shape.png';
import Download1 from '../assets/images/download1.png';
import Download2 from '../assets/images/download2.png';
import Download3 from '../assets/images/download3.png';
import Download4 from '../assets/images/download4.png';
import Download5 from '../assets/images/download5.png';
import PDF1 from '../assets/pdf/introduction-to-red3sixty.pdf';
import PDF2 from '../assets/pdf/red3sixty-value-proposition.pdf';
import PDF3 from '../assets/pdf/everything-the-platform-has-to-offer.pdf';
import PDF4 from '../assets/pdf/diagnostic-report-example.pdf';
import PDF5 from '../assets/pdf/three-year-business-plan.pdf';
import { lazy, Suspense } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const LazyYouTube = lazy(() => import('react-youtube'));

function Download() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="download-page">

            {/* Download Section Starts */}

            <section className="platform-block">
                <div className="container">
                    <div className="download-txt" data-aos="fade-up">
                        <h2 className="sec-hdng">Updates & Resources</h2>
                        <p className="hdng-16">Start your consulting business at a fraction of the cost of a franchise</p>
                    </div>
                    <div className="row platform-1">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="platform-txt">
                                <h2 className="hdng">Introduction to RED3SIXTY</h2>
                                <p className="hdng-16">Are you a coach, consultant or ex corporate employee? This short summary will show you if this is the right solution for you and what the earning potential is in year one.</p>
                                <a href={PDF1} className="custom-btn" download><span>Download</span></a>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="banner-image">
                                <img className="abxo tab-gd" src={Download1} alt="Download1" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <img className="vector gd" src={Right_Arrow} alt="Right_Arrow" data-aos="fade-up" />
                    </div>

                    <div className="row platform-2">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="banner-image">
                                <img className="abxo" src={Download2} alt="Download2" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="platform-txt">
                                <h2 className="hdng">RED3SIXTY Value Proposition</h2>
                                <p className="hdng-16">Find out exactly what is involved in the platform and how that can help you scale or grow your consulting or executive coaching business.</p>
                                <a href={PDF2} className="custom-btn" download><span>Download</span></a>
                            </div>
                        </div>
                        <img className="vector dg" src={Left_Arrow} alt="Left_Arrow" data-aos="fade-up" />
                    </div>

                    <div className="row platform-1">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="platform-txt">
                                <h2 className="hdng">Everything the platform has to offer</h2>
                                <p className="hdng-16">In this detailed download we share with you the full platform functionality including all diagnostics and reports. We also share development module approaches.</p>
                                <a href={PDF3} className="custom-btn" download><span>Download</span></a>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="banner-image">
                                <img className="abxo" src={Download3} alt="Download3" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <img className="vector gd" src={Right_Arrow} alt="Right_Arrow" data-aos="fade-up" />
                    </div>

                    <div className="row platform-2">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="banner-image">
                                <img className="abxo" src={Download4} alt="Download4" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="platform-txt">
                                <h2 className="hdng">Diagnostic Report Example</h2>
                                <p className="hdng-16">Download now and see what the diagnostic report, that you will be able to generate for your customers, looks like that you will be able to generate for your customers. The report details gap analysis and includes improvement plans.</p>
                                <a href={PDF4} className="custom-btn" download><span>Download</span></a>
                            </div>
                        </div>
                        <img className="vector dg" src={Left_Arrow} alt="Left_Arrow" data-aos="fade-up" />
                    </div>

                    <div id="plans" className="row platform-1">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="platform-txt">
                                <h2 className="hdng">Three Year Business Plan</h2>
                                <p className="hdng-16">Download a full three year plan detailing the industry, market and revenue that you can generate by incorporating the platform into your business tool set</p>
                                <a href={PDF5} className="custom-btn" download><span>Download</span></a>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="banner-image">
                                <img className="abxo tab-gd" src={Download5} alt="Download5" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Section Ends */}


            {/* Download Video Section Start */}

            <section className="download-video">
                <div className="container">
                    <h2 className="sec-hdng">Demo Videos</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="video-block-download">
                                <Suspense fallback={<div>Loading...</div>}>
                                <LazyLoadComponent>
                                  <LazyYouTube
                                    videoId="S9PbZj0IMiE"
                                    opts={{ width: '100%', height: '250' }}
                                  />
                                </LazyLoadComponent>
                              </Suspense>
                                <h5 className="hdng-h5">Quick Tour</h5>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="video-block-download">
                                <Suspense fallback={<div>Loading...</div>}>
                                <LazyLoadComponent>
                                  <LazyYouTube
                                    videoId="xx5FP_kjnqk"
                                    opts={{ width: '100%', height: '250' }}
                                  />
                                </LazyLoadComponent>
                              </Suspense>
                                <h5 className="hdng-h5">How To Sign Up</h5>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="video-block-download">
                                <Suspense fallback={<div>Loading...</div>}>
                                <LazyLoadComponent>
                                  <LazyYouTube
                                    videoId="Rh-Uy4pZ0jI"
                                    opts={{ width: '100%', height: '250' }}
                                  />
                                </LazyLoadComponent>
                              </Suspense>
                                <h5 className="hdng-h5">Business Owner Benefits</h5>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="video-block-download">
                                <Suspense fallback={<div>Loading...</div>}>
                                <LazyLoadComponent>
                                  <LazyYouTube
                                    videoId="SHwP2HB3JPM"
                                    opts={{ width: '100%', height: '250' }}
                                  />
                                </LazyLoadComponent>
                              </Suspense>
                                <h5 className="hdng-h5">Consulting Platform</h5>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="video-block-download">
                                <Suspense fallback={<div>Loading...</div>}>
                                <LazyLoadComponent>
                                  <LazyYouTube
                                    videoId="XxeomqRDunU"
                                    opts={{ width: '100%', height: '250' }}
                                  />
                                </LazyLoadComponent>
                              </Suspense>
                                <h5 className="hdng-h5">Business Builder Certified Consultant</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Video Section Ends */}

        </div>

    )
}


export default Download