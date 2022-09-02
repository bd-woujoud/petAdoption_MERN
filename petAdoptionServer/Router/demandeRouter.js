
const demandeController=require('../Controller/demandeController');
const express=require('express');
const userController = require('../Controller/userController');
const route=express.Router();



route.post('/createdemande',demandeController.createdemande,userController.sendMail);
route.delete('/deletedemande/:id',demandeController.deletedemande);
route.put('/updatedemande/:id',demandeController.updatedemande);
route.get('/getAlldemande',demandeController.Alldemande);
route.get('/getonedemande/:id',demandeController.getOnedemande);



module.exports=route;
