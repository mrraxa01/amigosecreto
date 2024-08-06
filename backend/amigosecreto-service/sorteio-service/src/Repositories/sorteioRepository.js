const Sorteio = require('../Models/sorteio');

module.exports = {
    async create (grupo) {
        try {
            let { idGrupo, participantes } = grupo;
            const returnSorteio = await Sorteio.create({
                idGrupo,
                participantes
            });
            console.log(returnSorteio);
            return returnSorteio;

        } catch (err) {
            console.log("Erro " + err);
        }
        return null;
    }
}