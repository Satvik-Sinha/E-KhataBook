import React from 'react'
import { NavLink } from 'react-router-dom'
import SignInPic from "../images/SignIn.jpg"

export const Signup = () => {
    return (
        
            
            <section className="signup-form">
           
            <form>
            <div className="form-group">
            <div className="row">
            <div className="col">
            <label for="First-Name">First-Name</label>
            <input type="text" className="form-control" placeholder="First name"/>
            </div>
            <div className="col">
            <label for="Last-Name">Last-Name</label>
            <input type="text" className="form-control" placeholder="Last name"/>
            </div>
            </div>
            </div>
            
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputUserName">Enter User-Name</label>
                <input type="text" className="form-control" id="exampleUserName" aria-describedby="emailHelp" placeholder="Enter User-Name"/>
            
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label for="exampleInputConfirmPassword1">Confirm Password</label>
                <input type="ConfirmPassword" className="form-control" id="exampleInputConfirmPassword1" placeholder="Confirm Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
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
export default Signup;