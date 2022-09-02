const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({

    nom: {

        type: String,
        required: true
    },

    age: {

        type: Number,
        required: true

    },

    sexe: {

        type: String,
        required: true
    },
    description: {

        type: String,
        required: true
    },

 
    image: {
            type: String,
            required: true
    }
    
,
    adresse: {
        type: String,
        required: true
    },

    espece: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'espece'
    },

    adoptant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }


},

    { timestamps: true }

)

module.exports = mongoose.model('post', postSchema)

