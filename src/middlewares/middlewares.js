const post = require('../models/post');
const categorias = require('../models/categorias');

function validarExistenciaPost(req, res, next) {
    post.findByPk(req.params.id).then((posting)=> {
        if (posting != null) {
            req.dataPost = posting;
            next();
        }else {
         res.status(400).json({"error": `Post id = ${req.params.id} no existe`})
        }
    }).catch(e => {
       res.status(400).json({"error": e.message})
    })
 }

 module.exports = validarExistenciaPost;