const express = require("express");
const app = express();
// const {post,categorias} = require('./src/models');
const post = require('./src/models/post');
const categorias = require('./src/models/categorias');
const validarExistenciaPost = require('./src/middlewares/middlewares');

//variable de conexion para el delete
const db = require('./src/config/db');

const APP_PORT = process.env.APP_PORT || 3000;

app.use(express.json());

//endpoints
//GET /posts/:id
app.get('/post/:id' ,validarExistenciaPost, async(req,res) =>{
  res.status(200).json(await post.findByPk(req.params.id))
});
//POST /posts
app.post('/post', async (req, res) => {
  const { titlePost, contenidoPost, imagenPost, fechaPost, categorias_idcategorias } = req.body;

  const nuevoPost = post.build({ titlePost, contenidoPost, imagenPost, fechaPost, categorias_idcategorias });

  try {
    res.status(201).json(await nuevoPost.save());
  } catch (e) {
    res.status(400).json({ error: e.message });
  }

});
//PATCH /posts/:id


// GET /categorias/:id
app.get('/categorias/:id' , async(req,res) =>{
  res.status(200).json(await categorias.findByPk(req.params.id))
});

// PATCH /posts/:id
app.patch('/patchPost/:id',validarExistenciaPost, async (req, res) => {
  try {
    res.status(200).json(await req.dataPost.update(req.body))
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

//DELETE /posts/:id

app.post('/deletePost/:id',validarExistenciaPost, async (req, res) => {
   const index = req.params.id;
  console.log('indexXXXXXXXXXXXXXXXXXX ' + index)
  try {
    const post = await db.query(`DELETE FROM post WHERE idpost=:id`,
      {
        replacements: { id: index },
        type: db.QueryTypes.DELETE
      },
    );
    res.status(200);
    res.json(post);
  } catch (e) {
    res.status(500);
    console.log(e.message)
    res.json({ error: "error en el servidor intente mas tarde" });
  }
});

app.listen(APP_PORT, () => {
    console.info("server corriendo en puerto " + APP_PORT);
  });
  