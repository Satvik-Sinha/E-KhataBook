import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import logo from "../images/expenseManager-Logo.png"
import Nav from 'react-bootstrap/Nav'
import { UserContext } from "../App";
import "../App.css";

const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);

  const RenderMenu = () => {
    if(state)
    {
      return (
        <>
          <li className="nav-item">
              <NavLink className="nav-link" to="/Home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/DashBoard">DashBoard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/DailyTransaction">Daily Transaction</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/PlanBudget">Plan Budget</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">About developers</NavLink>
          </li>
        </>
      )
    }else{
     return (
       <>
        
              <li className="nav-item">
                <NavLink className="nav-link" to="/Login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Signup">Registration</NavLink>
              </li>
              
       </>
     )
   }
  }

    return (
        <>
          <Nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark nav-pills red">
            
          <NavLink to="#" >
            <img src={logo} alt="logo" className="homeIcon"/>
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <RenderMenu/>
            </ul>
          
          </div>
        </Nav>

        </>
    )
}

export default Navbar
