import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import foodRouter from "./routes/foodRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import Cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();
const app = express();

const PORT = 8000;

app.use(Cors());
app.use(bodyParser.json());

app.use("/orders",orderRouter)
app.use("/foods",foodRouter);



app.get('/',(req,res) =>{
    res.send("Api v1.0");
});

mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("DB Connected")
})

app.listen(PORT)
