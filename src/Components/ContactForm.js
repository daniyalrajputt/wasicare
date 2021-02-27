import React, { useState, useCallback } from "react";
import service from "../services/service";

const initalState = {
    firstName: "",
    email: "",
    subject: "",
    contact: "",
    message: ""
};
function ContactForm() {
    const [state, setState] = useState({ ...initalState });

    const stateHandler = useCallback((obj) => setState({ ...state, ...obj }), [
        state,
    ]);

    const submitHandler = async (event) => {
        try {
            event.preventDefault();
            const { status } = await service.contactForm(state);
            if (status) setState({ ...initalState });
            console.log("status --->", status);
            alert("Thankyou for Contacting us...!")
        } catch (error) {
            console.log("error----> ", error);
        }
    };

    return (
        <div className="contact-form ml-lg-4">
            <div className="section-title">
                <h3>We'd love to hear from you</h3>
                <p>The price is something not necessarily defined as financial. It could be time, effort, sacrifice, money or perhaps, something else.</p>
            </div>
            <form onSubmit={submitHandler}>
                <div className="row align-items-center">
                    <div className="form-group col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            required
                            id="first-name"
                            placeholder="First Name"
                            value={state?.firstName}
                            name="firstName"
                            onChange={(e) =>
                                stateHandler({ [e.target.name]: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                            placeholder="Email"
                            value={state?.email}
                            name="email"
                            onChange={(e) =>
                                stateHandler({ [e.target.name]: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <input
                            type="number"
                            className="form-control"
                            id="phone"
                            placeholder="Phone Number"
                            value={state?.contact}
                            name="contact"
                            required
                            onChange={(e) =>
                                stateHandler({ [e.target.name]: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            id="subject"
                            required
                            placeholder="Subject"
                            value={state?.subject}
                            name="subject"
                            onChange={(e) =>
                                stateHandler({ [e.target.name]: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group col-lg-12">
                        <textarea
                            className="form-control"
                            rows="5"
                            required
                            placeholder="Message"
                            value={state?.message}
                            name="message"
                            onChange={(e) =>
                                stateHandler({ [e.target.name]: e.target.value })
                            }
                        ></textarea>
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