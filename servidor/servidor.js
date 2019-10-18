const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const fs = require('fs');

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
    fs.writeFile(
        `Bienvenida-${req.params.nombre}.txt` , 
        `Bienvenido ${req.params.nombre}`,
        (err) => {
            if (err) 
              console.log(err);
            console.log('');
        }
    );
});
app.get('/edad/:XY', function (req, res) {
    let edad= req.params.XY
    if (edad>0 && edad<150) {
        if (edad<18) {
            res.json({       
                'Menor' : `Eres menor de edad con una edad de: ${edad}`
             })
             fs.writeFile(
                `menorEdad-${req.params.XY}.txt` , 
                `Eres menor de edad: tu edad:${req.params.XY}`,
                (err) => {
                    if (err) 
                      console.log(err);
                    console.log('');
                }
            );
        }else{
            res.json({       
                'Mayor' : `Eres mayor de edad con una edad de: ${edad}`     
                })
            fs.writeFile(
            `edadMayor-${req.params.XY}.txt` , 
            'Eres mayor de edad: tu edad:'+req.params.XY,
            (err) => {
                if (err) 
                  console.log(err);
                console.log('');
            }
        );
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