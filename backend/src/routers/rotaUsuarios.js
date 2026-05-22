import express from "express";
import CadastroUsuario from "../controller/cadastroUsuario.js";

const router = express.Router();

router.post("/cadastrar", CadastroUsuario.cadastrarUsuario);

export default router;