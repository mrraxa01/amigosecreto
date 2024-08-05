const { getById } = require('../Controllers/participanteController');
const Participante  = require('../Models/participante');

module.exports = {
    
    async create (participante) {
        try {
            let {nome, cpf, email, senha} = participante;
            const returnParticipante  = await Participante.create({
                nome,
                cpf,
                email,
                senha
            });
            return returnParticipante;

        } catch (err) {
            console.log("Erro " + err);
        }

        return null;
    },

    async edit (participante){
        try {
            let {_id, nome, cpf, email, senha} = participante;
            const returnParticipante = await Participante.updateOne(
                {_id : _id}, {$set : {nome, email, senha, cpf}}
            );
            return returnParticipante;

        } catch (error) {
            console.log("Erro ", + err);
        }

        return null;
    },

    async getById (_id){
        try {
            
            const returnParticipante = await Participante.find({_id});
            return returnParticipante;


        } catch (error) {
            console.log("Erro " + err);
        }
        return null;
    },

    async delete(_id){
        try {
            const returnParticipante = await Participante.deleteOne({_id : _id});
            return returnParticipante;
        } catch (error) {
            console.log("Erro ", err);
        }
        return null;
    }
}