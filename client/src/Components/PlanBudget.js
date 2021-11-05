import React from 'react'
import { UserContext } from "../App";
import { useContext, useEffect } from "react";

export const PlanBudget = () => {
    const {state,dispatch} = useContext(UserContext);
    useEffect(() =>{
      dispatch({type:"USER",payload : true});
      console.log(state);
    }, [])
    return (
        <div>
            <h1>Currently in Development</h1>
            <p>we are working on this....</p>
        </div>
    )
}
export default PlanBudget;