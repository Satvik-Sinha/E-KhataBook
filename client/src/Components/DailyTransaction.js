import React,{useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import ReactDOM from "react-dom";
import PieChartSatvik from "../Components/PieChartSatvik"
import styled from 'styled-components';

export default function Dailythansaction() {

    const [user,setUser] = useState({food:0, clothing:0, travel:0, dailyAccessories:0, extraExpenses:0, bonusReceived:0});

    const history =useHistory();
    let name,value;

    const handleInputs = (e) =>{
       // console.log(e);
        name = e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }

    const PostData = async(e) =>{
     
        e.preventDefault();
        const {food, clothing, travel, dailyAccessories, extraExpenses, bonusReceived}=user;

        const res = await fetch("/api/usersExpenseData/transaction" , {
            method : "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                food, clothing, travel, dailyAccessories, extraExpenses, bonusReceived
            })
        });

        const data= await res.json();

        if(res.status===400 || !data)
       { window.alert("Server Error");
        console.log("Server Error");}
        else{
            window.alert("Database Updated");
            console.log("Database Updated");
        }
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
            <button type="submit" name="submit" id="submit" value="submit"  onClick={PostData} class="btn btn-primary my-1">Submit</button>
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
