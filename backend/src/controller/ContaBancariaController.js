import ContaBancariaUsuario from "../models/ContaBancariaUsuario.js";
import Usuario from "../models/usuario.js";

class ContaBancariaController {
    static async criarContaBancaria(req, res) {
        try {
            const { codigo } = req.params;
            const { nomeBanco, tipoConta, saldo } = req.body;

            const usuario = await Usuario.findOne({ codigo: Number(codigo) });

            if (!usuario) {
                return res.status(404).json({ message: "Usuario nao encontrado!" });
            }

            const contaBancaria = await ContaBancariaUsuario.create({
                usuario: usuario._id,
                nomeBanco,
                tipoConta,
                saldo
            });

            res.status(201).json({
                message: "Conta bancaria criada com sucesso!",
                contaBancaria
            });
        } catch (error) {
            const erros = error.errors
                ? Object.values(error.errors).map((err) => err.message)
                : [error.message];

            res.status(400).json({
                message: "Erro ao criar conta bancaria!",
                erros
            });
        }
    }

    static async listarContasBancarias(req, res) {
        try {
            const { codigo } = req.params;

            const usuario = await Usuario.findOne({ codigo: Number(codigo) });

            if (!usuario) {
                return res.status(404).json({ message: "Usuario nao encontrado!" });
            }

            const contasBancarias = await ContaBancariaUsuario.find({ usuario: usuario._id });

            res.status(200).json({
                message: "Contas bancarias encontradas com sucesso!",
                contasBancarias
            });
        } catch (error) {
            res.status(400).json({
                message: "Erro ao listar contas bancarias!",
                erro: error.message
            });
        }
    }

    static async mostrarSaldoTotal(req, res) {
        try {
            const { codigo } = req.params;

            const usuario = await Usuario.findOne({ codigo: Number(codigo) });

            if (!usuario) {
                return res.status(404).json({ message: "Usuario nao encontrado!" });
            }

            const contasBancarias = await ContaBancariaUsuario.find({ usuario: usuario._id });
            const saldoTotal = contasBancarias.reduce((total, conta) => total + conta.saldo, 0);

            res.status(200).json({
                message: "Saldo total encontrado com sucesso!",
                saldoTotal,
                contasBancarias
            });
        } catch (error) {
            res.status(400).json({
                message: "Erro ao mostrar saldo total!",
                erro: error.message
            });
        }
    }
}

export default ContaBancariaController;
