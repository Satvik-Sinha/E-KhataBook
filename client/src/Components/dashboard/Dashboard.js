import React,{useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Dashboard.css'
import {Link} from "react-router-dom";
import BarChart from "../Barchart/BarChart"
import PieChart from "../Piechart/PieChart"
import axios from 'axios';
import { UserContext } from "../../App";
import { useContext } from "react";
export const Dashboard = (props) => {

        const[accData, setAccData] = useState({});
        const {state,dispatch} = useContext(UserContext);
        useEffect(() =>{
          dispatch({type:"USER",payload : true});
          // console.log(state);
        }, [])
        useEffect(() => {
            // console.log(accData);
            axios.get(`http://localhost:4000/api/users/get/${localStorage.getItem('userID')}`)
            .then((res) => {
                setAccData(res.data);
                // console.log(res.data); 
                // console.log(accData);
            })
            .catch( (error) => {
                console.log(error);
            })
            // console.log(accData);
        }, [])




    return (
        <div className="mainContainer">
            <div className="firstBox">
                <div class="box">
                    <h3 style={{color:"#1d36a8"}}>${accData.totalIncome}</h3>
                    <p>Income</p>
                </div>
                <div class="box">
                    <h3 style={{color:"#7b20a8"}}>${accData.totalIncome - accData.totalExpenses}</h3>
                    <p>Balance</p>
                </div>
                
                <div class="box">
                    <h3 style={{color:"#e0a106"}}>${accData.totalExpenses}</h3>
                    <p>Expenses</p>
                </div>
            </div>
            <div className="firstBox">
            <BarChart />
            </div>
            <div className="firstBox">
            <PieChart ID={localStorage.getItem('userID')}
            accData = {accData} />
            </div>

        </div>
    )
}
export default Dashboard;