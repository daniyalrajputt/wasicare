import React from "react";
import ServicesList from "../Components/ServicesList";
import { imagesData } from "../dummyData";

function Services({ services }) {
// console.log('services',services)
  return (
    <div>
      <section className="inner-banner bg-light">
        <div className="container">
          <div className="row align-items-center intro-title">
            <div className="col-12">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    {" "}
                    <i className="fas fa-home"></i>{" "}
                  </a>
                </li>
                <li className="breadcrumb-item active">
                  {" "}
                  <i className="fas fa-chevron-right"></i> <span>Service</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="space-ptb">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-10">
              <div className="section-title left-divider">
                <span>Our Medileaf Services</span>
                <h2>We Believe The Heart Of Healthcare Is Service To Others</h2>
              </div>
              <div className="row mt-lg-5">
                {services?.map((ser, ind) => (
                  <ServicesList key={ind} service={ser} />
                ))}
              </div>
            </div>
            <div className="stethoscope-img">
              <img
                className="img-fluid d-none d-lg-block"
                src={imagesData.stethoscope}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="space-ptb bg-primary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-md-10 text-center">
              <div className="section-title center-divider mb-5">
                <span className="text-white">How it Works</span>
                <h2 className="text-white">
                  We do our best to provide excellent service
                </h2>
                <p className="text-white">
                  You will begin to realise why this exercise is called the
                  Dickens Pattern as you notice that the idea of this exercise
                  is to hypnotize yourself to be aware of two very real
                  possibilities for your future.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-md-0 mb-4">
              <div className="feature-step text-center">
                <div className="feature-step-icon">
                  <span className="feature-step-number">01</span>
                  <i className="flaticon-electrocardiogram"></i>
                </div>
                <div className="feature-info-content">
                  <h6 className="feature-info-title mb-2 text-white">
                    We care about you
                  </h6>
                  <p className="text-white mb-0">
                    Then with that thing in mind, follow these simple steps.
                    Step One: Get yourself nice and relaxed and settled.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-4">
              <div className="feature-step text-center">
                <div className="feature-step-icon">
                  <span className="feature-step-number">02</span>
                  <i className="flaticon-insurance"></i>
                </div>
                <div className="feature-info-content">
                  <h6 className="feature-info-title mb-2 text-white">
                    Healing Advice
                  </h6>
                  <p className="text-white mb-0">
                    Imagine reaching deep inside you for all the strength and
                    wisdom that you need to make this decision today.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-step text-center">
                <div className="feature-step-icon">
                  <span className="feature-step-number">03</span>
                  <i className="flaticon-24-hours"></i>
                </div>
                <div className="feature-info-content">
                  <h6 className="feature-info-title mb-2 text-white">
                    24/7 Support
                  </h6>
                  <p className="text-white mb-0">
                    What is the exact sequence of events that will take you to
                    where you want to be? Have a think consciously of what you
                    need to do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-ptb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-md-10 text-center">
              <div className="section-title center-divider mb-5">
                <span className="text-secondary">
                  Why choose people like Medleaf
                </span>
                <h2 className="text-dark">
                  Our Equipped Team Is Able To Support You!
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center mb-md-0 mb-4">
              <div className="service-items">
                <div className="service-img">
                  <img
                    className="img-fluid"
                    src={imagesData.services01}
                    alt=""
                  />
                </div>
                <div className="service-content">
                  <span>Cloud Services</span>
                  <h5>
                    <a href="service-detail.html">Experienced Physicians</a>
                  </h5>
                  <p>
                    Every outcome begins with the first step. When you decide
                    you want to have a romantic meal for two
                  </p>
                  <a className="icon-btn" href="service-detail.html">
                    <i className="fas fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-md-0 mb-4">
              <div className="service-items">
                <div className="service-img">
                  <img
                    className="img-fluid"
                    src={imagesData.services01}
                    alt=""
                  />
                </div>
                <div className="service-content">
                  <span>Cloud Services</span>
                  <h5>
                    <a href="service-detail.html">Personalized Treatment</a>
                  </h5>
                  <p>
                    It’s the life you are designing instead of the one that was
                    given you and that you have lived with less intention
                  </p>
                  <a className="icon-btn" href="service-detail.html">
                    <i className="fas fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="service-items">
                <div className="service-img">
                  <img
                    className="img-fluid"
                    src={imagesData.services01}
                    alt=""
                  />
                </div>
                <div className="service-content">
                  <span>Cloud Services</span>
                  <h5>
                    <a href="service-detail.html">Quality and Safety</a>
                  </h5>
                  <p>
                    This is the beginning of creating the life that you want to
                    live. Know what the future holds for you as a result
                  </p>
                  <a className="icon-btn" href="service-detail.html">
                    <i className="fas fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
