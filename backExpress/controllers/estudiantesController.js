const Estudiante = require("../models/estudiantes")

exports.crearEstudiante =async(req, res)=>{

    console.log(req.body)

    try {
        let estudiantes
        estudiantes = new Estudiante(req.body)  //la informacion cuando se llama se almacena en el body del request
          //la informacion cuando se llama se almacena en el body del request

        await estudiantes.save();

        res.send(estudiantes)

    } catch (error) {
        console.log(error)
        res.status(500).send("hay error")
    }
}


exports.obtenerEstudiantes = async(req, res) => {
    try {
        
        let estudiante = await Estudiante.find();
        res.json(estudiante);
    } catch (error){
        console.log(error)
        res.status(500).send("hay un error")
    }
}

exports.obtenerEstudiante = async(req, res) => {
    try {
        let estudiante = await Estudiante.findOne({"usuario":req.params.usuario})   //req.params es para adquirir la id que le enviamos al url y que llame el objeto especifico
        if (!estudiante) {
            res.status(404).json({mensaje:"no existe"})
        }
        res.json(estudiante);

    } catch (error){
        console.log(error)
        res.status(500).send("hay error")
    }

}

exports.actualizarEstudiante = async(req, res) => {
    try {
        const {usuarioProfesor, nombre, usuario, contrasena}= req.body  // lo que hace es que crea la constante y le asiga los valores del body en el orden a los datos de la constante
        let estudiante = await Estudiante.findOne({"usuario":req.params.usuario});   
        if (!estudiante) {
            res.status(404).json({mensaje:"no existe"})   //verificar de nuevo para que no sea facil modificar
        }

        estudiante.usuarioProfesor =usuarioProfesor;
        estudiante.nombre =nombre;
        estudiante.usuario = usuario;
        estudiante.contrasena =contrasena;
       

        let procesoActualizar = await Estudiante.findOneAndUpdate({"usuario":req.params.usuario}, estudiante, {new:true})
        res.json(procesoActualizar)

    } catch (error){
        console.log(error)
        res.status(500).send("hay error")
    }

}


exports.borrarEstudiante = async(req, res) => {
    try {
        let estudiante = await Estudiante.find({"usuario":req.params.usuario})
        if (!estudiante) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        await Estudiante.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ mensaje: "Dato eliminado satisfactoriamente" })
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }

}
