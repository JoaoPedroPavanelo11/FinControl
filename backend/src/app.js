import express from 'express';
import dbConnect from './config/dbConnect.js';
import routers from "./routers/index.js";


const app = express();
app.use(express.json());
routers(app);

const conexaoDB = await dbConnect();
conexaoDB.on("error", (error)=>{
    console.error("Erro de conexão com o banco de dados:", error);
});
conexaoDB.once("open", ()=>{
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
})



export default app;
