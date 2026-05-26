import express from "express";
import UsuarioRouter from "./UsuarioRouter.js";

const routers = (app) =>{
    app.get("/", (req, res)=>{
        res.status(200).json({message: "Bem vindo a FinControll"});
    })
    app.use("/usuarios", UsuarioRouter);
};

export default routers;
