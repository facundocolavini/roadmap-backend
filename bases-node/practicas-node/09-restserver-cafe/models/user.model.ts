import  { Schema, model } from 'mongoose';
import { ROL_KEYS } from '../enums/rol_keys';


const UserSchema =  new Schema({
    uid: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: [ROL_KEYS]
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },

},{
/* methods:{
    findEmailExist(cb:any) {
        return model('User').findOne(cb);
    }
} */
});

// Metodos customizados se auto ejecuta 
// Sobreescribimos el metodo toJson debe ser una funcion normal por el this.
// Por que hace a la referencia creada de mi funcion.
UserSchema.methods.toJSON = function() {
    const { __v,_id, password, ...user  } = this.toObject();// Objeto con las propiedades de mi modelo
    return {
        uid: _id,
        ...user,
    };
}

export const User = model( 'User', UserSchema );
