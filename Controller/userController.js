const userService=require('../Service/userService.js');
const ragisterUser=async(req,res)=>{
    const {username,password,email,address}=req.body;
    try{
        const user=await userService.register(username,password,email,address);
        if(user){
            res.status(201).json(user);
        }else{
            res.status(400).json({message:'something error'});
        }

    }catch(err){
        res.status(400).send(err.message);
    }
}

const getallUsers=async(req,res)=>{
    try{
        const data=await userService.getallUser();
        if(data){
            res.status(201).json(data);
        }
        else{
            res.status(400).json({message:'there is no any user'});
        }
    }catch(err){
        res.status(500).json({message:'something error'});
    }
}
const getuserByid=async(req,res)=>{
    const {id}=req.params;
    try{
        const data=await userService.getuserbyId(id);
        if(data){
            res.status(201).json(data);
        }
        else{
            res.status(400).json({message:'there is no any user'});
        }
    }catch(err){
        res.status(500).json({message:'something error'});
    }
}
const deleteUser=async(req,res)=>{
    const {id}=req.params;
    try{
        const user=await userService.deleteUser(id);
        if(!user) return res.status(404).send('user not found');
        res.send('User gone');
    }catch(err){
        res.status(400).json({message:'something error'});
    }
}

const login=async(req,res)=>{
    const {username,password}=req.body;
    try{
        const user=await userService.login(username,password);
        if(user) return res.status(200).json({message:'login successfully'});
        return res.status(400).json({message:'error'});

    }catch(err){
        res.status(500).json({message:'somethign wrong'});
    }
}

const updateUser = async (req, res) => {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      if (!user) return res.status(404).send('User not found');
      res.send(user);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  

module.exports={ragisterUser,login,getallUsers,getuserByid,deleteUser,updateUser};