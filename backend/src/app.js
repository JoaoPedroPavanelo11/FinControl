import express from 'express';
import dbConnect from './config/dbConnect.js';
import rotaUsuarios from "./routers/rotaUsuarios.js";

const app = express();
app.use(express.json());

const conexaoDB = await dbConnect();
conexaoDB.on("error", (error)=>{
    console.error("Erro de conexão com o banco de dados:", error);
});
conexaoDB.once("open", ()=>{
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
})

app.use("/usuarios", rotaUsuarios);

export default app;