import mongoose from 'mongoose'
import Food from '../models/Food.js';


export const createFood = async (req,res) =>{
    const food = new Food({
        title : req.body.title,
        price : req.body.price,
        img : req.body.img,
        ingrendients: req.body.ingrendients,
        category : req.body.category
    })

    
      
       try{
           Food.findOne({title:food.title}, function(err,data){
               if(err) console.log(err)
               if(data){
                   res.send("Food already saved")
               }else{
                  food.save()    
                 .then(res.status(201).send(food.title +" " +"Added on db"))
                 .catch(err =>{
                     res.send({message:err})
                 }) 
               }
           }) 
       }catch(err){
            console.log(err)
       }
        
    
    
    
}

export const getAllFoods  = async (req,res) =>{
  
  try{
    const foods = await Food.find();
    res.send(foods);
  }catch(err){
      console.log(err)
  }
   
}

export const getById = async(req,res) =>{
    try{
        const food = await Food.findById(req.params.id)
        res.send(food)
    }catch(err){
        console.log(err)
    }
    
}