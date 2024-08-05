const { edit } = require('../Controllers/grupoController');
const Grupo = require('../Models/grupo');

module.exports = {
    async create (grupo){
        try {
            let {nome, valorMinimo, dataSorteio, responsavel} = grupo;
            const returnGrupo = await Grupo.create({
               nome,
               valorMinimo,
               valorMaximo,
               dataSorteio,
               responsavel 
            });
            return returnGrupo;
        } catch (err) {

            console.log("Erro " + err);
            
        }
        return null;
    },

    async edit(Grupo){
        try {
            let {nome, valorMinimo, dataSorteio, responsavel} = grupo;
            const returnGrupo = await Grupo.updateOne(
                {_id}, {$set: {nome, valorMinimo, valorMaximo, dataSorteio}}
            );
        } catch (error) {
            console.log("Erro " + err);
        }
        return null;
    },

    async getById (_id){
        try {
            const returnGrupo = await Grupo.find({_id});
            return returnGrupo;
        } catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },

    async delete (_id){
        try {
            const returnGrupo = await Grupo.deleteOne({_id : _id});
            return returnGrupo;
        } catch (error) {
            console.log("Erro " + err);
        }
        return null;
    }
}