//importamos el modulo de Express
const express = require('express');
//creamos una instancia de express
const app = express();
const body = require("connect-multiparty")();
//const bodyParser = require('body-parser')

//app.use(bodyParser.json())

//creamos la ruta que hace referencia al dominio principal
app.get('/', (req, res) => {
    //eniamos al navegador un mensaje hola mundo com un estatus 200
    res.status(200).send("Hola mundo desde node con Express");
    //terminamos el proceso
    res.end();
});

var arr = [{
        name: "Jose",
        lastName: "Rojas",
        age: 26,
        id: 1
    },
    {
        name: "Claudia",
        lastName: "Villanueva",
        age: 23,
        id: 2
    },
    {
        name: "Marcelo",
        lastName: "Esparza",
        age: 24,
        id: 3
    },
    {
        name: "Maria Jose",
        lastName: "Quintanilla",
        age: 27,
        id: 4
    },
    {
        name: "Helen",
        lastName: "Harnish",
        age: 39,
        id: 5
    }
];

app.get('/api', (req, res) => {
    res.status(200).json(arr);
});

app.get('/api/findOne/:id', (req, res) => {
    var id = req.params.id;

    var data = arr.find(element => {
        if (element.id == id) {
            return element;
        }
    });

    res.status(200).json(data);
});

app.post('/api/save', body, (req, res) => {

    console.log(req.body)
    var data = {
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        id: arr.length + 1
    };
    arr.push(data);

    res.status(200).json({
        message: "Operacion exitosa!!"
    });
});

app.delete('/api/delete/:id', (req, res) => {
    var id = req.params.id;

    arr.find((element, indice) => {
        if (element.id == id) {
            return arr.splice(indice, 1);
        }
    });

    res.status(200).json({
        message: "Operacion exitosa!!"
    });
});

app.put('/api/update/:id', body, (req, res) => {
    var id = req.params.id;
    var data = {
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age
    };
    arr.find((e, i) => {
        if (e.id == id) {
            data.id = e.id;
            return arr.splice(i, 1, data);
        }
    });
    res.status(200).json({
        message: "Operacion exitosa!!"
    });
});

//creamos nuesro servidor de node y express
app.listen(5000, err => {
    //validamos si existe algun error
    if (err) {
        console.log(err);
    } else {
        console.log("Servidor corriendo en el puerto 5000");
    }
});