
const especeController=require('../Controller/especeController');
const express=require('express');
const route=express.Router();



route.post('/addespece',especeController.createespece);
route.delete('/deleteespece/:id',especeController.deleteespece);
route.put('/updateespece/:id',especeController.updateespece);
route.get('/getAllespece',especeController.Allespece);
route.get('/getoneespece/:id',especeController.getOneespece);



module.exports=route;
