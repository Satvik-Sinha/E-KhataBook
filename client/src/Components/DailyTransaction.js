import React,{useState,useContext, useEffect} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import ReactDOM from "react-dom";

import PieChartSatvik from "../Components/PieChartSatvik"
import styled from 'styled-components';
import axios from 'axios';
import "../App.css";
import { UserContext } from "../App";

export default function DailyTransaction(props) {

    const[accData, setAccData] = useState({});
    
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

    const {state,dispatch} = useContext(UserContext);
    useEffect(() =>{
      dispatch({type:"USER",payload : true});
      // console.log(state);
    }, [])

    var [user,setUser] = useState({
        food:0,
        clothing:0,
        travel:0,
        dailyAccessories:0, 
        extraExpenses:0, 
        bonusReceived:0
    });
    
    var [expenseData,setExpenseData] = useState({});
    const [Zero, setZero] = useState({
        food:'',
        clothing:'',
        travel:'',
        dailyAccessories:'', 
        extraExpenses:'', 
        bonusReceived:''
    })
    const history =useHistory();

    useEffect(() => {
        console.log(user);
        axios.get(`http://localhost:4000/api/users/get/${localStorage.getItem('userID')}`)
        .then((res) => {
            setExpenseData(res.data);
            
        })
        .catch( (error) => {
            console.log(error);
        })
        console.log(user);
    }, [user])

    const handleInputs = event =>{
       // console.log(e);
        const { value, name } = event.target;
        setUser({...user,[name]:parseInt(value, 10)});
        setZero({...Zero, [name]: value});
        // console.log(user);
    }


     const UpdateData = e =>{
        e.preventDefault();

        console.log(expenseData.food + " " +user.food);
        axios.put(`http://localhost:4000/api/users/update/${localStorage.getItem('userID')}`, {
            food: expenseData.food + user.food,
            clothing: expenseData.clothing + user.clothing,
            travel: expenseData.travel + user.travel,
            dailyAccessories: expenseData.dailyAccessories + user.dailyAccessories,
            extraExpenses: expenseData.extraExpenses + user.extraExpenses,
            bonusReceived: expenseData.bonusReceived + user.bonusReceived,
            totalExpenses: expenseData.totalExpenses + user.food + user.clothing + user.travel + user.dailyAccessories + user.extraExpenses,
            totalIncome: expenseData.totalIncome + user.bonusReceived
        })
        .then(res => {
            alert("Data Updated Successfully");
        })
        .catch(error =>{
            console.log(error);
        })

        setZero({
            food:'',
            clothing:'',
            travel:'',
            dailyAccessories:'', 
            extraExpenses:'', 
            bonusReceived:''
        })

     }


    return (
        <div>
            <div className="firstBox">
            <PieChartSatvik ID={localStorage.getItem('userID')}
            accData = {accData} />
            </div>
            <form class="form-inline center_div">
                <Category>
                    <label>Categories</label>
                </Category>
                <CategoryInp>
                    <div class="col-6">
                        <input type="number" name="food" value={Zero.food} onChange={handleInputs} placeholder="Food"/>
                        <input type="number" name="clothing" value={Zero.clothing} onChange={handleInputs} placeholder="Clothing"/>
                        <input type="number" name="travel" value={Zero.travel} onChange={handleInputs} placeholder="Travel"/>
                        <input type="number" name="dailyAccessories" value={Zero.dailyAccessories} onChange={handleInputs} placeholder="Daily Accessories"/>
                        <input type="number" name="extraExpenses" value={Zero.extraExpenses} onChange={handleInputs} placeholder="Extra Expenses"/>
                        <input type="number" name="bonusReceived"  value={Zero.bonusReceived} onChange={handleInputs} placeholder="Bonus Received"/>
                    </div>
                </CategoryInp>

                <CategoryBtn>
                    <button type="submit" name="submit" id="submit" value="submit"  onClick={UpdateData} class="btn btn-primary my-1">Submit</button>
                </CategoryBtn>
            </form>
          
        </div>
    )
}
const Category = styled.div `
    padding-bottom : 1rem;
    padding-top : 1rem;
`;
const CategoryInp = styled.div `
    padding-left : 31em;
    padding-bottom : 1.5rem;
    padding-top : 1rem;
    margin: auto;
`;
const CategoryBtn = styled.div `
    padding-bottom : 2.5rem;
`;
