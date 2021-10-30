import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import profileIcon from "..\\..\\images\\img.png"
import Image from 'react-bootstrap/Image'
import "./myProfileStyle.css";
import styled from 'styled-components';
import LoanTable from "./loanTable";

export const myProfile = (props) => {
    return (
        <div class="profile-full">
            <div class="container-profile">
                <div> <Image className="sidebar-img-profile" src={profileIcon} /></div>

                <div class="mainContainer-profile">
                    <h1 style={{color: props.color}} className="WelcomeText-profile">
                        Welcome {props.name}!
                        <div className="blackLine-profile"></div>
                    </h1>
                    
                    <h3 style={{color: props.color}} className="label-profile">
                        Username : {props.username}
                    </h3>
                    <h3 style={{color: props.color}} className="label-profile">
                        Email : {props.email}
                    </h3>
                    <h3 style={{color: props.color}} className="label-profile">
                        Age : {props.age}
                    </h3>
                    <h3 style={{color: props.color}} className="label-profile">
                        Gender : {props.gender}
                    </h3>
                    <h3 style={{color: props.color}} className="label-profile">
                        Salary : {props.salary}
                    </h3>
                    <button class="btn btn-primary my-1" >Update Profile</button>

                </div>
                
            </div>
            <div class="container-profile">
                <LoanTable/>                            
            </div>

        </div>
        
    )
}

export default myProfile

