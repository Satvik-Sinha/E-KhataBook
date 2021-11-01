const express = require('express');
const router = express.Router();

require('../DB/conn');
const User = require("../model/userSchema");

router.get('/',(req,res) =>{
    res.send( `Hello World` );
});

router.post('/Signup' , (req,res) => {
    const {name,email,username,password,confirmpassword} = req.body;
    
    if(!name || !email || !username || !password || !confirmpassword)
    {
        return res.status(422).json({error : "Field Incomplete"});
    }
    if(password != confirmpassword)
    {
        return res.status(422).json({error : "Re-enter Password"});
    }
    User.find({email : email})
    .then((userExist) =>{
        if(userExist)
        {
            return res.status(422).json({error : "User Already Exist"}); 
        }

        const user = new User({name,email,username,password,confirmpassword});

        user.save().then(() => {
            res.status(201).json({message : "User Registered Successfully"});
        }).catch((err) => res.status(500).json({error : "Failed to Register"}));
    }).catch((err) => {console.log(err)});
});

router.post('/Login',(req,res) =>{
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
                res.json({message : "User Signin Successfully"});
            }
            else
            {
                res.json({message : "Wrong Details"});
            }
        }
        else
        {
            res.json({message : "Wrong Details"});
        }
       
    }).catch((err) =>res.status(500).json({error : "Invalid Details"}));
});

module.exports = router;