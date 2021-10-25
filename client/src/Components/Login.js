import React from 'react'
import { NavLink } from 'react-router-dom'
import SignInPic from "../images/SignIn.jpg"

export const Login = () => {
    return (
        
            
            <section className="signup-form">
           
            <form>
            
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            
            <div className="form-group">
                <label for="InputPassword1">Password</label>
                <input type="InputPassword" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="login" className="btn btn-primary">Login</button>
            </form>

           {/* This img is not getting beside the form  */}
            {/* <div className="signup-img">
                <figure>
                    <img src={SignInPic} alt="Registratiion Picture"/>
                </figure>
                <NavLink to="/Login" className="SignIn-Img-Link">Already Registered</NavLink>
            </div> */}
            
            </section>
    )
}
export default Login;