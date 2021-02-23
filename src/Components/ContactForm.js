import React from 'react'

function ContactForm() {
    return (
        <div className="contact-form ml-lg-4">
            <div className="section-title">
                <h3>We'd love to hear from you</h3>
                <p>The price is something not necessarily defined as financial. It could be time, effort, sacrifice, money or perhaps, something else.</p>
            </div>
            <form>
                <div className="row align-items-center">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" id="first-name" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    </div>
                    <div className="form-group col-lg-12">
                        <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                    </div>
                    <div className="form-group col-sm-12 mb-0">
                        <button type="submit" className="btn btn-outline-primary">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;