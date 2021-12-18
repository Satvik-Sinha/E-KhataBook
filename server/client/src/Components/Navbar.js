import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import logo from "../images/expenseManager-Logo.png"
import Nav from 'react-bootstrap/Nav'
import { UserContext } from "../App";
import "../App.css";
import axios from 'axios';
const sgMail = require('@sendgrid/mail');


const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);
  console.log("currently in navbar");

  // const msg = {
  //     recipient: 'ankitkushawaha1000@gmail.com',
  //     sender: 'ankitkushawaha1000@gmail.com',
  //     subject: 'Bill Payment reminder',
  //     text: 'tell me if you got this msg'
  // };

  const schedule = require('node-schedule');
  const date = new Date(2021, 11, 18, 22, 40, 0);

  const job = schedule.scheduleJob(date, async function(){
    console.log('The world is going to end today.');

      const msg={
        recipient: 'ankitkushawaha1000@gmail.com',
        sender: 'ankitkushawaha1000@gmail.com',
        subject: 'Bill Payment reminder',
        text: 'tell me if you got this msg'
      }
      try {
        await axios.post("http://localhost:4000/send_mail", msg)
        console.log("success")
      } catch (error) {
        console.log("not done")
        console.error(error)
      }
  });
  //   window.setInterval(function(){ // Set interval for checking
  //     var date = new Date(); // Create a Date object to find out what time it is
  //     if(date.getHours() === 19 ){ // Check the time
  //         // Do stuff
  //         console.log("hellow");
  //         console.log("current time is the golden time");
  //     }
  // }, 15000); // Repeat every 3600000 milliseconds (1 hr)
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
          <Nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark nav-pills">
            
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
