const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator/check')
const ExepenseData = require('../../models/ExpenseData')

// router.get('/', (req, res) => res.send('User route'));

router.post('/', async (req, res) => {

    const username = req.body.username; 
    var food = 0, clothing = 0, travel = 0, dailyAccessories = 0, extraExpenses = 0, bonusReceived = 0;
    var loan = req.body.loan;
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


    try{
        expenseData = new ExpenseData({
            username, food, clothing, travel, dailyAccessories, extraExpenses, bonusReceived, loan
        });
        console.log(food);
        await expenseData.save();
        res.send('expenseData Registered');

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
}); 

module.exports = router;

