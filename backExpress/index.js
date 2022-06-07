const express = require("express");
const conectarBaseDeDatos = require("./config/database");
const cors = require ('cors');

const aplicacion= express();  // llamado del servicio

conectarBaseDeDatos();

aplicacion.use(cors());
aplicacion.use(express.json());

aplicacion.use('', require('./routes/routes'));

aplicacion.listen(4001, ()=>{
    console.log("se conecto al puerto 4001")
})
