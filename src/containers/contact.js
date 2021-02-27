import React from 'react'
import ContactForm from '../Components/ContactForm'

function Contact() {
    return (
        <div>
            <section className="inner-banner bg-light">
                <div className="container">
                    <div className="row align-items-center intro-title">
                        <div className="col-12">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a href="index.html"> <i className="fas fa-home"></i> </a></li>
                                <li className="breadcrumb-item active"> <i className="fas fa-chevron-right"></i> <span> contact-us</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="space-ptb half-overlay left-position position-relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="contact-info">
                                <div className="section-title text-sm-left text-center">
                                    <h3>Get In Touch With Us</h3>
                                    <p>The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan.</p>
                                </div>

                                <div className="feature-item d-sm-flex d-block text-sm-left text-center">
                                    <div className="feature-item-icon mb-sm-0 mb-4">
                                        <i className="flaticon-location"></i>
                                    </div>
                                    <div className="feature-item-content">
                                        <h4 className="feature-item-title">Address</h4>
                                        <span>6580 Allison Turnpike Creminfort, AL 32808-4509</span>
                                    </div>
                                </div>

                                <div className="feature-item d-sm-flex d-block text-sm-left text-center">
                                    <div className="feature-item-icon mb-sm-0 mb-4">
                                        <i className="flaticon-call"></i>
                                    </div>
                                    <div className="feature-item-content">
                                        <h4 className="feature-item-title">Phone</h4>
                                        <span>+0123 456 789</span>
                                        <span>+704 279 1249</span>
                                    </div>
                                </div>

                                <div className="feature-item mb-0 d-sm-flex d-block text-sm-left text-center">
                                    <div className="feature-item-icon mb-sm-0 mb-4">
                                        <i className="flaticon-email"></i>
                                    </div>
                                    <div className="feature-item-content">
                                        <h4 className="feature-item-title">Email</h4>
                                        <span>support@medileaf.com</span>
                                        <span>letstalk@medileaf.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 mt-md-0 mt-5">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-12">
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96873.54747598754!2d-74.01503722010821!3d40.64535309479206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1583241765545!5m2!1sen!2sin" className="map-frame"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;