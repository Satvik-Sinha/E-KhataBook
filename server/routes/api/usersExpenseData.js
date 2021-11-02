const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator/check')
const ExepenseData = require('../../models/ExpenseData')

// router.get('/', (req, res) => res.send('User route'));

router.post('/', async (req, res) => {

    // const email = req.body.email; 
    // var food = 0, clothing = 0, travel = 0, dailyAccessories = 0, extraExpenses = 0, bonusReceived = 0, loan = 0, salary=0;
    // if(req.body.food){
    //     food = req.body.food;
    // }
    // if(req.body.clothing){
    //     clothing = req.body.clothing;
    // }
    // if(req.body.travel){
    //     travel = req.body.travel;
    // }
    // if(req.body.dailyAccessories){
    //     dailyAccessories = req.body.dailyAccessories;
    // }
    // if(req.body.extraExpenses){
    //     extraExpenses = req.body.extraExpenses;
    // }
    // if(req.body.bonusReceived){
    //     bonusReceived = req.body.bonusReceived;
    // }
    // if(req.body.loan){
    //     loan = req.body.loan;
    // }
    // if(req.body.salary){
    //     salary = req.body.salary;
    // }


    // try{
    //     expenseData = new ExpenseData({
    //         email, food, clothing, travel, dailyAccessories, extraExpenses, bonusReceived, loan
    //     });
    //     console.log(food);
    //     await expenseData.save();
    //     res.send('expenseData Registered');

    // }catch(err){
    //     console.error(err.message);
    //     res.status(500).send('Server error');
    // }
}); 

router.post('/transaction', async (req, res) => {

    var email = "None"; 
    let food = 0, clothing = 0, travel = 0, dailyAccessories = 0, extraExpenses = 0, bonusReceived = 0,loan=0, salary=0,totalExpenses=0,totalSalary=0;

    if(req.body.email){
        email = req.body.email;
    }
    if(req.body.food){
        food = req.body.food;
    }
    if(req.body.clothing){
        clothing = req.body.clothing;
    }
    if(req.body.travel){
        travel = req.body.travel;
    }
    if(req.body.dailyAccessories){
        dailyAccessories = req.body.dailyAccessories;
    }
    if(req.body.extraExpenses){
        extraExpenses = req.body.extraExpenses;
    }
    if(req.body.bonusReceived){
        bonusReceived = req.body.bonusReceived;
    }
    if(req.body.loan){
        loan = req.body.loan;
    }
    if(req.body.salary){
        salary = req.body.salary;
    }
    if(req.body.totalExpenses){
        totalExpenses = req.body.totalExpenses;
    }
    if(req.body.totalSalary){
        totalSalary = req.body.totalSalary;
    }

    food = parseInt(food, 10);
    clothing = parseInt(clothing, 10);
    travel = parseInt(travel, 10);
    dailyAccessories = parseInt(dailyAccessories, 10);
    extraExpenses = parseInt(extraExpenses, 10);
    bonusReceived = parseInt(bonusReceived, 10);
    salary = parseInt(salary, 10);
    totalExpenses = parseInt(totalExpenses, 10);
    totalSalary = parseInt(totalSalary, 10);

    totalExpenses+=food+clothing+travel+dailyAccessories+extraExpenses ;
     totalSalary+= bonusReceived+salary;

     req.body.totalExpenses=totalExpenses;
     req.body.totalSalary=totalSalary;
    try{
        expenseData = new ExpenseData({
            email, food, clothing, travel, dailyAccessories, extraExpenses, bonusReceived, loan, salary,totalExpenses,totalSalary
        });
        // console.log(food);
        // console.log(clothing);
        // console.log(travel);
        // console.log(dailyAccessories);
        // console.log(extraExpenses);
        // console.log(bonusReceived);
        // console.log(loan);
        // console.log(salary);
        // console.log(email);
        // console.log(totalExpenses);
        // console.log(totalSalary);
        
        await expenseData.save();
        res.status(200).json({message : "expenseData Registered"});

    }catch(err){
        console.error(err.message);
        res.status(400).json({error : "Server error"});
    }


    // const userLogin = ExpenseData.findOne({email : email})
    // .then((userLogin) =>{
    //     if(userLogin)
    //     {
            
    //     }
    //     else
    //     {
           
    //     }
       
    // }).catch((err) =>res.status(400).json({error : "Invalid Details"}));
}); 

module.exports = router;

