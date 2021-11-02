const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator/check')
const User = require('../../models/User')
var defaultURL = require("../../config/default.json");


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

