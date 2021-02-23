import React from 'react';
// import styled from 'styled-components';
// import Burger from './Burger';
import logo from '../../images/logo.svg';
import logoWhite from '../../images/logo-white.svg';
import { NavLink } from 'react-router-dom';

// const Nav = styled.nav`
//   width: 100%;
//   height: 75px;
//   width: 100%;
//   padding: 0 50px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #fff;
//   .logo {
//     width: 100px;
//     img {
//       width: 125px;
//       height: auto;
//     }
//   }
// @media (max-width: 768px) {
//     padding: 0 25px
// }
// `

const Navbar = () => {
  return (
    // <Nav>
    //   <div>
    //     <a href="/" className="logo">
    //       <img src={logo} alt="Best Law" title="Best Law" />
    //     </a>
    //   </div>
    //   <Burger />
    // </Nav>
    <header className="header header-02 header-transparent header-sticky">
      <div className="container">
        <div className="row d-none d-lg-flex">
          <div className="col-md-3">
            <NavLink to="/" className="navbar-brand" href="index.html">
              <img className="img-fluid" src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="col-md-9 d-block d-md-flex justify-content-xl-end justify-content-center align-items-center">
            <div className="d-flex mr-3 mr-xl-5">
              <i className="flaticon-placeholder-1 fa-2x text-dark"></i>
              <div className="ml-3">
                <span className="text-dark font-weight-bold">17504 Carlton Cuevas </span>
                <p className="mb-0 small">Gulfport, MS, 39503 </p>
              </div>
            </div>
            <div className="d-flex mr-3 mr-xl-5">
              <i className="flaticon-phone-call fa-2x text-dark"></i>
              <div className="ml-3">
                <span className="text-dark font-weight-bold">+(704) 279-1249 </span>
                <p className="mb-0 small">Mon-Fri 8:30am-6:30pm </p>
              </div>
            </div>
            <div className="d-flex">
              <i className="flaticon-email-2 fa-2x text-dark"></i>
              <div className="ml-3">
                <span className="text-dark font-weight-bold">letstalk@medileaf.com </span>
                <p className="mb-0 small">24 X 7 online support </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="container">
          <nav className="navbar navbar-static-top navbar-expand-lg bg-primary">
            <a className="navbar-brand">
              <img className="img-fluid" src={logoWhite} alt="logo" />
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse"><i className="fas fa-align-left"></i></button>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="nav-item dropdown active">
                  <NavLink to="/" className="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="/" className="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="/services" className="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Medical Equipments <i className="far fa-plus-square"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item">Equipment for Rent</a></li>
                    <li><a className="dropdown-item">Equipment for Sale</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Our Team
      </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    FAQs
      </a>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="add-listing d-none d-sm-block">
              <a className="btn btn-secondory"><i className="fa fa-address-book"></i>Get a quote</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar;