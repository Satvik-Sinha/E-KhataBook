import React from 'react'
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ExpenseCategories from './Components/ExpenseCategories';
import VisualizeExpense from './Components/VisualizeExpense';
import PlanBudget from './Components/PlanBudget';
import Login from './Components/Login';
import Signup from './Components/Signup';

const App = () => {
  return (
    <>
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/ExpenseCategories">
    <ExpenseCategories />
    </Route>

    <Route path="/VisualizeExpense">
    <VisualizeExpense />
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
    </>
  );
}

export default App;
