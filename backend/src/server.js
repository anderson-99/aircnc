const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://omniuser:omniuser@weekomni-rb7rz.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
/*
// Metodos HTTP - GET(buscar), POST(criar), PUT(editar), DELETE
// req.query = acessar query params (para fitros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação, edição)
*/

app.use(routes);
app.listen(3333);

