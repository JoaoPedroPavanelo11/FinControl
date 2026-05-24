import Usuario from "../models/Usuario.js";

class VisualizarUsuario {
    static async VisualizarUsuario(req, res) {
        try {
            const usuario = await Usuario.find({});
            res.status(200).json(usuario);
        } catch (error) {
            res.status(400).json({ message: "Erro ao visualizar usuario!", error: error.message });
        };
    };
};

export default VisualizarUsuario;