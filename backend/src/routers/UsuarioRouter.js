import express from "express";
import UsuarioController from "../controller/UsuarioController.js";

const router = express.Router();

// Rota para criar um novo usuário
router.post("/cadastrar", UsuarioController.criarUsuario);
// Rota para listar os usuários
router.get("/listar", UsuarioController.mostrarUsuarios);
// Rota para ver um usuario especifico
router.get("/buscar/:codigo", UsuarioController.mostrarUsuarioEspecifico);
// Rota para editar um usuário
router.put("/editar/:codigo", UsuarioController.editarUsuario);
// Rota para deletar um usuário
router.delete("/deletar/:codigo", UsuarioController.deletarUsuario);
export default router;
