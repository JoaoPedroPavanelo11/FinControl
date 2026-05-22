import Usuario from "../models/usuario.js";

class CadastroUsuario {
    static async cadastrarUsuario(req, res) {
        try {
            const novoUsuario = await Usuario.create(req.body);
            res.status(201).json({ message: "Usuario cadastrado com sucesso!", Usuario: novoUsuario });
        } catch (error) {
            res.status(400).json({ message: "Erro ao cadastrar usuario!", error: error.message });
        }
    }
};

export default CadastroUsuario;