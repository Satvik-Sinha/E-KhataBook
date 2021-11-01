const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator/check')
const User = require('../../models/User')

// router.get('/', (req, res) => res.send('User route'));

router.post('/', async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
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
}); 

router.post('/register', async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    var age = "NULL";
    var income = "NULL";
    var profilePicture = "NULL";
    // if(!req.body.age){
    //     console.log("Age Missing Update it in Your Profile Section")
    // }else{
    //     age = req.body.age;
    // }
    // if(!req.body.income){
    //     console.log("Income Missing Update it in Your Profile Section")
    // }else{
    //     income = req.body.income;
    // }
    // if(!req.body.profilePicture){
    //     console.log("ProfilePicture Missing Update it in Your Profile Section")
    // }else{
    //     profilePicture = req.body.profilePicture;
    // }

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
            income
        });
        // console.log(age);
        await user.save();
        res.status(200).json({message : "User Registered"});

    }catch(err){
        console.error("user already exist");
        res.status(422).json({error : "user already exist"});
    }
}); 

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

