const express = require("express");
const { route } = require("express/lib/application");
//const { crearContacto } = require("../controllers/ContactoController");   no funciona porque tocaria llamar todos los metodos y exportarlos
const contactocontroller= require("../controllers/ContactoController");
const router = express.Router();

//router.get('/', crearContacto) se crea solo al escribir el metodo en el parametro de la funcion
router.post('/registro', contactocontroller.crearContacto) ;
router.get('/contactos', contactocontroller.obtenerContactos);
router.get('/contacto/:id', contactocontroller.obtenerContacto); //indica que el id porque solo va a buscar un solo contacto y no todos
router.put('/actualizar/:id', contactocontroller.actualizarContacto);
router.delete('/delete/:id', contactocontroller.borrarContacto);


module.exports=router
