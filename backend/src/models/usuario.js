import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String
});

const Usuario = mongoose.models.Usuario || mongoose.model("Usuario", usuarioSchema);
export default Usuario;