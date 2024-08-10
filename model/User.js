const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:Number,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
      },
    address:{
        type:String,
        required:true
    },
    created_At:{
        type:Date,
        default:Date.now
    }
}, { versionKey: false });
 module.exports=mongoose.model('userdata',UserSchema);
