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
import About from './Components/About';

import {initialState,reducer} from "./reducer/useReducer"

export const UserContext = createContext();

const Routing = () =>{
  return (
    <Switch>
      <Route exact path="/">
      <Home value={false}/>
      </Route>

      <Route path="/Home">
      <Home value={true}/>
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
      
      <Route path="/About">
      <About />
      </Route>

      <Route path="/Login">
      <Login />
      </Route>

      <Route path="/Signup">
      <Signup />
      </Route>

      <Route path="/MyProfile">
      <MyProfile 
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
    <UserContext.Provider value={{state, dispatch}}>
    <Navbar />
    <Routing />
    </UserContext.Provider>
    </div>
  );
}

export default App;
