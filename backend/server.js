import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import app from "./src/app.js";

dotenv.config();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("Servidor rodando");
});

mongoose.connect(process.env.DB_CONECTION_STRING);