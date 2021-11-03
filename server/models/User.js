const mongoose = require('mongoose');

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
    confirmpassword:{
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
    }
})

module.exports = User = mongoose.model('user', UserSchema);