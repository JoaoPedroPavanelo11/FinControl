import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    codigo: {
        type: Number,
        unique: true
    },
    nome: String,
    email: String,
    senha: String
});

const Usuario = mongoose.models.Usuario || mongoose.model("Usuario", usuarioSchema);
export default Usuario;
