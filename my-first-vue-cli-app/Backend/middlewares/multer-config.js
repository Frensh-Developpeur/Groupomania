// IMPORT DE MULTER
const multer = require('multer');

// Format des fichiers
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg',
  'image/png': 'png'
};

const storage = multer.diskStorage({

  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  // Fonction qui permet de crée un name unique au fichiers en ajoutant la date par exemple
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({ storage: storage }).single('image');
/* Single capture les fichiers */
