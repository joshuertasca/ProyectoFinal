const mongoose = require("mongoose");
const ContactoShema = mongoose.Schema({
    
    correo: {
        type: String,
        required: true
    },
    
    nombre: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    acepta_terminos: {
        type: Boolean,
        required: true
    },
    fec_cre:{
        type:Date,
        default: Date.now()
    }

})

module.exports= mongoose.model('Contacto',ContactoShema);

