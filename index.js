const express = require('express');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./middleware/error.handler')
const app = express();
const PORT = 3000;


app.get('/',(req, res) =>{
    res.send("Hola mi server en express")
})


app.listen(PORT, () => {
    console.log('ejecutando port ' +  PORT)
})

routerApi(app);
//middleware de errores globales
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)