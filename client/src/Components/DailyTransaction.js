import React,{useState, useEffect} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import ReactDOM from "react-dom";
import PieChartSatvik from "../Components/PieChartSatvik"
import styled from 'styled-components';
import axios from 'axios';

export default function Dailythansaction(props) {

    const [user,setUser] = useState({food:0, clothing:0, travel:0, dailyAccessories:0, extraExpenses:0, bonusReceived:0});

    const history =useHistory();
    let name,value;

    useEffect(() => {
        console.log(user);
        axios.get("http://localhost:4000/api/users/get/618226a73986c7df614a251e")
        .then((res) => {
            setUser(res.data);
            // console.log(res.data);
            // console.log(user);
            user.food=res.data.food;
            user.clothing=res.data.clothing;
            user.travel=res.data.travel;
            user.dailyAccessories=res.data.dailyAccessories;
            user.extraExpenses=res.data.extraExpenses;
            user.bonusReceived=res.data.bonusReceived;
            //console.log(user);
        })
        .catch( (error) => {
            console.log(error);
        })
        //console.log(user);
    }, [])

    const handleInputs = (e) =>{
       // console.log(e);
        name = e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }


     const UpdateData = e =>{
     
       e.preventDefault();
                axios.put("http://localhost:4000/api/users/update/618226a73986c7df614a251e", user)
                .then(res => {
                    alert("Data Updated Successfully");
                })
                .catch(error =>{
                    console.log(error);
                })
                console.log(user);
    //     e.preventDefault();
    //     const {food, clothing, travel, dailyAccessories, extraExpenses, bonusReceived}=user;

    //     const res = await fetch("/api/users/transaction" , {
    //         method : "POST",
    //         headers:{
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify({
    //             food, clothing, travel, dailyAccessories, extraExpenses, bonusReceived
    //         })
    //     });

    //     const data= await res.json();

    //     if(res.status===400 || !data)
    //    { window.alert("Server Error");
    //     console.log("Server Error");}
    //     else{
    //         window.alert("Database Updated");
    //         console.log("Database Updated");
    //     }
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
