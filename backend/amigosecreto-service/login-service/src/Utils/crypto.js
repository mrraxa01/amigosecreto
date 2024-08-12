const Bcrypt = require("bcryptjs");

module.exports = {
    cripografa(texto){
        try {
            const saltRounds = 10;
            const salt = Bcrypt.genSaltSync(saltRounds);
            return Bcrypt.hashSync(texto, salt);
        }catch(err){
            console.log(err);
        }
        return null;
    },

    compareSenha(senha, hash){
        try{
            if(Bcrypt.compareSync(senha, hash)){
                return true;
            }else{
                return false;
            }
        }catch(err){
            console.log(err);
        }
        return false;
    }
}