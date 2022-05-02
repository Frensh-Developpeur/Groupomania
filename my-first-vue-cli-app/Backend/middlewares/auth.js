// Import de JSONWEBTOKEN
const jwt = require('jsonwebtoken');

// Module de RANDOMTOKEN à la connexion
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        req.auth = { userId };
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Identifiant incorrect !';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Requête incorrecte!')
        });
    }
};