const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const especeSchema =new Schema({

nom_Espece:{

    type:String,
    required:true,
    unique:true
},

post:[{

    type:mongoose.Schema.Types.ObjectId,
    ref:'post'
}]

},

{timestamps:true}

)


module.exports=mongoose.model('espece',especeSchema)

