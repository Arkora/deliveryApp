import mongoose from "mongoose";

const Schema = mongoose.Schema;

const product = new Schema({

    id:{
        type: String
    },
    title:{
        type: String
    },
    quantity:{ 
        type: Number
    },
    price:{
        type: Number
    },
    subTotal:{
        type: Number
    },
    ingrendients:{
        type: Array
    }
    
})


const OrderSchema = new Schema({
    products:[product],
    message:{
        type: String        
    },
    total:{
        type: Number,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

export default(mongoose.model('Order', OrderSchema))