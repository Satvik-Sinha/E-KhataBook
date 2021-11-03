const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    confirmpassword:{
        type: String,
        required: true
    },
    age:{
        type: String
    },
    
    gender:{
        type: String
    },
    income:{
        type: String
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
    salary:{
        type: Number,
    },
    totalExpenses:{
        type: Number,
    },
    totalSalary:{
        type: Number,
    }
})

module.exports = User = mongoose.model('user', UserSchema);