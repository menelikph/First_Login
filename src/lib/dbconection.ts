import mongoose from 'mongoose';

const dbconection = async () =>{
    try {
        console.log(process.env.MONGODB_ATLAS)
    const mongodbAtlas = process.env.MONGODB_ATLAS || '';
    await mongoose.connect(mongodbAtlas);
    
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }
}

export default dbconection;