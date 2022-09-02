
const maladieController=require('../Controller/maladieController');
const express=require('express');
const userController = require('../Controller/userController');
const route=express.Router();



route.post('/create',maladieController.createmaladie);
route.delete('/delete/:id',maladieController.deletemaladie);
route.put('/update/:id',maladieController.updatemaladie);
route.get('/getAll',maladieController.Allmaladie);
route.get('/getone/:id',maladieController.getOnemaladie);
route.post('/getBySymptomes',maladieController.getBySymptomes);



module.exports=route;
