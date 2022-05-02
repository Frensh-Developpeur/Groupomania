// /fichier qui contient uniquement la logique de routine

// Importation des modules
const express = require('express');//Server
const router = express.Router();
//importation du middleware d'authorisation
const auth = require('../middlewares/auth');

//importation du middleware enregistrement d'image
const multer = require('../middlewares/multer-config');

// importation du controlleur sauces
const saucesCtrl = require('../controllers/sauces');

//Routes

// Creation de l'objet avec l'auth et multer
router.post('/', auth, multer, saucesCtrl.createSauce);

// Récuperation de tout les objets
router.get('/', auth, saucesCtrl.getAllSauces);

// Récuperation d'un l'objet
router.get('/:id', auth, saucesCtrl.getOneSauce);

// Modification de l'objet
router.put('/:id', auth, multer, saucesCtrl.modifySauce);

//Sppression de l'objet
router.delete('/:id', auth, saucesCtrl.deleteSauce);// l'outil delete  paramettre id verifie le token de l'utilisateur et bon 

// Like 
router.post('/:id/like', auth, saucesCtrl.likeSauce);

module.exports = router;
