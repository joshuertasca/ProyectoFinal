const mongoose = require("mongoose");
const ProfesorShema = mongoose.Schema({
    
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    edad:{
        type: Number,
        required:true
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
    estudiantes: {
        type: Object,
        required: true
    },
    fec_cre:{
        type:Date,
        default: Date.now()
    }

})

module.exports= mongoose.model('Profesor',ProfesorShema);

