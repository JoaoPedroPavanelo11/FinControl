import express from "express";
import CadastroUsuarioController from "../controller/CadastroUsuarioController.js";
import LoginUsuarioController from "../controller/LoginUsuarioController.js";

const router = express.Router();
router.post("/cadastro", CadastroUsuarioController.criarUsuario);
router.post("/login", LoginUsuarioController.loginUsuario);

export default router;
