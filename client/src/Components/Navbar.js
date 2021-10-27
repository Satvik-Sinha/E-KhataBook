import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import logo from "../images/KhataBook.jpg"

const navbar = () => {
    return (
        <>
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
  <NavLink className="navbar-brand" to="#" >
        <img src={logo} alt="logo" />
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
    <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/DashBoard">DashBoard</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/EditProfile">Edit Profile</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/PlanBudget">Plan Budget</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Signup">Registration</NavLink>
      </li>
    </ul>
   
  </div>
</nav>

        </>
    )
}

export default navbar
