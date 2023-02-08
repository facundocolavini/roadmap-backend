import { Schema, model } from 'mongoose'

const RolSchema = new Schema({
    rol: {
        type: String,
        required: [true, 'Rol is required'],
    },

},{
});


export const Rol = model( 'Rol', RolSchema );