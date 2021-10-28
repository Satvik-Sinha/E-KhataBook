import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Dashboard.css'
import {Link} from "react-router-dom";
import profileIcon from "..\\..\\images\\img.png"
import Image from 'react-bootstrap/Image'

const sidebar = () => {
  return (
    <ul class="nav flex-column">
      <div> <Image className="sidebar-img" src={profileIcon} /></div>
      <li>
        <Link class="nav-link" to="MyProfile">My Profile</Link>
      </li>
      <li class="sidebar-items">
        <h3>Food</h3>
        <input type="text" placeholder = "enter food" />
        <button style={{background:'green'}}>+</button>
        <h3>Shopping</h3>
        <input type="text" placeholder = "enter shopping" />
        <button style={{background:'green'}}>+</button>
        <h3>Gifts</h3>
        <input type="text" placeholder = "enter gifts" />
        <button style={{background:'green'}}>+</button>
      </li>
      <button class="log-out">LOG OUT</button>
    </ul>
  )
}
export default sidebar