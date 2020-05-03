const { Router } = require('express');
const routes = Router();

const UserController = require('./Controller/User');
const userAuthenticate = require('./Controller/UserAuthenticate');
routes.post('/register', UserController.create);

routes.post('/authe', userAuthenticate.Authenticate);

module.exports = routes;
