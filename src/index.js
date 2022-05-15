const express = require('express');
const puerto = 4000;
const app = express();
const morgan = require('morgan');
/* ------------------------------------------------------------------------------------------------------ */
/* settings */
//En caso de que exista un puerto definido, se toma. En caso contrario, se usará el 3000
app.set('port',process.env.PORT || puerto);
//más formato
app.set('json spaces',2)
/* ------------------------------------------------------------------------------------------------------ */
//middleware
app.use(morgan('dev'));
/* Nosotros vamos a tratar de entender los datos que llegan desde los formularios. Datos simples
Cómo textos o datos que vienen desde el input */
app.use(express.urlencoded({extended:false}));
/* Otro método de express. Comunmente cuando estemos mandando y recibiendo datos en nuestro servidor. Vamos
a estar enviando y recibiendo JSON (no solo htmls o js). Y ya los datos haremos lo que necesitemos con ellos.
Esto le permite a mi servidor entender el formato JSON. */
app.use(express.json());
/* ------------------------------------------------------------------------------------------------------ */
/* Routes */
/* Desde mi aplicación a través del método GET cuando visiten la ruta inicial de mi aplicación, voy a
responder con un mensaje */
/* app.get('/',(req,res)=>{
   // res.send('Hola desde el servidor haciento una petición GET');
   //en lugar de res.send voy a decir que responda con un JSON
   res.json({
       "Title":"Spiderman"
   })
})
*/
app.use(require('./routes/routes.js'));
/* ------------------------------------------------------------------------------------------------------ */
/* starting server */
app.listen(app.get('port'),()=>{
    console.log(`Puerto del servidor ${app.get('port')}`);
});
/* ------------------------------------------------------------------------------------------------------ */
/* Notas adicionales */
/* Instalamos el módulo de "nodemon" para que el servidor se reinicie. Usando npm i nodemon -D
-D hace que nodemon no se ejecute como una dependencia de mi proyecto, si no que sólo cómo una
dependencia de desarrollo. Tan sólo se ejecuta en desarrollo y no en producción. 
Si quiero subir mi proyecto a un servicio en la nube cómo Azure, puede que me den un puerto fijo
en ese caso, debo considerar ese cambio dentro de mi proyecto
Vamos a ver una sección en devDependencies que indica la instalación de nodemon*/
/* Que oasa pasa cuando tengo muchas rutas? Sería mejor en ese caso escribirlas en otro archivo */
