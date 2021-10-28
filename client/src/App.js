import React, { createContext, useReducer } from 'react'
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from './Components/dashboard/Navbar';
import Sidebar from './Components/dashboard/Sidebar';
import Home from './Components/Home';
import Dashboard from './Components/dashboard/Dashboard';
import EditProfile from './Components/EditProfile';
import PlanBudget from './Components/PlanBudget';
import Login from './Components/Login';
import Signup from './Components/Signup';

import {initialState,reducer} from "../src/reducer/useReducer"

export const Usercontext = createContext();

const Routing = () =>{
  return (
    <Switch style={{backgroundColor:"red"}}>
      <Route exact path="/">
      <Home />
      </Route>

      <Route path="/Dashboard">
      <Sidebar/>
      <Dashboard />
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
    
    <div className= "dark-mode">
    <Usercontext.Provider value={{state, dispatch}}>
    <Navbar />
    <Routing />
    </Usercontext.Provider>
    </div>
  );
}

export default App;
