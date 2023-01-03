const { default: mongoose } = require("mongoose");
const DB = process.env.DATABASE;
mongoose.set('strictQuery',false);
mongoose.connect(DB).then(()=>{
    console.log('Connection Successful');
}).catch((err)=>console.log("no connection"));
