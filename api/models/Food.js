import mongoose from "mongoose";


const FoodSchema = mongoose.Schema({
        
    title:{
        type: String,
        required: true,
        unique:true        
    },
    price:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    ingrendients:{
        type: Array,
        required: true
    },
    category:{
        type: String,
        required: true
    }

})

export default(mongoose.model('Food', FoodSchema))