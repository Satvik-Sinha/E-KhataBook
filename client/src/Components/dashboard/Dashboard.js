import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Dashboard.css'
import {Link} from "react-router-dom";
import BarChart from "../Barchart/BarChart"
import PieChart from "../Piechart/PieChart"

export const Dashboard = () => {
    return (
        <div className="mainContainer">
            <div className="firstBox">
                <div class="box">
                    <h3 style={{color:"#1d36a8"}}>$50,000</h3>
                    <p>Income</p>
                </div>
                <div class="box">
                    <h3 style={{color:"#7b20a8"}}>$32,000</h3>
                    <p>Balance</p>
                </div>
                
                <div class="box">
                    <h3 style={{color:"#e0a106"}}>$18,000</h3>
                    <p>Expenses</p>
                </div>
            </div>
            <div className="firstBox">
            <BarChart />
            </div>
            <div className="firstBox">
            <PieChart />
            </div>

        </div>
    )
}
export default Dashboard;