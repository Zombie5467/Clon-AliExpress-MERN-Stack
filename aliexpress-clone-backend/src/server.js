import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config(); //cargar variables de entorno

const app = express();

//middlewares
app.use(express.json()); //para que express pueda entender/recibir json (en las peticiones)
app.use(cors()); //habilitar CORS
app.use(morgan('dev')); //mostrar en consola las peticiones

//ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

//Definir puerto y levantar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});