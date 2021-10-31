import React, { createContext, useReducer } from 'react'
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from './Components/Navbar';
import Sidebar from './Components/dashboard/Sidebar';
import Home from './Components/Home';
import Dashboard from './Components/dashboard/Dashboard';
import MyProfile from './Components/myProfile/myProfile';
import PlanBudget from './Components/PlanBudget';
import DailyTransaction from './Components/DailyTransaction';
import Login from './Components/Login';
import Signup from './Components/Signup';

import {initialState,reducer} from "../src/reducer/useReducer"

export const Usercontext = createContext();

const Routing = () =>{
  return (
    <Switch style={{backgroundColor:"red"}}>
      <Route exact path="/Home">
      <Home />
      </Route>

      <Route path="/DailyTransaction">
      <DailyTransaction />
      </Route>

      <Route path="/Dashboard">
      <Sidebar/>
      <Dashboard />
      </Route>

      <Route path="/PlanBudget">
      <PlanBudget />
      </Route>

      <Route path="/Login">
      <Login />
      </Route>

      <Route path="/Signup">
      <Signup />
      </Route>

      <Route path="/MyProfile">
      <MyProfile 
        name = "Tony Stark"
        username = "tonyStarkIsLove"
        email = "tonyStark@3000.com"
        age = {55}
        gender = "Male"
        salary = {100000}
        color = "rgb(79, 3, 102)"
      />
      </Route>
    </Switch>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    
    <div className= "dark-mode">
    <Usercontext.Provider value={{state, dispatch}}>
    <Navbar />
    <Routing />
    </Usercontext.Provider>
    </div>
  );
}

export default App;
