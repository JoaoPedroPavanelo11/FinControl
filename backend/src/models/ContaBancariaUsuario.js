import mongoose from "mongoose";

const contaBancariaUsuarioSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    nomeBanco: {
        type: String,
        required: true,
        trim: true
    },
    tipoConta: {
        type: String,
        enum: ["corrente", "poupanca"],
        required: true
    },
    saldo: {
        type: Number,
        required: true,
        default: 0
    }
})

const ContaBancariaUsuario = mongoose.models.ContaBancariUsuario || mongoose.model("ContaBancariUsuario", contaBancariaUsuarioSchema);
export default ContaBancariaUsuario;