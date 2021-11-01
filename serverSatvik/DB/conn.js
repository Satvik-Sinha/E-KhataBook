const mongoose = require('mongoose');

const DB = 'mongodb+srv://root:ExpenseManager@expensemanager.ydqmv.mongodb.net/User?retryWrites=true&w=majority'

mongoose.connect(DB,{
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
}).then(() => {
    console.log(`Connection with DB Successful`);
}).catch((err) => console.log(`No Connection`));
