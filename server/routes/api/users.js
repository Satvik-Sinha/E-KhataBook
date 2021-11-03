const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator/check')
const User = require('../../models/User')
var defaultURL = require("../../config/default.json");

const ExepenseData = User;

//this is to get all the data present in database
router.get('/', async (req, res) =>{

    User.find()
    .then(result => {
        res.status(200).json({
            userData: result
        })
    })
    .catch(err => {
        console.log(err.message);
        res.status(500).json({
            error: err
        })
    });
});

//this is to post given data from signup page
router.post('/', async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    var age = "NULL";
    var income = "NULL";
    var profilePicture = "NULL";
    if(!req.body.age){
        console.log("Age Missing Update it in Your Profile Section")
    }else{
        age = req.body.age;
    }
    if(!req.body.income){
        console.log("Income Missing Update it in Your Profile Section")
    }else{
        income = req.body.income;
    }
    if(!req.body.profilePicture){
        console.log("ProfilePicture Missing Update it in Your Profile Section")
    }else{
        profilePicture = req.body.profilePicture;
    }

    try{
        user = new User({
            name,
            email,
            username,
            password,
            age,
            income
        });
        // console.log(age);
        await user.save();
        res.send('User Registered');

    }catch(err){
        console.error("user alread exist");
        res.status(500).send('Server error');
    }
}); 

router.post('/register', async (req, res) => {


    
    let food = 0, clothing = 0, travel = 0, dailyAccessories = 0, extraExpenses = 0, bonusReceived = 0,loan=0, salary=0,totalExpenses=0,totalSalary=0;

    
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

    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    var age = "NULL";
    var income = "NULL";
    var profilePicture = "NULL";

    if(!name || !email || !username || !password || !confirmpassword)
    {
        return res.status(422).json({error : "Field Incomplete"});
    }
    if(password != confirmpassword)
    {
        return res.status(422).json({error : "Re-enter Password"});
    }

    try{
        user = new User({
            name,
            email,
            username,
            password,
            confirmpassword,
            age,
            income,
            email, food, clothing, travel, dailyAccessories, extraExpenses, bonusReceived, loan, salary,totalExpenses,totalSalary
        });
        // console.log(age);
        await user.save();
        res.status(200).json({message : "User Registered"});

    }catch(err){
        console.error("user already exist");
        res.status(422).json({error : "user already exist"});
    }
}); 

//this is to get data of a specific user
router.get('/get/:id',(req, res) => {

    User.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//this is to update the specific user
router.put('/update/:id', (req, res) => {
    console.log(req.body);
    User.findOne({__id: req.params.id}, (err, foundUser) =>{
        if(err){
            console.log(err);
        }else{
            const user = {
                name:       req.body.name,
                username:   req.body.username,
                email:      req.body.email,
                age:        req.body.age,
                income:     req.body.income,
                password:   req.body.password,
                gender:     req.body.gender,
                food : req.data.food,
                clothing : req.data.clothing,
                travel : req.data.travel,
                dailyAccessories : req.data.dailyAccessories,
                extraExpenses : req.data.extraExpenses,
                bonusReceived : req.data.bonusReceived
            }
            User.findByIdAndUpdate(foundUser._id, user, function(err, updatedProfile){
                if(err){
                    console.log(err);
                }else{
                    console.log(user);
                    res.statusCode === 200 ? res.json("profile updated") : res.json('oops something went wrong')
                }
            })

            // below line is to create user if not found

            // if(foundUser === null){
            //     // User.create(user, function(err, createdProfile) {
            //     //     if(err){ console.log(err);}
            //     //     else {res.statusCode ===200 ? res.json("profile created") : res.json('oops something went wrong')};
            //     // })
            //     console.log("user not found");
            // }else{
            //     User.findByIdAndUpdate(foundUser._id, user, function(err, updatedProfile){
            //         if(err){
            //             console.log(err);
            //         }else{
            //             console.log(user);
            //             res.statusCode === 200 ? res.json("profile updated") : res.json('oops something went wrong')
            //         }
            //     })
            
            // }
        }
    });
});

//this will be used to delete given user
router.route('/delete/:id').delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})



router.post('/login',(req,res) =>{
    const {email,password} = req.body;
    
    if(!email || !password )
    {
        return res.status(400).json({error : "Field Incomplete"});
    }
   const userLogin = User.findOne({email : email})
    .then((userLogin) =>{
        if(userLogin)
        {
            if(password==userLogin.password)
            {
                res.status(200).json({message : "User Signin Successfully"});
            }
            else
            {
                res.status(400).json({message : "Wrong Details"});
            }
        }
        else
        {
            res.status(400).json({message : "Wrong Details"});
        }
       
    }).catch((err) =>res.status(400).json({error : "Invalid Details"}));
});
 
module.exports = router;

