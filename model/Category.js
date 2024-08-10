const mongoose=require('mongoose');
const catschema=new mongoose.Schema({
    catName:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    created_At:{
        type:Date,
        default:Date.now
    }
},{versionKey:false});

module.exports=mongoose.model('Category',catschema);

