import Usuario from "../models/usuario.js";

class AdminController {
    static async verificarAdmin(req, res, next) {
        try {
            const adminId = req.headers["x-admin-id"];

            if (!adminId) {
                return res.status(401).json({ message: "Informe o id do admin no header x-admin-id!" });
            }

            const admin = await Usuario.findById(adminId);

            if (!admin || admin.rule !== "admin") {
                return res.status(403).json({ message: "Apenas administradores podem executar essa acao!" });
            }

            req.admin = admin;
            next();
        } catch (error) {
            res.status(400).json({
                message: "Erro ao validar administrador!",
                erro: error.message
            });
        }
    };

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
            const { id } = req.params;
            const deletarUsuario = await Usuario.findByIdAndDelete(id);
            res.status(200).json({ message: "Usuário deletado com sucesso!", deletarUsuario });
        } catch (error) {
            const erros = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({
                message: "Erro ao mostrar Usuarios!",
                erros
            });
        }
    };

    static async atualizarUsuario(req, res) {
        try {
            const { id } = req.params;
            const { rule, ...dadosUsuario } = req.body;
            const atualizarUsuario = await Usuario.findByIdAndUpdate(id, dadosUsuario, { new: true, runValidators: true });
            res.status(200).json({ message: "Usuário atualizado com sucesso!", atualizarUsuario });
        } catch (error) {
            const erros = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({
                message: "Erro ao mostrar Usuarios!",
                erros
            });
        }
    };

    static async atribuirRuleUsuario(req, res) {
        try {
            const { id } = req.params;
            const { rule } = req.body;

            const usuarioAtualizado = await Usuario.findByIdAndUpdate(
                id,
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
