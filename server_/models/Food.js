import mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const FoodSchema = mongoose.Schema({
    id:{
        type: String,
        default: uuid()
        
    },    
    title:{
        type: String,
        required: true
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