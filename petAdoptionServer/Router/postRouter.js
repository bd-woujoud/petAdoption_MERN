const postController=require('../Controller/postController');
const express=require('express');
const upload = require('../middleware/upload');
const route=express.Router();


route.post('/addpost',upload.single('image'),postController.createpost);
route.delete('/deletepost/:id',postController.deletepost);
route.put('/updatepost/:id',postController.updatepost);
route.get('/getAllpost',postController.Allpost);
route.get('/getonepost/:id',postController.getOnepost);

route.get('/search',postController.Searchpost);
route.get('/allbyuser/:id',postController.AllpostbyuserId);
route.get('/allbyuEspece/:id',postController.getPostbyEspece);


module.exports=route;
