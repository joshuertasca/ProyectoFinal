const Contacto = require("../models/contacto")

exports.crearContacto =async(req, res)=>{

    console.log(req.body)

    try {
        let contactos
        contactos = new Contacto(req.body)  //la informacion cuando se llama se almacena en el body del request
          //la informacion cuando se llama se almacena en el body del request

        await contactos.save();

        res.send(contactos)

    } catch (error) {
        console.log(error)
        res.status(500).send("hay error")
    }

}


exports.obtenerContactos = async(req, res) => {
    try {
        
        let contactos = await Contacto.find();
        res.json(contactos);
    } catch (error){
        console.log(error)
        res.status(500).send("hay error")
    }

}
exports.obtenerContacto = async(req, res) => {
    try {
        let contacto = await Contacto.findById(req.params.id);   //req.params es para adquirir la id que le enviamos al url y que llame el objeto especifico
        
        if (!contacto) {
            res.status(404).json({mensaje:"no existe"})
        }
        res.json(contacto);

    } catch (error){
        console.log(error)
        res.status(500).send("hay error")
    }

}


exports.actualizarContacto = async(req, res) => {
    try {
        const {correo, nombre, cedula, genero, contrasena, acepta_terminos}= req.body  // lo que hace es que crea la constante y le asiga los valores del body en el orden a los datos de la constante
        let contacto = await Contacto.findById(req.params.id);   
        if (!contacto) {
            res.status(404).json({mensaje:"no existe"})   //verificar de nuevo para que no sea facil modificar
        }

        contacto.correo =correo;
        contacto.nombre =nombre;
        contacto.cedula = cedula;
        contacto.genero = genero;
        contacto.contrasena =contrasena;
        contacto.acepta_terminos = acepta_terminos;

        let procesoActualizar = await Contacto.findByIdAndUpdate({_id: req.params.id}, contacto, {new:true})
        res.json(procesoActualizar)

    } catch (error){
        console.log(error)
        res.status(500).send("hay error")
    }

}


exports.borrarContacto = async(req, res) => {
    try {
        let contacto = await Contacto.findById(req.params.id)
        if (!contacto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        await Contacto.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ mensaje: "Dato eliminado satisfactoriamente" })
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }

}



