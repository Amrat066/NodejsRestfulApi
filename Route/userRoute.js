const usercontroller=require('../Controller/userController.js');
const categoryController=require('../Controller/categoryController.js');
const postController=require('../Controller/postController.js');
const express=require('express');
const app=express();


//UserRoutes
app.post('/ragister',usercontroller.ragisterUser);
app.post('/login',usercontroller.login);
app.get('/getAlluser',usercontroller.getallUsers);
app.get('/getUserbyId/:id',usercontroller.getuserByid);
app.put('/updateuser/:id',usercontroller.updateUser);
app.delete('/deleteuser/:id',usercontroller.deleteUser);


//CategoryRoute
app.post('/createcat',categoryController.createCat);
app.get('/getallcat',categoryController.GetAllCat);
app.get('/getcatbyid/:id',categoryController.GetCatByid);

//PostRoutes

app.post('/createpost',postController.createPost);
app.get('/getallpost',postController.getAllPosts);
app.get('/getpostbyuserid/:userId',postController.getPostsByUserId);
app.get('/getpostbyid/:postId',postController.getPostById);
app.put('/updatepost/:postId',postController.updatePost);
app.delete('/deletepost/:postId',postController.deletePost);
module.exports=app;