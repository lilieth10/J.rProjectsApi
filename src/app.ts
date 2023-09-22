import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/mongo'; // Importa la función de conexión a la base de datos
import userRoutes from './routes/userRoutes'; // Importa las rutas de usuarios

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const app = express();
const PORT = process.env.PORT || 3001; // Define un puerto predeterminado si no se especifica en las variables de entorno

app.use(cors());
app.use(express.json());

// Configura tus rutas aquí
app.use('/users', userRoutes);

// Inicia la conexión a la base de datos
connectDB();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
