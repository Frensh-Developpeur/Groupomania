// Express
const express = require('express');

// Routeur
const router = express.Router();

const auth = require('../middlewares/auth');

// Controleur pour associer les differentes routes
const usersCtrl = require('../controllers/users');

// Creation de deux routes de type post
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/:id', usersCtrl.espaceUserOne);
router.delete('/:id', usersCtrl.deleteUserOne);

// Exportation du router 
module.exports = router;