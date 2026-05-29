import express from "express";
import AdminController from "../controller/AdminController.js";

const router = express.Router();

router.get("/usuarios", AdminController.mostrarTodosUsuarios);
router.put("/usuarios/:codigo", AdminController.atualizarUsuario);
router.patch("/usuarios/:codigo/rule", AdminController.atribuirRuleUsuario);
router.delete("/usuarios/:codigo", AdminController.deletarUsuario);

export default router;
