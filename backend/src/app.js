import express from 'express';
import dbConnect from './config/dbConnect.js';
import rotaUsuarios from "./routers/rotaUsuarios.js";

const app = express();
app.use(express.json());

dbConnect().then((conexaoDB) => {
    conexaoDB.on("error", (error) =>{
        console.log("Erro na conexão com o banco de dados: " + error);
    });
    conexaoDB.once("open", ()=>{
        console.log("Conexao com banco de dados feita!");
    })
}).catch(error => {
    console.log("Erro ao conectar ao banco: " + error);
});

app.use("/usuarios", rotaUsuarios);

export default app;