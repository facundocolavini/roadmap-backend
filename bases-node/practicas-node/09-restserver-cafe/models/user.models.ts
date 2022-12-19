const { Schema, model } = require('moongose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'] // required, mensaje de error
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseñ es obligatoria'],
    },
    img: {
        type: String,
        required: [true, ''],
        enum: ['ADMIN_ROLE', 'USER_ROLE']// Valida por roles
    },
    state: { // Si existe o no un usuario
        type: Boolean,
        default: true,
    },
    googleState: {
        type: Boolean,
        default: false,
    }
});


module.exports = model('Users', UserSchema)