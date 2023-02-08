import  { Schema, model } from 'mongoose';


const UserSchema =  new Schema({
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
        emun: ['ADMIN_ROLE', 'USER_ROLE']
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
    const { __v, password, ...user  } = this.toObject();// Objeto de con las propiedades de mi modelo
    return user;
}

export const User = model( 'User', UserSchema );
