
const express = require("express");
const { append } = require("express/lib/response");
const conectarBaseDeDatos = require("./config/database");
const cors = require ('cors');

const aplicacion= express();  // llamado del servicio

conectarBaseDeDatos();

aplicacion.use(cors());
aplicacion.use(express.json());

aplicacion.use('/api', require('./routes/routes'));

aplicacion.listen(4000, ()=>{
    console.log("hola mundo")
})
