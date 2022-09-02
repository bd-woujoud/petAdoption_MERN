const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maladieSchema = new Schema({
    
    nom: { type: String, required: true, unique: true },
    
    symptomes:[{

        type:mongoose.Schema.Types.ObjectId,
        ref:'symptome'
    }],
},

    { timestamps: true }

)

module.exports = mongoose.model('maladie', maladieSchema)

