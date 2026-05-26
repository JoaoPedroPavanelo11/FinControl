import Usuario from "../models/usuario.js";

class UsuarioController {

    // Criar um novo usuário
    static async criarUsuario(req, res){
        try{
            const ultimoUsuario = await Usuario.findOne({ codigo: { $type: "number" } }).sort({ codigo: -1 });
            const novoCodigo = ultimoUsuario ? ultimoUsuario.codigo + 1 : 1;

            const criarUsuario = await Usuario.create({
                ...req.body,
                codigo: novoCodigo
            });
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
    static async mostrarUsuarioEspecifico(req, res){
        try{
            const codigo = Number(req.params.codigo);
            const mostrarUsuarioEspecifico = await Usuario.findOne({ codigo });
            res.status(200).json({message: "Usuário encontrado com sucesso!", mostrarUsuarioEspecifico});
        }catch(error){
            res.status(400).json({message: "Erro ao encontrar usuário!", error});
        };
    };

    // Editar um usuario que ja existe
    static async editarUsuario(req, res){
        try{
            const codigo = Number(req.params.codigo);
            const editarUsuario = await Usuario.findOneAndUpdate({ codigo }, req.body, { new: true });
            res.status(200).json({message: "Usuario editado!", editarUsuario});
        }catch(error){  
            res.status(400).json({message: "Erro ao editar usuário!", error});
        };
    };

    // Deletar um usuario (Tem que estar colocando o ID do usuario que sera deletado)
    static async deletarUsuario(req, res){
        try{
            const codigo = Number(req.params.codigo);
            const usuarioDeletado = await Usuario.findOneAndDelete({ codigo });
            if(!usuarioDeletado){
                res.status(404).json({message: "Usuario invalido!"});
            }else{
                res.status(200).json({message: "Usuário deletado com sucesso!"});
            }
        }catch(error){
            res.status(400).json({message: "Erro ao deletar usuário!", error});
        }
    }
};

export default UsuarioController;
