//Desde express requiero el método Router, lo que me permite definir nuevas rutas para mi servidor
const {Router} = require('express');
//Cuando se ejecuta lo guardo en una constante llamada router
const router = Router();
/* Routes */
/* Desde mi aplicación a través del método GET cuando visiten la ruta inicial de mi aplicación, voy a
responder con un mensaje */
router.get('/',(req,res)=>{
    // res.send('Hola desde el servidor haciento una petición GET');
    //en lugar de res.send voy a decir que responda con un JSON
    const data ={
        "Nombre":"Carlos",
        "Apellido":"Sebastián",
        "Carrera":"Licenciatura en ingeniería mecatrónica",
        "Especialdad":{
            "Rama":"programación",
            "Rama2":"front end"
        }
    };
    res.json(data);
 })
 module.exports = router;
 /* Exportamos esto.
 Así creamos las rutas desde otro archivo. Así que importamos las rutas desde el archivo index */