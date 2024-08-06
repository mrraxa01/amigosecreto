const { Router } = require('express');

const sorteioController = require('../Controllers/sorteioController');

const routes = Router();

routes.post('/sorteio', sorteioController.sortear);

module.exports = routes;