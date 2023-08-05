import React from 'react';
import { NavLink } from "react-router-dom";
import Star from './images/star.svg';

const ServiceTab = () => {

    return (


        <div class="nav-tab">
            <nav>
                <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="pricing1-tab" data-bs-toggle="tab" data-bs-target="#pricing1" type="button" role="tab" aria-controls="pricing1" aria-selected="true">Basic Websites without hosting</button>
                    <button class="nav-link" id="pricing2-tab" data-bs-toggle="tab" data-bs-target="#pricing2" type="button" role="tab" aria-controls="pricing2" aria-selected="false">Business Websites with hosting</button>
                    <button class="nav-link" id="pricing3-tab" data-bs-toggle="tab" data-bs-target="#pricing3" type="button" role="tab" aria-controls="pricing3" aria-selected="false">E-commerce / Online Shop</button>
                    <button class="nav-link" id="pricing4-tab" data-bs-toggle="tab" data-bs-target="#pricing4" type="button" role="tab" aria-controls="pricing4" aria-selected="true">Directory & Marketplace Websites</button>
                    <button class="nav-link" id="pricing5-tab" data-bs-toggle="tab" data-bs-target="#pricing5" type="button" role="tab" aria-controls="pricing5" aria-selected="false">Custom Websites</button>
                </div>

            </nav>
            <div class="tab-content col3-tab" id="nav-tabContent">
                <div class="tab-pane fade active show" id="pricing1" role="tabpanel" aria-labelledby="pricing1-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tabservice-list">
                                <h3 class="hdng-h3">Basic Cms Packages</h3>
                                <h4 class="small-hdn">Unpublished - Without Hosting.</h4>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Cms Basic 1-3 Pager</h4>
                                    <h5>$50 + vat.</h5>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Cms Basic 4-5 Pager</h4>
                                    <h5>$50 + vat.</h5>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Extra Pages, Per Page</h4>
                                    <h5>$50 + vat.</h5>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Extra Work At Per Hour Fee</h4>
                                    <h5>$50 + vat.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tabservice-overview">
                                <h3 class="hdng-h3">Overview</h3>
                                <h4 class="small-hdn">Websites You Can Manage Yourself:</h4>
                                <ul className="site-ul">
                                    <li>Our BASIC CMS PACKAGES are aimed at student start-ups.</li>
                                    <li>WordPress 3rd party template based.</li>
                                    <li>Fully responsive from Desktop to Smartphone.</li>
                                    <li>Login and update your own website.</li>
                                </ul>
                                <NavLink to="#" className="custom-btn"><span>Request A Quote</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pricing2" role="tabpanel" aria-labelledby="pricing2-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tabservice-list">
                                <h3 class="hdng-h3">Cms Packages</h3>
                                <h4 class="small-hdn">With Hosting.</h4>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Cms Business 1-5 Page</h4>
                                    <h5>$50 + vat.</h5>
                                    <p>(Micro Business hosting package included 1 year)</p>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Cms Business 6-8 Page</h4>
                                    <h5>$50 + vat.</h5>
                                    <p>(Micro Business hosting package included 1 year)</p>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Cms Business 9-12 Page</h4>
                                    <h5>$50 + vat.</h5>
                                    <p>(Micro Business hosting package included 1 year)</p>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Extra Page / Blog Page</h4>
                                    <h5>$50 + vat.</h5>
                                    <p>Price per page.</p>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Extra Work At Per Hour Fee</h4>
                                    <h5>$50 + vat.</h5>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Additional Disk Space</h4>
                                    <h5>$50 + vat. per 1 GIG per month</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tabservice-overview">
                                <h3 class="hdng-h3">Overview</h3>
                                <h4 class="small-hdn">Websites You Can Manage Yourself:</h4>
                                <ul className="site-ul">
                                    <li>BUSINESS CMS website design.</li>
                                    <li>WordPress 3rd party template based.</li>
                                    <li>Fully responsive from Desktop to Smartphone.</li>
                                    <li>Login and update your own website.</li>
                                    <li>Micro Business hosting package (coza domain, emails and hosting) included for one year at no price difference.</li>
                                </ul>
                                <NavLink to="#" className="custom-btn"><span>Request A Quote</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pricing3" role="tabpanel" aria-labelledby="pricing3-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tabservice-list">
                                <h3 class="hdng-h3">E-comm Cms Packages</h3>
                                <h4 class="small-hdn">Online Shop With Hosting For One Year At No Price Difference.</h4>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>E-comm Basic Package</h4>
                                    <h5>$50 + vat.</h5>
                                    <p>Preloaded with up to 5 Products, 1 Category and 1 Payment Gateway. You can add or remove as many as you like yourself.</p>
                                    <p>Up to 4 information pages.</p>
                                    <p>Micro Business hosting package included 1 year.</p>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>E-comm Standard Package</h4>
                                    <h5>$50 + vat.</h5>
                                    <p>Preloaded with up to 30 Products, 10 Categories and 1 Payment Gateway. You can add or remove as many as you like yourself.</p>
                                    <p>Up to 5 information pages.</p>
                                    <p>Business hosting package included 1 year.</p>
                                    <p>Zoom training.</p>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>E-comm Advance Package</h4>
                                    <h5>$50 + vat.</h5>
                                    <p>Preloaded with up to 100 Products, 30 Categories and 1 Payment Gateway. You can add or remove as many as you like yourself. Up to 6 information pages.</p>
                                    <p>Business hosting package included 1 year.</p>
                                    <p>Zoom training. Advanced Theme options.</p>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Additional Product / Category Upload</h4>
                                    <h5>$50 + vat.</h5>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Extra Page / Blog Page</h4>
                                    <h5>$50 + vat.</h5>
                                    <p>Price per page.</p>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Extra Work At Per Hour Fee</h4>
                                    <h5>$50 + vat.</h5>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Additional Disk Space</h4>
                                    <h5>$50 + vat. per 1 GIG per month</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tabservice-overview">
                                <h3 class="hdng-h3">Overview</h3>
                                <h4 class="small-hdn">Websites You Can Manage Yourself:</h4>
                                <ul className="site-ul">
                                    <li>WOOCOMMERCE (Wordpress) website design.</li>
                                    <li>Add to cart, check out and pay.</li>
                                    <li>Payment gateway integration. Eg. PayFast, PayPal, Amazon Pay and many more.</li>
                                    <li>Shipping module ready. Eg. Aramex, Collivery.net, Courier Guy and many more.</li>
                                    <li>Platform allows unlimited products. (First 5, 30 or 100 included within product fee as stated)</li>
                                    <li>WordPress 3rd party template based.</li>
                                    <li>Fully responsive from Desktop to Smartphone.</li>
                                    <li>Micro Business hosting package / Business hosting package included for one year at no price difference.</li>
                                </ul>
                                <NavLink to="#" className="custom-btn"><span>Request A Quote</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pricing4" role="tabpanel" aria-labelledby="pricing4-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tabservice-list">
                                <h3 class="hdng-h3">Directory & Marketplace Cms Packages</h3>
                                <h4 class="small-hdn">With Hosting For One Year At No Price Difference.</h4>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Directory Listing Base Package</h4>
                                    <h5>$50 + vat. (incl. hosting)</h5>
                                    <p>Preloaded with up to 15 Listings and 5 Categories. You can add or remove as many as you like yourself.</p>
                                    <p>Browse listings on a Classifieds style website.</p>
                                    <p>Up to 4 information pages.</p>
                                    <p>Search function.</p>
                                    <p>Business hosting package included 1 year.</p>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Directory Listing Standard Package</h4>
                                    <h5>$50 + vat. (incl. hosting)</h5>
                                    <p>Preloaded with up to 30 Listings and 10 Categories. You can add or remove as many as you like yourself.</p>
                                    <p>Browse listings on a Classifieds style website.</p>
                                    <p>Up to 5 information pages.</p>
                                    <p>Search function.</p>
                                    <p>Business hosting package included 1 year.</p>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Directory Listing Advance Package</h4>
                                    <h5>$50 + vat. (incl. hosting)</h5>
                                    <p>Preloaded with up to 60 Listings and 20 Categories. You can add or remove as many as you like yourself.</p>
                                    <p>Browse listings on a Classifieds style website.</p>
                                    <p>Up to 6 information pages.</p>
                                    <p>Search function.</p>
                                    <p>Business hosting package included 1 year.</p>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Learner Management System (Lms) Standard Package</h4>
                                    <h5>$50 + vat. (incl. hosting)</h5>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Extra Page / Blog Page</h4>
                                    <h5>$50 + vat.</h5>
                                    <p>Price per page.</p>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Extra Work At Per Hour Fee</h4>
                                    <h5>$50 + vat.</h5>
                                </div>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Additional Disk Space</h4>
                                    <h5>$50 + vat. per 1 GIG per month</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tabservice-overview">
                                <h3 class="hdng-h3">Overview</h3>
                                <h4 class="small-hdn">Websites You Can Manage Yourself:</h4>
                                <ul className="site-ul">
                                    <li> DIRECTORY & MARKETPLACE CMS website design.</li>
                                    <li>Advanced search function.</li>
                                    <li>Classified style websites.</li>
                                    <li>Multi vendor functionality for Marketplace packages.</li>
                                    <li>WordPress 3rd party template based.</li>
                                    <li>Fully responsive from Desktop to Smartphone.</li>
                                    <li>Business hosting package included for one year at no price difference.</li>
                                </ul>
                                <NavLink to="#" className="custom-btn"><span>Request A Quote</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pricing5" role="tabpanel" aria-labelledby="pricing5-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tabservice-list">
                                <h3 class="hdng-h3">Custom / Advance Package</h3>
                                <div className="tab-service">
                                    <img src={Star} alt="Star" />
                                    <h4>Custom Package</h4>
                                    <h5>POA</h5>
                                    <p>We are able to build a variety of complex websites to suit your needs. Our process is streamlined, well executed, and focused on end results with constant communication throughout the process. Simply complete the form below and we will have an estimate as well as an overview of roll out for you within 24-52 hours. If you then wish, we can book a consult for final briefing before we prepare a formal quote for your review.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tabservice-overview">
                                <h3 class="hdng-h3">Overview</h3>
                                <h4 class="small-hdn">Custom Website Development:</h4>
                                <ul className="site-ul">
                                    <li>Advance E-commerce.</li>
                                    <li>Property websites.</li>
                                    <li>Business directories.</li>
                                    <li>Classified directory websites.</li>
                                    <li>Job Portal websites.</li>
                                    <li>Social media websites.</li>
                                    <li>Dating websites.</li>
                                    <li>Dealership websites.</li>
                                    <li>Auction type websites.</li>
                                    <li>High End websites.</li>
                                    <li>Real time websites.</li>
                                    <li>News websites.</li>
                                    <li>Broadcasting websites.</li>
                                    <li>Music websites.</li>
                                    <li>MLM Web Applications.</li>
                                    <li>And more custom.</li>
                                </ul>
                                <NavLink to="#" className="custom-btn"><span>Request A Quote</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ServiceTab