import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

function Footer() {
    return (
        <footer className="space-pt bg-light footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/" className="footer-logo"><img className="img-fluid" src={logo} alt="" /></NavLink>
                        <p>There’s nothing in this story to make us think he was dreaming about riches.</p>
                        <div className="social-icon mt-3 mt-md-5">
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-github"></i></a></li>
                                <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                        <h6 className="text-primary">Useful Links</h6>
                        <div className="footer-useful-List">
                            <ul className="list-unstyled mb-0">
                                <li><a href="about-us.html">About</a></li>
                                <li><a href="team.html">Team</a></li>
                                <li><a href="before-after.html">Before After</a></li>
                                <li><a href="cost-calculator.html">Cost Calculator</a></li>
                                <li><a href="working-hours.html">Working Hours</a></li>
                            </ul>
                            <ul className="list-unstyled mb-0">
                                <li><a href="appointment.html">Appointment</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="timetable.html">Timetable</a></li>
                                <li><a href="departments.html">Departments</a></li>
                                <li><a href="contact-us.html">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                        <h6 className="text-primary">Our Newsletter</h6>
                        <div className="footer-contact-info">
                            <ul className="list-unstyled mb-0">
                                <li><i className="fas fa-fw fa-map-marker-alt text-primary"></i><span>594 E. Whitemarsh Street Mchenry, IL 60050</span></li>
                                <li><i className="fas fa-fw fa-phone-alt text-primary"></i><span>0123-456-789</span></li>
                            </ul>
                        </div>
                        <div className="footer-subscribe">
                            <p>Sign up to our newsletter to get the latest news and offers.</p>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <button type="submit" className="btn btn-primary"><i className="far fa-paper-plane"></i></button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                        <h6 className="text-primary">Opening Hours</h6>
                        <div className="opening-time">
                            <ul className="list-unstyled">
                                <li><i className="far fa-clock pr-1 text-primary"></i> Mon - Tue<span className="float-right">08:30 - 18:30</span></li>
                                <li><i className="far fa-clock pr-1 text-primary"></i> Wed- Thu<span className="float-right">08:30 - 18:30</span></li>
                                <li><i className="far fa-clock pr-1 text-primary"></i> Friday<span className="float-right">08:30 - 18:30</span></li>
                                <li><i className="far fa-clock pr-1 text-primary"></i> Saturday<span className="float-right">08:30 - 18:30</span></li>
                                <li><i className="far fa-clock pr-1 text-primary"></i> Sunday<span className="float-right">09:30 - 15:30</span></li>
                                <li className="text-primary">Emergency<span className="float-right">24 hours</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center copyright text-md-left mb-3 mb-md-0">
                            <p className="mb-0"> &copy; Copyright <span id="copyright"></span> <a href="index.html"> medileaf </a> All Rights Reserved</p>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <div className="">
                                <ul className="list-unstyled list-inline mb-0">
                                    <li className="list-inline-item mb-0"><a href="terms-and-conditions.html">Terms & Conditions</a></li>
                                    <li className="list-inline-item mb-0"><a href="#">FAQ</a></li>
                                    <li className="list-inline-item"><a href="privacy-policy.html">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;