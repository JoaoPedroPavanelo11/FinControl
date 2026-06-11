import express from "express";
import ContaBancariaController from "../controller/ContaBancariaController.js";

const router = express.Router();

router.post("/:codigo/contas", ContaBancariaController.criarContaBancaria);
router.get("/:codigo/contas", ContaBancariaController.listarContasBancarias);
router.get("/:codigo/saldo", ContaBancariaController.mostrarSaldoTotal);

export default router;
