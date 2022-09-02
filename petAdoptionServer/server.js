
const express = require('express');
const app =express();
const bodyParser=require('body-parser')
const db = require('./config/database')
const port = 4000;
const cookieParser = require('cookie-parser')
const cors = require('cors');
require('dotenv').config() //pour acceder au fichier env 
const passport = require('passport');
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())
// to read body from request
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))
 
app.get('/',(req,res)=>{
    res.send('bonjour')
})

const userRouter=require('./Router/userRouter');
const postRouter=require('./Router/postRouter');
const especeRouter=require('./Router/especeRouter');
const demandeRouter=require('./Router/demandeRouter');
const maladieRouter=require('./Router/maladieRouter');
const symptomeRouter=require('./Router/symptomeRouter');

app.use('/users',userRouter)
app.use('/especes',especeRouter)
app.use('/post',postRouter)
app.use('/demande',demandeRouter)
app.use('/maladie',maladieRouter)
app.use('/symptome',symptomeRouter)


app.get('/getfile/:image', function(req,res){
    res.sendFile(__dirname + '/upload/' + req.params.image)//pour afficher limage:hezni lel dossier upload wafichili limage
  })

// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function(req,res, next) {
    let err = new Error();
       err.status = 404;
       next(err);
   });
   // handle errors
   app.use(function(err, req, res, next) {
    console.log(err);
     if(err.status === 404)
      res.status(404).json({message: " Path Not found"});
     else 
       res.status(500).json({message: "Something looks wrong "});
   });



app.listen(port,console.log(` server running at http://localhost: ${port}`))