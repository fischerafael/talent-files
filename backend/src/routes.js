const express = require('express');

const UserController = require('./controllers/UserController');
const SkillController = require('./controllers/SkillController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Users Controllers
routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

// Skills Controllers
routes.get('/skills', SkillController.index);
routes.post('/skills', SkillController.create);
routes.delete('/skills/:id', SkillController.delete);

// Profile Controllers
routes.get('/profile', ProfileController.index);
routes.get('/profile/:user_id', ProfileController.indexFront)

// Session Controllers
routes.post('/sessions', SessionController.create);

module.exports = routes;