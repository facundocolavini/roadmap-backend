const mongoose = require('mongoose');

// Conexion a la base de datos
export const dbConnection = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('Base de datos conectada');

    } catch (err) {
        throw new Error(`Error a la hora de iniciar la base de datos ${err}`);
    }

}

module.exports = {
    dbConnection
}