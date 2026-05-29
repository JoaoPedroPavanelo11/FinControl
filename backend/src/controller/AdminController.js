import Usuario from "../models/usuario.js";

class AdminController {
    static async mostrarTodosUsuarios(req, res) {
        try {
            const mostrarTodosUsuarios = await Usuario.find();
            res.status(200).json({ message: "Todos os usuários encontrados com sucesso!", mostrarTodosUsuarios });
        } catch (error) {
            const erros = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({
                message: "Erro ao mostrar Usuarios!",
                erros
            });
        }
    };


    static async deletarUsuario(req, res) {
        try {
            const { codigo } = req.params;
            const deletarUsuario = await Usuario.findOneAndDelete({ codigo: Number(codigo) });
            res.status(200).json({ message: "Usuário deletado com sucesso!", deletarUsuario });
        } catch (error) {
            const erros = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({
                message: "Erro ao deletar usuário!",
                erros
            });
        }
    };
    static async atualizarUsuario(req, res) {
        try {
            const { codigo } = req.params;
            const { rule, ...dadosUsuario } = req.body;
            const atualizarUsuario = await Usuario.findOneAndUpdate({ codigo: Number(codigo) }, dadosUsuario, { new: true, runValidators: true });
            res.status(200).json({ message: "Usuário atualizado com sucesso!", atualizarUsuario });
        } catch (error) {
            const erros = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({
                message: "Erro ao atualizar usuário!",
                erros
            });
        }
    };

    static async atribuirRuleUsuario(req, res) {
        try {
            const { codigo } = req.params;
            const { rule } = req.body;

            const usuarioAtualizado = await Usuario.findOneAndUpdate(
                { codigo: Number(codigo) },
                { rule },
                { new: true, runValidators: true }
            );

            if (!usuarioAtualizado) {
                return res.status(404).json({ message: "Usuario nao encontrado!" });
            }

            res.status(200).json({
                message: "Permissao do usuario atualizada com sucesso!",
                usuarioAtualizado
            });
        } catch (error) {
            const erros = error.errors
                ? Object.values(error.errors).map((err) => err.message)
                : [error.message];

            res.status(400).json({
                message: "Erro ao atualizar permissao do usuario!",
                erros
            });
        }
    };
};


export default AdminController;