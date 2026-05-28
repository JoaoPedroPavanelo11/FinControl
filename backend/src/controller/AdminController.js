import Usuario from "../models/usuario.js";

class AdminController{
    static async mostrarTodosUsuarios(req, res){
        try{
            const mostrarTodosUsuarios = await Usuario.find();
            res.status(200).json({message: "Todos os usuários encontrados com sucesso!", mostrarTodosUsuarios});
        }catch(error){
            const erros = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({
                message: "Erro ao mostrar Usuarios!",
                erros
            });
        }
    };
};
export default AdminController;