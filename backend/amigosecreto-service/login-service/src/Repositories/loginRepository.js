const Login = require('../Models/login');
const cripto = require('../Utils/crypto');

module.exports = {
    async create (login){
        try{
            let {  email, senha }  = login;

            const retornLogin = await Login.create({                
                email ,
                senha: cripto.cripografa(senha),
                ativo: true
         }); 
         return retornLogin;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async validarLogin (login){
        try{
            let {  email, senha }  = login;
            const retornLogin = await Login.find({ email , senha :cripto.compareSenha(senha) , ativo : true }); 
         return retornLogin;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
}