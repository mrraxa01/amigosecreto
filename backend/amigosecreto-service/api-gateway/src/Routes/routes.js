const { Router } = require('express');
const httProxy = require('express-http-proxy');
const routes = Router();

const {
    PARTICIPANTE_API_URL,
    GRUPO_API_URL,
    SORTEIO_API_URL,
    LISTADESEJO_API_URL,
    CONVITE_API_URL,
} = require('./url');

const participanteServiceProxy = httProxy(PARTICIPANTE_API_URL);
const grupoServiceProxy = httProxy(GRUPO_API_URL);

routes.get('/',(req,res) => res.send("API gateway ..."));

routes.get('/participante/:id', (req,res) => participanteServiceProxy(req,res));
routes.get('/grupo/:id', (req,res) => grupoServiceProxy(req,res));

module.exports = routes;