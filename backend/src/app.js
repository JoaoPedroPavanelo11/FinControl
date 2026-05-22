import express from 'express';
import dbConnect from './config/dbConnect.js';

const conexaoDB = await dbConnect();
conexaoDB.on("error", (error) =>{
    console.log("Erro na conexão com o banco de dados: " + error);
});
conexaoDB.once("open", ()=>{
    console.log("Conexao com banco de dados feita!");
})

const app = express();
export default app;