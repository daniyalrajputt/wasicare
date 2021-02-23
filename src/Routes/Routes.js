import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Footer from "../Components/footer";
import Navbar from "../Components/Navbar/Navbar";
import Contact from "../containers/contact";
import Services from "../containers/services";
import Home from "../containers/home";

export default function Routes() {
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
                        <Services />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}