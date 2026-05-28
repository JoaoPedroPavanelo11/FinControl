import express from "express";
import AdminController from "../controller/AdminController.js";

const router = express.Router();

router.get("/usuarios", AdminController.mostrarTodosUsuarios);
router.put("/usuarios/:id", AdminController.atualizarUsuario);
router.delete("/usuarios/:id", AdminController.deletarUsuario);

export default router;