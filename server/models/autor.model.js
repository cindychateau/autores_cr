const mongoose = require("mongoose");

const EsquemaAutor = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio."],
        minLength: [3, "Nombre debe tener al menos 3 caracteres"]
    },
    imagen: {
        type: String
    },
    libros:{
        type: Boolean,
        default: false
    },
    cuentos: {
        type: Boolean,
        default: false
    },
    articulos: {
        type: Boolean,
        default: false
    }
}, {timestamps: true, versionKey: false});
//timestamps: me crea campos de createdAt y updatedAt
//versionKey: false me elimina el atributo _v

const Autor = mongoose.model("autores", EsquemaAutor);
module.exports = Autor;