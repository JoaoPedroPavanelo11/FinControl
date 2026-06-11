import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class LoginUsuarioController {

    static async loginUsuario(req, res){
        try{
            const {email, senha} = req.body;
            const usuario = await Usuario.findOne({ email });

            if(!usuario){
                return res.status(404).json({message: "Usuario ou senha invalido!"});
            }

            const senhaValida = await bcrypt.compare(senha, usuario.senha);

            if(!senhaValida){
                return res.status(401).json({message: "Usuario ou senha invalido!"});
            }
            res.status(200).json({message: "Login realizado com sucesso!", usuario});
        }catch(error){
            res.status(400).json({
                message: "Erro ao fazer login!",
                erro: error.message
            })
        };
    };
};

export default LoginUsuarioController;
