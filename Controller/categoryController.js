const catService=require('../Service/categoryService.js');


const createCat=async(req,res)=>{
    const {catName,price}=req.body; 
    try{
        const data=await catService.createcat(catName,price);
        if(data){
            res.status(201).json(data);
        }
        else{
            res.status(400).json({message:'something went wrong'});
        }
    }catch(e){
        throw new Error(e);
    }
}
const GetAllCat=async(req,res)=>{
    try{
        const data=await catService.getAllcat();
        if(data){
            res.status(201).json(data);
        }else{
            res.status(400).json({message:'not category found'});
        }

    }catch(e){
        res.status(400).json({message:'something is error'});
    }
}

const GetCatByid=async(req,res)=>{
    const {id}=req.params;
    try{
        const cat=await catService.catByid(id);
        if(cat){
            res.status(201).json(cat);
        }else{
            res.status(400).json({message:'there is no any category'});
        }
    }catch(e){
      res.status(500).json({message:'something wrong'})
    }
}


module.exports={createCat,GetAllCat,GetCatByid};