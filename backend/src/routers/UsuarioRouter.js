import express from "express";
import UsuarioController from "../controller/UsuarioController.js";

const router = express.Router();

router.post("/cadastrar", UsuarioController.criarUsuario);
router.get("/listar", UsuarioController.mostrarUsuarios);

export default router;
