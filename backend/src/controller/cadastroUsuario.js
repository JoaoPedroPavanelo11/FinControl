import usuario from "../models/usuario.js";

async function cadastrarUsuario(req, res){
    try{
        const novoUsuario = await usuario.create(req.body);
        res.status(201).json({message: "Usuario cadastrado com sucesso!", usuario: novoUsuario});
    } catch (error) {
        res.status(400).json({message: "Erro ao cadastrar usuario!", error: error.message});
    }
}