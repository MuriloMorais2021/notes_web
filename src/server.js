const express = require('express')
const app = express();
const hbs = require('hbs')
const routes = require('./routes');
const path = require('path');
    '                                                                                                                                                                                                                                                                                                                                                                                       '

//usando o template enginer
app.set('view engine', 'hbs');

//mudando o caminho da pasta view
app.set('views', path.join(__dirname, 'Views'));
hbs.registerPartials(path.join(__dirname, 'Views/Template'));

//funçao para definir uma pagina estatica dos arquivos que vou usar nas views
app.use(express.static('Public'));

//usar o req.body para receber os dados de um form
app.use(express.urlencoded({extendend: true}));

//usando as rotas
app.use(routes);

app.listen('3000', ()=>  console.log('Esta Rodando'));
