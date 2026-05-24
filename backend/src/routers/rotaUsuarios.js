import express from "express";
import CadastroUsuario from "../controller/cadastroUsuario.js";
import VisualizarUsuario from "../controller/visualizarUsuarioPorId.js";

const router = express.Router();

router.get("/visualizar", VisualizarUsuario.VisualizarUsuario);

router.post("/cadastrar", CadastroUsuario.cadastrarUsuario);

export default router;