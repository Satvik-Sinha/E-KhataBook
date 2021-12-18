const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        unique: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
    },
    age:{
        type: Number
    },
    gender:{
        type: String
    },
    income:{
        type: Number
    },
    profilePicture:{
        type: String
    },
    food:{
        type: Number,
    },
    clothing:{
        type: Number,
    },
    travel:{
        type: Number,
    },
    dailyAccessories:{
        type: Number,
    },
    extraExpenses:{
        type: Number,
    },
    bonusReceived:{
        type: Number,
    },
    loan:{
        type: Array,
    },
    totalExpenses:{
        type: Number,
    },
    totalIncome:{
        type: Number,
    },
    monthlyExpenses:{
        type: Object,
    },
})



//For Hashing Password
UserSchema.pre('save',async function(next){
    //console.log("Hi Pre");
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
    }
    next();
});
const User = mongoose.model('user', UserSchema);
module.exports = User;