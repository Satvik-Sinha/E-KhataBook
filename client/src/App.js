import React, { createContext, useReducer } from 'react'
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import DashBoard from './Components/DashBoard';
import EditProfile from './Components/EditProfile';
import PlanBudget from './Components/PlanBudget';
import Login from './Components/Login';
import Signup from './Components/Signup';

import {initialState,reducer} from "../src/reducer/useReducer"

export const Usercontext = createContext();

const Routing = () =>{
  return (
    <Switch>
<Route exact path="/">
<Home />
</Route>

<Route path="/DashBoard">
<DashBoard />
</Route>

<Route path="/EditProfile">
<EditProfile />
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
</Switch>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    
    <>
    <Usercontext.Provider value={{state, dispatch}}>
    <Navbar />
    <Routing />
    </Usercontext.Provider>
    </>
  );
}

export default App;
