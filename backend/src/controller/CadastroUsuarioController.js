import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";

class CadastroUsuarioController {

    // Criar um novo usuário
    static async criarUsuario(req, res){
        try{
            const ultimoUsuario = await Usuario.findOne({ codigo: { $type: "number" } }).sort({ codigo: -1 });
            const novoCodigo = ultimoUsuario ? ultimoUsuario.codigo + 1 : 1;

            const senhaHash = await bcrypt.hash(req.body.senha, 10);
            const criarUsuario = await Usuario.create({
                ...req.body,
                codigo: novoCodigo,
                senha: senhaHash
            });
            res.status(200).json({message: "Usuário criado com sucesso!", criarUsuario});
        }catch(error){
            const erros = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({
                message: "Erro ao criar usuário!",
                erros
            })
        };
    };
};

export default CadastroUsuarioController;
