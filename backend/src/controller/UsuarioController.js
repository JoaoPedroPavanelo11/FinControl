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
            const usuarioSemSenha = criarUsuario.toObject();
            delete usuarioSemSenha.senha;
            res.status(200).json({message: "Usuário criado com sucesso!", criarUsuario});
        }catch(error){
            const erros = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({
                message: "Erro ao criar usuário!",
                erros
            })
        };
    };

    // Listar Usuarios
    static async mostrarUsuarios(req, res){
        try{
            // O select("-senha") é para não mostrar a senha dos usuarios, por questão de segurança
            const mostrarUsuarios = await Usuario.find().select("-senha");
            res.status(200).json({message: "Usuários encontrados com sucesso!", mostrarUsuarios});
        }catch(error){
            const erros = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({
                message: "Erro ao listar usuários!",
                erros
            })
        };
    };
    static async mostrarUsuarioEspecifico(req, res){
        try{
            const codigo = Number(req.params.codigo);
            const mostrarUsuarioEspecifico = await Usuario.findOne({ codigo });
            res.status(200).json({message: "Usuário encontrado com sucesso!", mostrarUsuarioEspecifico});
        }catch(error){
            const erros = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({
                message: "Erro ao encontrar usuário!",
                erros
            });
        };
    };

    // Editar um usuario que ja existe
    static async editarUsuario(req, res){
        try{
            const codigo = Number(req.params.codigo);
            const editarUsuario = await Usuario.findOneAndUpdate({ codigo }, req.body, { new: true });
            res.status(200).json({message: "Usuario editado!", editarUsuario});
        }catch(error){  
            const erros = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({
                message: "Erro ao editar usuário!",
                erros
            });
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
            const erros = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({
                message: "Erro ao deletar usuário!",
                erros
            });
        }
    }
};

export default UsuarioController;
