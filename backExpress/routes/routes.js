const express = require('express')
const router = express.Router();
const profesorController = require('../controllers/profesoresController')
const estudianteController = require('../controllers/estudiantesController')


// rutas de coleccion Profesores
router.post('/crear-cuenta-profesor', profesorController.crearProfesor);
router.get('/obtener-lista-profesores', profesorController.obtenerProfesores);
router.get('/profesor/:id', profesorController.obtenerProfesor); //indica que el id porque solo va a buscar un solo contacto y no todos
router.put('/actualizar-profesor/:id', profesorController.actualizarProfesor);
router.delete('/delete-profesor/:id', profesorController.borrarProfesor);

// rutas de coleccion estdiantes
router.post('/crear-cuenta-estudiante', estudianteController.crearEstudiante)
router.get('/obtener-lista-estudiantes', estudianteController.obtenerEstudiantes);
router.get('/estudiante/:id', estudianteController.obtenerEstudiante);
router.put('/actualizar-estudiante/:id', estudianteController.actualizarEstudiante);
router.delete('/delete-estudiante/:id', estudianteController.borrarEstudiante);

module.exports = router