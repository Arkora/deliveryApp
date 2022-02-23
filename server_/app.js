import express  from "express";
const express = require("express")
const router = require('./routes/FoodRoutes');



const app = express();
const PORT = 8000;

app.use("foods",router);


app.get('/',(req,res) => {
    res.send("hello");
});



 app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
