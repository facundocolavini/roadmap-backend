import { Rol } from "../rols/models/rol.model";
import { User } from "../user/models/user.model";


/* 
* Validaciones customizadas
* 
*/
export const roleValidate = async(rol = '') => {
    const existRol = await Rol.findOne({rol});
    if(!existRol) {
        throw new Error (`${rol} is not registered in the database`)
    }
}

export const emailExist = async(email:string) =>{
    const existEmail = await User.findOne({email})
    if(existEmail) {
        throw new Error (`${email} have already been registered`)
    }
}

export const userExistById = async(userId:string) => {
    const existUser = await User.findById(userId)
    if(!existUser) {
        throw new Error (`User with ID: ${userId} is not registered`)
    }
}