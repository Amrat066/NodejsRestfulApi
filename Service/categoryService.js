const Category=require('../model/Category.js');

const createcat=async(catName,price)=>{
    const data=new Category({
        catName,
        price
    });
   return await data.save();
}
const getAllcat=async()=>{
    const data=await Category.find();
    return data;
}

const catByid=async(id)=>{
    const data=await Category.findById(id);
    return data;
}

module.exports={createcat,getAllcat,catByid};
