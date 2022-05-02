// Importation de Express et Mongoose
const express = require('express');
const mongoose = require('mongoose');

//Appel de Express
const app = express();

//importation des routers
const usersRoutes = require('./routes/users');

// Importation d'un module qui nous offre des fonctionnalités pour le système de maintenance des fichiers
const path = require('path');

// Connexion à la base de données MongoDB
mongoose.connect('mongodb+srv://sebckyser:romain123@cluster0.jcz7m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échoué !'));

// Gestion des erreurs CORS (Cross Origin Ressource Sharing) 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Accès à l'API par ALL
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');//Requete envoyer a l 'APi
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware qui donne acces au corps de la requete permet d'utiliser les données de la base de données
app.use(express.json());

// Permet d'accéder au dossier image.
// Par défaut le contenu est bloqué.
// Express.Static permet de pouvoir utiliser les fichiers fournie dans le dossier Images.
app.use('/images', express.static(path.join(__dirname, 'images')));


// Création de route
app.use('/api/auth', usersRoutes);

// Exportation de app.js
module.exports = app;