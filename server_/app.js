import express from "express";
import router from "./routes/foodRoutes.js";
import { createFood } from "./controllers/foodController.js";

const app = express();

const PORT = 8000;

app.get('/',(req,res) =>{
    res.send("Hello");
});

router.post('/uploadFood', createFood);

app.listen(PORT)
