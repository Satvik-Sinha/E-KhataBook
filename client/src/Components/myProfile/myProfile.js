import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import profileIcon from "..\\..\\images\\img.png"
import Image from 'react-bootstrap/Image'
import "./myProfileStyle.css";
import LoanTable from "./loanTable";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { useState } from "react";
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Axios from 'axios';
const axios = require('axios').default;

export const MyProfile = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    async function getUser() {
        try {
          const response = await axios.get('/user?ID=12345');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
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
                        <Modal.Body>
                        
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Choose Profile Picture</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            
                            <Form.Label>Username</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>@</InputGroup.Text>
                                <FormControl aria-label="Username" placeholder="Username"/>
                            </InputGroup>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>


                            <Form.Label>Age</Form.Label>
                            <InputGroup className="mb-3">
                                <FormControl aria-label="Age" placeholder="Age" />
                            </InputGroup>

                            <Form.Label>Income</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormControl aria-label="Amount(dollar)" placeholder="Income"/>
                            </InputGroup>
                            
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>


                        </Modal.Body>
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

