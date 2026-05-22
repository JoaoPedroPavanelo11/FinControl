import express from "express";
import usuarios from "./usuarios.js";

const routers = (app) =>{
    routers.use("/").get((req, res)=>{
        res.status(200).json({message: "Bem vindo a FinControll"});
    })
    app.use("/usuarios", usuarios);
};

export default routers;