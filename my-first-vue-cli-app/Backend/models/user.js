// Import de Mongoose
const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

// Création d'un Schéma
const userSchema = mongoose.Schema({
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Name: {type : String, required: true},
    FirstName: {type: String, required: true},
    City: {type: String, required: true},
    Adress: {type : String, required: true},
    Birthday: {type: String ,required: true},
    Grade:{type: String, required: true}
});


userSchema.plugin(uniqueValidator);


module.exports = mongoose.model('User', userSchema);