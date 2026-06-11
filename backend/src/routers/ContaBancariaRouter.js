import express from "express";
import ContaBancariaController from "../controller/ContaBancariaController.js";

const router = express.Router();

router.post("/usuarios/:codigo/contas", ContaBancariaController.criarContaBancaria);
router.get("/usuarios/:codigo/contas", ContaBancariaController.listarContasBancarias);
router.get("/usuarios/:codigo/saldo", ContaBancariaController.mostrarSaldoTotal);

export default router;
