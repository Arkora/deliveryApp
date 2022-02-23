import { v4 } from "uuid";

let foods = [];

export const createFood = (req,res) =>{
    const food = req.body;

    foods.push({...food,id: uuid()});
    console.log(`Food [${food.title}] added to datatabase`);
}