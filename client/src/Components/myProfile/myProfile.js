import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import profileIcon from "..\\..\\images\\img.png"
import Image from 'react-bootstrap/Image'
import "./myProfileStyle.css";
import LoanTable from "./loanTable";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import axios from 'axios';

export const MyProfile = (props) => {
    
    const[accData, setAccData] = useState({
        name:'',
        username:'',
        age:'',
        income:'',
        password:'',
        cnfPass:'',
        gender:''
    });
    // var confPass ='';
    useEffect(() => {
        axios.get(`http://localhost:4000/api/users/get/${props.ID}`)
        .then((res) => {
            setAccData(res.data);
        })
        .catch( (error) => {
            console.log(error);
        })
        
    }, [])
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        getUser();
        setShow(true);
    }
 //this function is to update the data already present
    const getUser = () => {

        // axios.get('http://localhost:4000/api/users/617e7ca7d14a165280bdaa21')
        // .then((res) => {
        //     // console.log(res);
        //     setAccData(res.data);
        // //   console.log(res.data);
        // //   console.log(res.data.name);
        // console.log("hellow2")
        // })
        // .catch( (error) => {
        //     console.log(error);
        // })

        console.log("welcome to edit profile");

    }
    const handleChange = event =>{
        const { value, name } = event.target;
        setAccData({...accData, [name]:value});
        console.log(accData);
    }

    const handleSubmit = event => {

        if(accData.password.length < 6){
            alert("Please provide password having length greater than 6!");
        }else{
            if(accData.password === accData.cnfPass){
                
                event.preventDefault();
                axios.put(`http://localhost:4000/api/users/update/${props.ID}`, accData)
                .then(res => {
                    alert("Profile Updated Successfully");
                })
                .catch(error =>{
                    console.log(error);
                })
                handleClose();
    
            }else{
                alert("passwords didn't matched!")
            }
        }

    }

    return (
        <div class="profile-full">
            <div class="container-profile">
                <div> <Image className="sidebar-img-profile" src={profileIcon} /></div>

                <div class="mainContainer-profile">
                    <h1 style={{color: props.color}} className="WelcomeText-profile">
                        Welcome {accData.name}!
                        <div className="blackLine-profile"></div>
                    </h1>
                    
                    <h3 style={{color: props.color}} className="label-profile">
                        Username : {accData.username}
                    </h3>
                    <h3 style={{color: props.color}} className="label-profile">
                        Email : {accData.email}
                    </h3>
                    <h3 style={{color: props.color}} className="label-profile">
                        Age : {accData.age}
                    </h3>
                    <h3 style={{color: props.color}} className="label-profile">
                        Gender : {accData.gender}
                    </h3>
                    <h3 style={{color: props.color}} className="label-profile">
                        Salary : {accData.income}
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
                                <FormControl Name="username" placeholder="Username" onChange={handleChange}/>
                            </InputGroup>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control Name="name" placeholder="Name" onChange={handleChange}/>
                            </Form.Group>


                            <Form.Label>Age</Form.Label>
                            <InputGroup className="mb-3">
                                <FormControl Name="age" placeholder="Age" onChange={handleChange}/>
                            </InputGroup>
                            
                            <Form.Label>Gender</Form.Label>
                            <InputGroup className="mb-3">
                                <FormControl Name="gender" placeholder="Gender" onChange={handleChange}/>
                            </InputGroup>

                            <Form.Label>Income</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormControl Name="income" placeholder="Income" onChange={handleChange}/>
                            </InputGroup>
                            
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" Name="password" placeholder="Password" onChange={handleChange}/>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name="cnfPass" placeholder="Confirm Password" onChange={handleChange}/>
                            </Form.Group>


                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" disabled={false} onClick = {handleSubmit}>
                                Update Profile
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

