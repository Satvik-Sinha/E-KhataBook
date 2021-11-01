const mongoose = require('mongoose');

const ExpenseDataSchema = new mongoose.Schema({
    username:{
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
    extraExpences:{
        type: Number,
    },
    bonusReceived:{
        type: Number,
    },
    loan:{
        type: Array,
    }
    
})

module.exports = ExpenseData = mongoose.model('expenseData', ExpenseDataSchema);