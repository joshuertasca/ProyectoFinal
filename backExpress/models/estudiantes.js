const mongoose = require("mongoose");
const EstudianteShema = mongoose.Schema({
    usuarioProfesor: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    fec_cre:{
        type:Date,
        default: Date.now()
    }

})

module.exports= mongoose.model('Estudiante',EstudianteShema);

