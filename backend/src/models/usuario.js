import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    codigo: {
        type: Number,
        unique: true
    },
    nome: {
        type: String,
        required: [true, "Nome obrigatorio!"],
        trim: true,
        minlength: [3, "O nome deve conter no mínimo 3 caracteres!"],
    },
    email: {
        type: String,
        required: [true, "Email obrigatorio!"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Email inválido!"]
    },
    senha: {
        type: String,
        required: [true, "Senha obrigatoria!"],
        minlength: [4, "Deve conter no minimo 4 caracteres!"]
    }
});

const Usuario = mongoose.models.Usuario || mongoose.model("Usuario", usuarioSchema);
export default Usuario;
