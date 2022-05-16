const express = require('express')
const axios = require('axios')
const app = express()
const port = 8000
const barController = require('./controllers/barController')
const body_parser = require('body-parser');

app.use(body_parser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Servidor corriendo exitosamente en http://localhost:8000/')
})

//consultar por params
var formulario = '<form method="post" action="/bares">'
    + '<label for="nombre">¿Decime tu nombre?</label>'
    + '<input type="text" name="nombre" id="nombre">'
    + '<input type="submit" value="Enviar"/>'
    + '</form>';

var cabecera = '<h1>Probando Test / POST</h1>';

app.get('/bares', (req, res) => {
    res.send('<html><body>'
        + cabecera
        + formulario
        + '</html></body>'
    );
    // res.send(barController.barController())
})

app.post('/bares', (req, res) => {
    var nombre = req.body.nombre;
    //Como mandar parametros por URL? req???
    res.send(barController.validarNombre(barController.barController(), nombre))
})

app.listen(port, () => {
    console.log(`Example app listening on port *${port}`)
})

module.exports = {
    get: () => {
        return axios.get('http://localhost:8000/')
    },
    getBares: () => {
        return axios.get('http://localhost:8000/bares')
    },
}