import Usuario from "../models/usuario.js";

class UsuarioController {

    // Criar um novo usuário
    static async criarUsuario(req, res){
        try{
            const criarUsuario = await Usuario.create(req.body);
            res.status(200).json({message: "Usuário criado com sucesso!", criarUsuario});
        }catch(error){
            res.status(400).json({message: "Erro ao criar usuário!", error});
        };
    };

    // Listar Usuarios
    static async mostrarUsuarios(req, res){
        try{
            const mostrarUsuarios = await Usuario.find();
            res.status(200).json({message: "Usuários encontrados com sucesso!", mostrarUsuarios});
        }catch(error){
            res.status(400).json({message: "Erro ao encontrar usuários!", error});
        };
    };
};

export default UsuarioController;