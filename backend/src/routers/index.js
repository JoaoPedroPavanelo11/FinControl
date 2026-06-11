import express from "express";
import UsuarioRouter from "./UsuarioRouter.js";
import AdminRouter from "./AdminRouter.js";
import ContaBancariaRouter from "./ContaBancariaRouter.js";

const routers = (app) =>{
    app.get("/", (req, res)=>{
        res.status(200).json({message: "Bem vindo a FinControll"});
    })
    app.use("/usuarios", UsuarioRouter);
    app.use("/admin", AdminRouter);
    app.use("/contas-bancarias", ContaBancariaRouter);
};

export default routers;
