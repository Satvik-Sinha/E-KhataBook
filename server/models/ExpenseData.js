const mongoose = require('mongoose');

const ExpenseDataSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
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

module.exports = ExpenseData = mongoose.model('expenseData', ExpenseDataSchema);