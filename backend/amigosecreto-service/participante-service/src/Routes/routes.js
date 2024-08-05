const { Router } = require('express');

const participanteController = require('../Controllers/participanteController');

const routes = Router();

routes.get('/participante/:id', participanteController.getById);
routes.post('/participante', participanteController.create);
routes.put('/participante', participanteController.edit);
routes.delete('/participante/:id', participanteController.delete);

module.exports = routes;