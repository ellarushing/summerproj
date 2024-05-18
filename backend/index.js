const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//User clicks "create account"

// prompt user to fill in forms

// create user

app.listen(3000, () => {
    console.log("server has started on port 3000");

});