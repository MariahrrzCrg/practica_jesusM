const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
    fecNac : { type: Date, default: Date.now },
    contraseña: { type: String, required: true}
});

module.exports = model('Usuario', UsuarioSchema);