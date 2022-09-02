const express = require('express')
const userController = require('../Controller/userController');
const route = express.Router();
const jwt=require('jsonwebtoken')
const passport=require('passport');
const demandeController = require('../Controller/demandeController');
require('../passport.config')
const LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;


route.post('/registre',userController.registre);
route.post('/login', passport.authenticate('local', {session: false}),userController.login);
route.get('/logout',userController.logout);
route.delete('/deleteuser/:id',userController.deleteuser);
route.put('/updateuser/:id',userController.updateuser);
route.get('/getAlluser',userController.Alluser);
route.get('/getuserbyrole',userController.Alluserbyrole);

route.post('/sendMail',userController.sendMail,demandeController.createdemande);
route.get('/getoneuser/:id',passport.authenticate('jwt', {session: false}),userController.getOneuser);
route.get('/authenticated',passport.authenticate('jwt', {session: false}) , userController.authenticated)


module.exports=route;
