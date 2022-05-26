const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DBConnection Successful")).catch((err)=>{console.log(err);});

app.get("/api/test",()=>{
    console.log("test is successfull")
})

app.use(express.json());
// User endpoint
app.use("/api/users/",userRoute);
app.use("/api/auth",authRoute);



app.listen(5000, ()=>{
    console.log('backend is running');
})