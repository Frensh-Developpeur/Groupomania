//  Import de Bcrypt
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import de JSONWEBTOKEN
const User = require('../models/user');

// Controllers de l'inscription // Signup
exports.signup = (req, res) => {
    // Hash le MDP
    bcrypt.hash(req.body.Password, 10)
        .then(hash => {
            const user = new User({
                Email: req.body.Email,
                Password: hash,
                Name: req.body.Name,
                FirstName: req.body.FirstName,
                City: req.body.City,
                Adress: req.body.Adress,
                Birthday: req.body.Birthday,
                Grade: 'Utilisateur'
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


// Controllers de connexion // Login
exports.login = (req, res) => {
    User.findOne({ Email: req.body.Email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            // Compare le cryptage du code fournie par l'user et celui de la BDD
            bcrypt.compare(req.body.Password, user.Password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                        
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    })
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.espaceUserOne = (req, res) => {
    console.log(req.params.id);
  User.findOne({ _id: req.params.id }) 
    .then(user => res.status(200).json(user)) 
    .catch(error => res.status(404).json({ error })); 
}
exports.deleteUserOne = (req, res) => {
  User.deleteOne({ _id: req.params.id }) 
    .then(user => res.status(200).json(user)) 
    .catch(error => res.status(404).json({ error })); 
}