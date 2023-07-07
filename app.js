import express from "express";
import appUsuario from './routers/usuario.js';
const app = express();

app.use(express.json());
app.use('/cliente', appUsuario);

app.listen(5010, () => {
    console.log('El servidor esta escuchando');
})