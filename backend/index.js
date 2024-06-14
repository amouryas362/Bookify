const express = require("express");
const axios = require('axios');
const cors = require('cors'); 
const app = express();

require("dotenv").config();
app.use(express.json());




const bookSchema = require("./models/bookSchema"); 
const userschema = require("./models/userSchema");


const home = require("./routes/bookify_routes");
const signup = require("./routes/user_routes");
const login = require("./routes/user_routes");
app.use("/api/v1",home);
app.use("/api/v1",signup);
app.use("/api/v1",login);


app.use(cors({
      origin: 'http://localhost:5173'
}));
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    try{

        console.log(`Server Started at ${PORT}`);
    }
    catch(err)
    {
        console.log(`Issue in starting server `);
    }
})


const dbconnect = require("./config/dbconnect");
dbconnect();





