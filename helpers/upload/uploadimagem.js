const multer = require("multer");

//TIPOS DE ARQUIVOS PERMITIDOS (OPCIONAL)
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jfif') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

//DEFINIÇÃO DE USO DO MULTER
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: fileFilter,
});

module.exports = upload;