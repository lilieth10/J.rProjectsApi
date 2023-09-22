import mongoose, { ConnectOptions } from 'mongoose';


async function connectDB(): Promise<void> {
    try {
       const uri = process.env.MONGODB_URI || '';
   
       const options: ConnectOptions = {
         // useNewUrlParser: true,
         // useUnifiedTopology: true,
       };
   
       await mongoose.connect(uri, options);
       console.log('Conexión a la base de datos exitosa');
    } catch (error) {
       console.error('Error al conectar a la base de datos:', error);
    }
   }
   
   export default connectDB;
   
   ​