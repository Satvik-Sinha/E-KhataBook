import React, {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Dashboard.css'
import {Link, useHistory} from "react-router-dom";
import profileIcon from "..\\..\\images\\img.png"
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { UserContext } from "../../App";


const Sidebar = () => {

  const {state,dispatch} = useContext(UserContext);
  const history =useHistory();

  const logOut = (event) =>{
    event.preventDefault();

    dispatch({type:"USER",payload : false});
    // alert("Logout Successful");
    console.log("Logout Successful");
    history.push("/");

  }
  return (
    <ul class="nav flex-column">
      <div> <Image className="sidebar-img" src={profileIcon} /></div>
      <li>
        <Link style={{margin:'1em'}} class="nav-link" to="MyProfile" type="button" class="btn btn-outline-secondary btn-sm">My Profile</Link>
      </li>
      <li class="sidebar-items">
        <h3>Food</h3>
        <input type="text" placeholder = "enter food" />
        <Button as="input" size="sm" type="submit" value="+" />{' '}
        <h3>Shopping</h3>
        <input type="text" placeholder = "enter shopping" />
        <Button as="input" size="sm" type="submit" value="+" />{' '}
        <h3>Gifts</h3>
        <input type="text" placeholder = "enter gifts" />
        <Button as="input" size="sm" type="submit" value="+" />{' '}

      </li>
      <button style={{margin:'2em', diplay:'baseline'}} class="btn btn-outline-danger btn-lg" onClick={logOut}>LOG OUT</button>{' '}
    </ul>
  )
}
export default Sidebar