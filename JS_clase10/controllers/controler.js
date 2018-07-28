const Persona = require('../models/persona');

exports.home = (req, res) => {
    res.json({
        message: "Hola Mundo desde controller"
    });
};

exports.save = (req, res) => {
    var persona = new Persona({
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        address: {
            calle: req.body.calle,
            numero: req.body.numero
        },
        contact: {
            tel: req.body.tel,
            cel: req.body.cel,
            email: req.body.email
        }
    })

    persona.save((err, response) => {
        if (err) {
            res.estatus(500).json({
                message: err
            })
        } else {
            res.estatus(200).json({
                response
            });
        }
    });
}


exports.find = (req, res) => {
    Persona.find((err, response) => {
        if (err) {
            res.estatus(500).json({
                message: err
            })
        } else {
            res.estatus(200).json({
                response
            });
        }
    })
};