import React,{useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Dashboard.css'
// import {Link} from "react-router-dom";
import BarChart from "../Barchart/BarChart"
import PieChart from "../Piechart/PieChart"
import axios from 'axios';
import { UserContext } from "../../App";
import { useContext } from "react";
import PieChartSatvik from "../PieChartSatvik"

export const Dashboard = (props) => {

        const[accData, setAccData] = useState({});
        const {state,dispatch} = useContext(UserContext);
        useEffect(() =>{
          dispatch({type:"USER",payload : true});
          // console.log(state);
        }, [])
        const [monExpenses, setMonExpenses] = useState({});
        useEffect(() => {
            // console.log(accData);
            console.log("dashboard randored");
            axios.get(`/api/users/get/${localStorage.getItem('userID')}`)
            .then((res) => {
                setAccData(res.data);
                setMonExpenses(res.data.monthlyExpenses)
                // console.log(res.data); 
                // console.log(accData);

            })
            .catch( (error) => {
                console.log(error);
            })
            // console.log(accData);
        }, [])
        

        const expenseData = [
            {
              height: monExpenses["05/12/2021"],
              day: "Sun",
              colors: ["#ffd847", "#e0a106"]
            },
            {
              height: monExpenses["06/12/2021"],
              day: "Mon",
              colors: ["#af8ebf", "#7b20a8"]
            },
            {
              height: monExpenses["07/12/2021"],
              day: "Tue",
              colors: ["#add9c0", "#1da890"]
            },
            {
              height: monExpenses["08/12/2021"],
              day: "Wed",
              colors: ["#cbd9ad", "#7ca81d"]
            },
            {
              height: monExpenses["09/12/2021"],
              day: "Thur",
              colors: ["#d9c1ad", "#714511"]
            },
            {
              height: monExpenses["10/12/2021"],
              day: "Fri",
              colors: ["#ba737a", "#851d28"]
            },
            {
              height: monExpenses["11/12/2021"],
              day: "Sat",
              colors: ["#98a3d4", "#1d36a8"]
            }
          ];

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
                <PieChartSatvik ID={localStorage.getItem('userID')}
            accData = {accData} />
            </div>
            <div className="firstBox">
            <BarChart expenseData = {expenseData}/>
            </div>
            <div className="firstBox">
            <PieChart ID={localStorage.getItem('userID')}
            accData = {accData} />
            </div>

        </div>
    )
}
export default Dashboard;