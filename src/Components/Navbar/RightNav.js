import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";
import logo from '../../images/logo.svg';


const Div = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .nav-logo{
    display: none;
    img {
      width: 125px;
      height: auto;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #fff;
    position: fixed;
    z-index: 19;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(-100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    .nav-logo{
      display: block;
      margin-top: 15px;
      margin-left: 16px;
    }
  }
`;


const RightNav = ({ open }) => {
  return (
    <Div open={open} className="custom-nav">
      <div className="nav-routes">
        <a href="/" className="nav-logo">
          <img src={logo} alt="Best Law" title="Best Law" />
        </a>
        <div className="content">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>
      </div>
      <div className="submit-btn">
        <Link to="/submitcase"><button>Submit Your Case</button></Link>
      </div>
    </Div>
  )
}

export default RightNav;