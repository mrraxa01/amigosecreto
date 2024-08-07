const express = require('express');
const routes = require('./Routes/routes');

const app = express();

app.use(express.json());

app.use(routes);

const port = 3000;

app.listen(port, () => console.log(`API Gateway is running port ${port}`));