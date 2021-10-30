import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import profileIcon from "..\\..\\images\\img.png"
import Image from 'react-bootstrap/Image'
import "./myProfileStyle.css";
import styled from 'styled-components';
import LoanTable from "./loanTable";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { useState } from "react";

export const MyProfile = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                        Salary : ${props.salary}
                    </h3>
                    <Button  variant="primary" onClick={handleShow}>Edit Profile</Button>{' '}

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Please edit your profile!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                
            </div>
            <div class="container-profile">
                <LoanTable/>                            
            </div>

        </div>
        
    )
}

export default MyProfile

