import express from "express";
import AdminController from "../controller/AdminController.js";

const router = express.Router();

router.use(AdminController.verificarAdmin);

router.get("/usuarios", AdminController.mostrarTodosUsuarios);
router.put("/usuarios/:id", AdminController.atualizarUsuario);
router.patch("/usuarios/:id/rule", AdminController.atribuirRuleUsuario);
router.delete("/usuarios/:id", AdminController.deletarUsuario);

export default router;
