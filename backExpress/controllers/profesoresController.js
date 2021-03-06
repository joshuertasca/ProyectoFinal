const Profesor = require("../models/profesor")

exports.crearProfesor =async(req, res)=>{

    console.log(req.body)

    try {
        let profesores
        profesores = new Profesor(req.body)  //la informacion cuando se llama se almacena en el body del request
          //la informacion cuando se llama se almacena en el body del request

        await profesores.save();

        res.send(profesores)

    } catch (error) {
        console.log(error)
        res.status(500).send("hay error")
    }
}

exports.obtenerProfesores = async(req, res) => {
    try {
        
        let profesor = await Profesor.find();
        res.json(profesor);
    } catch (error){
        console.log(error)
        res.status(500).send("hay un error")
    }
}

exports.obtenerProfesor = async(req, res) => {
    try {
        let profesor = await Profesor.findById(req.params.id);   //req.params es para adquirir la id que le enviamos al url y que llame el objeto especifico
        
        if (!profesor) {
            res.status(404).json({mensaje:"no existe"})
        }
        res.json(profesor);

    } catch (error){
        console.log(error)
        res.status(500).send("hay error")
    }

}
exports.obtenerProfesorcorreo = async(req, res) => {
    try {
        let profesor = await Profesor.find({correo: req.params.correo});   //req.params es para adquirir la id que le enviamos al url y que llame el objeto especifico
        
        if (!profesor) {
            res.status(404).json({mensaje:"no existe"})
        }
        res.json(profesor);

    } catch (error){
        console.log(error)
        res.status(500).send("hay error")
    }

}


exports.actualizarProfesor = async(req, res) => {
    try {
        const {nombre, correo, edad, genero, contrasena, cursos, examenes}= req.body  // lo que hace es que crea la constante y le asiga los valores del body en el orden a los datos de la constante
        let profesor = await Profesor.findById(req.params.id);   
        if (!profesor) {
            res.status(404).json({mensaje:"no existe"})   //verificar de nuevo para que no sea facil modificar
        }

        profesor.nombre =nombre;
        profesor.correo =correo;
        profesor.edad = edad;
        profesor.genero = genero;
        profesor.contrasena =contrasena;
        profesor.cursos = cursos;
        profesor.examenes = examenes;

        let procesoActualizar = await Profesor.findByIdAndUpdate(req.params.id, profesor, {new:true})
        res.json(procesoActualizar)

    } catch (error){
        console.log(error)
        res.status(500).send("hay error")
    }

}


exports.borrarProfesor = async(req, res) => {
    try {
        let profesor = await Profesor.findById(req.params.id)
        if (!profesor) {
            res.status(404).json({ mensaje: "No existe la informaci??n solicitada" })
        }

        await Profesor.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ mensaje: "Dato eliminado satisfactoriamente" })
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }

}