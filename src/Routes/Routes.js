import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../Components/footer";
import Navbar from "../Components/Navbar/Navbar";
import Contact from "../containers/contact";
import Services from "../containers/services";
import Home from "../containers/home";
import service from "../services/service";

export default function Routes() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices();
  }, []);
  const getServices = async () => {
    try {
      const servicess = await service.getServices();
      setServices(servicess);
    } catch (error) {
      console.log("error--->", error);
    }
  };
  // console.log("servicess", services);
  return (
    <Router>
      <div className="main-container">
        {/* Navbar here */}
        <Navbar />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <Services services={services} />
          </Route>
          <Route path="/">
            <Home services={services} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
