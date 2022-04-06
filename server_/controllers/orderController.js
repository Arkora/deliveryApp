import mongoose from "mongoose";
import Order from '../models/Order.js'

export const postOrder = async (req,res) => {
    const {products,message,total} = req.body
    
    try {        
       const newOrder = new Order({products,message,total})        
        await newOrder.save()
        res.status(201).send("Order Deliveried")
    } catch (error) {
        res.send(error.message)
    }
}

export const getOrders = async (req,res) =>{
    try {

        const orders = await Order.find()
        res.status(200).send(orders);
        
    } catch (error) {
        res.status(404).send(error.message)
        
    }
}