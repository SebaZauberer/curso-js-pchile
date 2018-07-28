const mongoose = require('mongoose');
const schema = mongoose.Schema;
var persona = new schema({
    name: String,
    lastName: String,
    age: Number,
    address: {
        calle: String,
        numero: Number
    },
    contact:{
        tel: Number,
        cel: Number,
        email: String
    }
});

module.exports = mongoose.model('Persona', persona);