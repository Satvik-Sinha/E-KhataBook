import React from 'react'
import ReactDOM from "react-dom";
import PieChartSatvik from "../Components/PieChartSatvik"
import styled from 'styled-components';

export default function Dailythansaction() {
    return (
        <div>
             <div className="firstBox">
            <PieChartSatvik />
            </div>
           <div>

           </div>

           
           <form class="form-inline">
           <Category>
            <label class="my-1 mr-2 p-3" for="inlineFormCustomSelectPref">Select Category</label>
            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option selected>Choose...</option>
                <option value="Food">Food</option>
                <option value="Clothing">Clothing</option>
                <option value="Travel">Travel</option>
                <option value="Daily Accessories">Daily Accessories</option>
                <option value="Extra Expenses">Extra Expenses</option>
                <option value="Bonus Received">Bonus Received</option>
            </select>
            
            </Category>

            <CategoryInp>
            <div class="row">
            <div class="col-3">
            <input type="text" class="form-control" placeholder="Transaction Name"/>
            </div>
            <div class="col-2">
            <input type="number" class="form-control" placeholder="Amount"/>
            </div>
            </div>
            </CategoryInp>

            <CategoryBtn>
            <button type="submit" class="btn btn-primary my-1">Submit</button>
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
