const User=require('../model/User.js');

const register=async(username,password,email,address)=>{

    const existuser=await User.findOne({email});
    if(existuser){
        console.log("User is already exist with this email");
    }
    const user=new User({username,password,email,address});
    await user.save();
    return user;
}

const login=async(username,password)=>{
    const user=await User.findOne({username});
    if(!user || user.password!=password){
        throw new Error('Invalid credential');
    }
    return user;
}

const deleteUser=async(id)=>{
    const user=await User.findByIdAndDelete(id);
    return user;
}

const getallUser=async()=>{
    const user=await User.find();
    return user;
}
const getuserbyId=async(id)=>{
    const user=await User.findById(id);
    return user;
}

const updateUser=async(id,data)=>{
    const user=await User.findByIdAndUpdate(id,data,{new:true});
    return user;    
}

module.exports={register,login,getallUser,getuserbyId,updateUser,deleteUser}