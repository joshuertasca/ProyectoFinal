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
    cursos: {
        type: Array,
        required: true
    },
    examenes: {
        type: Array,
        required: true
    },
    fec_cre:{
        type:Date,
        default: Date.now()
    }

})

module.exports= mongoose.model('Profesor',ProfesorShema);

