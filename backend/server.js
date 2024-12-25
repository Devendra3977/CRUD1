const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const ConnectDB = require("./config/db");
const path = require("path");
// load envirnment variable form .env file
dotenv.config();

// connect to the database
ConnectDB();
const app = express();
app.use(cors());
// middleware for parsing data
app.use(express.json());

//signup routes
const signupRoute = require('./routes/signupRoute');
app.use('/user', signupRoute);

// start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});