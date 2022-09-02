const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const demandeSchema =new Schema({

adoptant:{

    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
},

post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'post'
}
},

{timestamps:true}

)


module.exports=mongoose.model('demande',demandeSchema)

