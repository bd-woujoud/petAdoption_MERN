const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const symptomeSchema = new Schema({
    nom: { type: String, required: true, unique: true },
    
},

    { timestamps: true }

)

module.exports = mongoose.model('symptome',symptomeSchema)

