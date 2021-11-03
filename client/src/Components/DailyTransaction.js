import React,{useState, useEffect} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import ReactDOM from "react-dom";
import PieChartSatvik from "../Components/PieChartSatvik"
import styled from 'styled-components';
import axios from 'axios';

export default function DailyTransaction(props) {

    var [user,setUser] = useState({
        food:0,
        clothing:0,
        travel:0,
        dailyAccessories:0, 
        extraExpenses:0, 
        bonusReceived:0
    });
    
    var [expenseData,setExpenseData] = useState({
        food:0,
        clothing:0,
        travel:0,
        dailyAccessories:0, 
        extraExpenses:0, 
        bonusReceived:0
    });

    const history =useHistory();

    useEffect(() => {
        console.log(user);
        axios.get(`http://localhost:4000/api/users/get/${props.ID}`)
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
        // console.log(user);
    }


     const UpdateData = e =>{
        e.preventDefault();
        //this is to use adding of previous and updated expenses

        // axios.get(`http://localhost:4000/api/users/get/${props.ID}`)
        // .then((res) => {
        //     setExpenseData(res.data);
        // })
        // .catch( (error) => {
        //     console.log(error);
        // })

        console.log(expenseData.food + " " +user.food);
        axios.put(`http://localhost:4000/api/users/update/${props.ID}`, {
            food: expenseData.food + user.food,
            clothing: expenseData.clothing + user.clothing,
            travel: expenseData.travel + user.travel,
            dailyAccessories: expenseData.dailyAccessories + user.dailyAccessories,
            extraExpenses: expenseData.extraExpenses + user.extraExpenses,
            bonusReceived: expenseData.bonusReceived + user.bonusReceived
        })
        .then(res => {
            alert("Data Updated Successfully");
        })
        .catch(error =>{
            console.log(error);
        })

     }


    return (
        <div>
             <div className="firstBox">
            <PieChartSatvik />
            </div>
           <div>

           </div>

           
           <form class="form-inline">
           <Category>
            
               <label>Categories</label>
            </Category>

            <CategoryInp>
            
            <div class="col-6">
            <input type="number" name="food" id="food"  onChange={handleInputs} placeholder="Food"/>
                <input type="number" name="clothing" id="clothing" onChange={handleInputs} placeholder="Clothing"/>
                <input type="number" name="travel" id="travel" onChange={handleInputs} placeholder="Travel"/>
                <input type="number" name="dailyAccessories" id="dailyAccessories" onChange={handleInputs} placeholder="Daily Accessories"/>
                <input type="number" name="extraExpenses" id="extraExpenses" onChange={handleInputs} placeholder="Extra Expenses"/>
                <input type="number" name="bonusReceived" id="bonusReceived" onChange={handleInputs} placeholder="Bonus Received"/>
            
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
    padding-left : 30rem;
    padding-bottom : 1rem;
    padding-top : 4rem;
`;
const CategoryInp = styled.div `
    padding-left : 28rem;
    padding-bottom : 1.5rem;
    padding-top : 1rem;
`;
const CategoryBtn = styled.div `
    padding-left : 36rem;
    padding-bottom : 2.5rem;
    padding-top : 1rem;
`;
