const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () =>{
    mongoose.connect(process.env.DB_URL,{
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connection successfull")
    }).catch((err) => {
        console.log("Issue in connecting DB");
        console.error(err);
        process.exit(1);
    });
}

module.exports = dbconnect ;