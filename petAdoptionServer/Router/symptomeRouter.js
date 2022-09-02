
const symptomeController=require('../Controller/symptomeController');
const express=require('express');
const userController = require('../Controller/userController');
const route=express.Router();



route.post('/create',symptomeController.createsymptome);
route.delete('/delete/:id',symptomeController.deletesymptome);
route.put('/update/:id',symptomeController.updatesymptome);
route.get('/getAll',symptomeController.Allsymptome);
route.get('/getone/:id',symptomeController.getOnesymptome);



module.exports=route;
