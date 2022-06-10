const mongoose = require('mongoose');
require('dotenv').config({path:"config.env"})  //llama la direccion de mongo para vincularse con la base de datos

const conectarBaseDeDatos = async ()=>{   //funcion asincrona
    
    try {
            await mongoose.connect(process.env.DB_MONGO , {   // el await dice que espere a que optenga la respuesta despues de haber llamado la variable    .--- process.env.DB_MONGO es la direccion para conectar con el compa
                useNewUrlParser:true,  // dice que castee toda la informacion de la base de datos
                useUnifiedTopology:true // unifica en caso de tener varias bases de dato
            })
            console.log("base conectada")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}


module.exports=conectarBaseDeDatos
