const mongoose = require('mongoose');
const express = require('express');
const app = express();

require (`./DB/conn`);
//const User = require(`./model/userSchema`);
app.use(express.json);
app.use(require(`./router/auth`));

// middleware();
// const middleware =(req,res,next) =>{
//     console.log("Hello Middleware");
//     next();
// }

// app.get('/',(req,res) =>{
//     res.send( `Hello World` );
// })
app.get('/DailyTransaction',(req,res) =>{
    res.send( `Hello World DailyTransaction` );
})
app.get('/Dashboard',(req,res) =>{
    res.send( `Hello World Dashboard` );
})
app.get('/EditProfile',(req,res) =>{
    res.send( `Hello World EditProfile` );
})
app.get('/Login',(req,res) =>{
    res.send( `Hello World Login` );
})
app.get('/Signup',(req,res) =>{
    res.send( `Hello Signup` );
})
app.listen(5000, () => {
    console.log("Server is running at port 5000");
})
