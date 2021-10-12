const express = require('express');
const routes = express.Router();
const HomeController = require('./Controllers/HomeController');
const AboutController = require('./Controllers/AboutController');
const NotFoundController = require('./Controllers/NotFoundController');


routes.get('/', HomeController.index);
routes.post('/', HomeController.save);
routes.get('/about', AboutController.index);
routes.get('/*', NotFoundController.index);


module.exports = routes;