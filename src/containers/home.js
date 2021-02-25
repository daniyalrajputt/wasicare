import React, { useEffect, useState } from "react";
import AppointmentForm from "../Components/AppointmentForm";
import BlogPost from "../Components/BlogPost";
import Testimonial from "../Components/Testimonial";
import { imagesData } from "../dummyData";
import { Carousel } from "antd";
import DoctorList from "../Components/DoctorList";
import DepartmentList from "../Components/Departments";
import HomeServicesList from "../Components/HomeServicesList";
// Testimonial Api File
import testimonialService from "../services/testimonial";
import DepartmentService from "../services/departments";
import BlogService from "../services/blog";
import DoctorService from "../services/doctor";

const Home = ({ services }) => {
  const [data, setData] = useState([]);
  const [dept, setDept] = useState([]);
  const [blog, setBlog] = useState([]);
  const [doctor, setDoctor] = useState([]);

  // console.log({data, dept, blog, doctor})

  useEffect(() => {
    getTestimonials();
    getDepartments();
    getBlog();
    getDoctor();
  }, []);

  const getTestimonials = async () => {
    try {
      const response = await testimonialService.gettestimonials();
      if (response) setData(response);
    } catch (error) {
      console.log("error----> ", error);
    }
  };

  const getDepartments = async () => {
    try {
      const response = await DepartmentService.getDepartments();
      if (response) setDept(response);
    } catch (error) {
      console.log("error----> ", error);
    }
  };

  const getBlog = async () => {
    try {
      const response = await BlogService.getBlog();
      if (response) setBlog(response);
    } catch (error) {
      console.log("error----> ", error);
    }
  };

  const getDoctor = async () => {
    try {
      const response = await DoctorService.getDoctors();
      if (response) setDoctor(response);
    } catch (error) {
      console.log("error----> ", error);
    }
  };

  return (
    <div className="home-container">
      {/* header ends here */}
      <section className="banner banner-02">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 order-lg-2">
              <div className="banner-img3">
                <img className="img-fluid" src={imagesData.banner2} alt="" />
              </div>
              <div className="banner-img4">
                <img className="img-fluid" src={imagesData.banner} alt="" />
              </div>
              <div className="banner-content my-4 my-md-5 my-lg-8">
                <h1 className="">Advanced Healthcare Made Personal.</h1>
                <p className="mb-5">
                  Compassionate Care, Advanced Medicine, Close to Home
                </p>
                <a className="btn btn-primary" >
                  Discover More
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-7 order-lg-1">
              <img className="img-fluid" src={imagesData.image02} alt="" />
              <div className="banner-img1">
                <img className="img-fluid" src={imagesData.banner3} alt="" />
              </div>
              <div className="banner-img2">
                <img className="img-fluid" src={imagesData.banner4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* first section ends here  */}
      <section className="space-pt">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4 col-sm-6">
              <div className="section-title left-divider">
                <span>Our Medileaf Services</span>
                <h2>Working for Your Better Health.</h2>
                <p>
                  We can look a bit further back in time to Albert Einstein or
                  even further.
                </p>
                <a  className="btn btn-link">
                  All Service
                </a>
              </div>
            </div>
            {services?.map((item, ind) => (
              <HomeServicesList key={ind} service={{ ...item, ind }} />
            ))}
          </div>
        </div>
      </section>
      {/* second section ends here services */}

      <section className="space-pt">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mb-lg-n6 mb-md-5 mb-4 text-center">
                <img className="img-fluid" src={imagesData.about05} alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-4 mb-md-5 mb-lg-7">
              <div className="section-title left-divider">
                <span>About our company</span>
                <h2>The hospital you trust to care for those you love.</h2>
                <p className="mb-0">
                  There is really no magic to it and it’s not reserved only for
                  a select few people. As such, success really has nothing to do
                  with luck, coincidence or fate. It really comes down to
                  understanding the steps in the process and then executing on
                  those steps.
                </p>
              </div>
              <p className="lead mb-5">
                Introspection is the trick. Understand what you want, why you
                want it and what it will do for you.
              </p>
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between">
                    <div className="item">
                      <img
                        className="img-fluid center-block mx-auto"
                        src={imagesData.client05}
                        alt=""
                      />
                    </div>

                    <div className="item">
                      <img
                        className="img-fluid center-block mx-auto"
                        src={imagesData.client06}
                        alt=""
                      />
                    </div>

                    <div className="item">
                      <img
                        className="img-fluid center-block mx-auto"
                        src={imagesData.client07}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About section ends here */}
      <section className="choose-people bg-primary-half-lg z-index-n9">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-md-10 text-center">
              <div className="section-title center-divider mb-4 mb-md-0">
                <span className="text-white">Welcome to the</span>
                <h2 className="text-white mb-0">
                  Every department of health & family benefit.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space-pb mt-n5 mt-lg-n7">
        <div className="container">
          <div className="row justify-content-center">
            {dept?.map((department, ind) => (
              <DepartmentList key={ind} {...department} />
            ))}
          </div>
          <div className="row mt-4">
            <div className="col-sm-12 text-center">
              <a href="departments.html" className="btn btn-primary">
                All Department
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Feature section ends here */}
      <section className="space-pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 text-center">
              <div className="counter pr-0 mb-lg-0">
                <div className="counter-icon">
                  <i className="flaticon-hospital-bed"></i>
                </div>
                <div className="counter-content">
                  <span className="timer" data-to="1790" data-speed="10000">
                    1790
                  </span>
                  <label>
                    We also know those epic stories, those modern-day legends
                    surrounding.
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
              <div className="counter pr-0 mb-lg-0">
                <div className="counter-icon">
                  <i className="flaticon-electrocardiogram"></i>
                </div>
                <div className="counter-content">
                  <span className="timer" data-to="245" data-speed="10000">
                    245
                  </span>
                  <label>
                    Remind yourself you have nowhere to go except up as you have
                    already been at the bottom.
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
              <div className="counter pr-0 mb-sm-0">
                <div className="counter-icon">
                  <i className="flaticon-hospital"></i>
                </div>
                <div className="counter-content">
                  <span className="timer" data-to="491" data-speed="10000">
                    491
                  </span>
                  <label>
                    I truly believe Augustine’s words are true and if you look
                    at history you know it is true.
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
              <div className="counter pr-0 mb-0">
                <div className="counter-icon">
                  <i className="flaticon-electrocardiogram-1"></i>
                </div>
                <div className="counter-content">
                  <span className="timer" data-to="1090" data-speed="10000">
                    1090
                  </span>
                  <label>
                    Who realize only a small percentage of their potential. We
                    all know people who live.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter section ends here */}
      <section className="space-pb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="section-title center-divider mb-5">
                <span>Team of professional</span>
                <h2>Our outstanding Team Is Active To Help You!</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {doctor?.map((doctor, ind) => (
              <DoctorList key={ind} {...doctor} />
            ))}
          </div>
        </div>
      </section>
      {/* Team section ends here */}
      <section className="space-pt half-overlay right-position position-relative bg-holder">
        <div className="container">
          <div className="row align-items-center pb-lg-0">
            <div className="col-lg-5 text-center">
              <img className="img-fluid" src={imagesData.about04} alt="" />
            </div>
            <div className="col-lg-7">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
      {/* Appointment section ends here */}

      <section className="space-ptb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title center-divider text-center">
                <span>Check out our</span>
                <h2>Latest News & Blogs</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blog?.map((blog, ind) => (
              <BlogPost key={ind} {...blog} />
            ))}
          </div>
        </div>
      </section>
      {/* blog section ends here */}
      <section className="space-pb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div>
                <Carousel autoplay dots={false}>
                  {data?.map((testimonial, ind) => (
                    <Testimonial key={ind} {...testimonial} />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
