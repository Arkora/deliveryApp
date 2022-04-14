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

export const deleteOrder = async(req,res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Order with id: ${id}`);
    try {
        await Order.findByIdAndDelete(id)
       res.status(200).send("Deleted")
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export const getOrder = async(req,res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Order with id: ${id}`);
    try {
       const order = await Order.findOne({_id:id})
       res.status(200).send(order)
    } catch (error) {
        res.status(404).send(error.message)
    }
}