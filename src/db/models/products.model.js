import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    
    description: {
        type: String,
        required: true,
        unique: true
    },
    
    price:{
        type: Number,
        required: true,   
    },
    
    thumbnail:{
        type: String,
        unique: true
    },
    
    code:{
        type: String,
        required: true,
        unique: true
    },
    
    stock:{
        type: Number,
        required: true,
        default: 0
    },

})


export const productsModel = mongoose.model('Products', productsSchema)