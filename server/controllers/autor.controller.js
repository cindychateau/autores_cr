const Autor = require("../models/autor.model");

module.exports.get_all = (req, res) => {
    Autor.find().sort({nombre: 1}) //1 = ASC (A-Z), -1 = DESC(Z-A)
        .then(autores => res.json(autores))
        .catch(err =>{
            res.status(400).json(err);
        });
}

module.exports.create_autor = (req, res) => {
    Autor.create(req.body)
        .then(autor => res.json(autor))
        .catch(err =>{
            res.status(400).json(err);
        });
}