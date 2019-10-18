const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

app.get('/', function (req, res) {
    
    res.json({
        'mensaje' : 'Bienvenido a la pagina principal momento2'
      })
    
});

app.get('/saludo/:nombre', function (req, res) {
    res.json({
    'saludo':`Bienvenid@ ${req.params.nombre}`
    })
});
app.get('/edad/:XY', function (req, res) {
    let edad= req.params.XY
    if (edad>0 && edad<150) {
        if (edad<18) {
            res.json({       
                'Menor' : `Eres menor de edad con una edad de: ${edad}`
             })
        }else{
            res.json({       
                'Mayor' : `Eres mayor de edad con una edad de: ${edad}`
        })
        }
    }else{
        res.json({
            'Error':'Error edad invalida'
        })
    }    
});
app.get('/database', function (req, res) {
    res.json({
    "mensaje":mensaje
    })
});

mongoose.connect('mongodb://localhost:27017/momento2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, res) => {
    if(err) mensaje='Error conexion a la BD';
    mensaje ='Conexion OK BD:momento2';
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor en linea ${ port }`);
});