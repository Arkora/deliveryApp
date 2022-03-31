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
    res.status(200).send(foods);
  }catch(err){
      console.log(err)
  }
   
}

export const getById = async(req,res) =>{
    try{
        const food = await Food.findById(req.params.id)
        res.status(200).send(food)
    }catch(err){
        console.log(err)
    }
    
}

export const updateFood = async(req,res) =>{
    const {id} = req.params
    const {title,price,img,ingrendients,category} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Food with id: ${id}`);

    const updatedFood = {title,price,img,ingrendients,category,_id:id}

    try {
        await Food.findByIdAndUpdate(id,updatedFood)
        res.status(200).send(title +" " +"Updated")
    } catch (err) {
        console.log(err)
    }
}

export const deleteFood = async(req,res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Food with id: ${id}`);
    try {
       await Food.findByIdAndDelete(id)
       res.status(200).send("Deleted")

    } catch (err) {
        console.log(err)
    }
}