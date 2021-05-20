const post = require('./src/models/post');
const categorias = require('./src/models/categorias')


//prueba seed posteos --> OK
const postData = [
    {titlePost:"Posteo Seed 1",contenidoPost:"Prueba",imagenPost:"https://via.placeholder.com/150",fechaPost:"2021-05-18 16:03:23",categorias_idcategorias:1},
    {titlePost:"Posteo Seed 2",contenidoPost:"Prueba",imagenPost:"https://via.placeholder.com/150",fechaPost:"2021-05-18 16:03:23",categorias_idcategorias:1}
];

const data = postData.map(async posteo =>{
    const tempPost = await post.create(posteo,{fields:["titlePost","contenidoPost","imagenPost","fechaPost","categorias_idcategorias"]})
})

//prueba seed categorias --> ok
// const categoriasData = [
//     {descripcionCategoria: 'categoria seed 1'},
//     {descripcionCategoria: 'categoria seed 2'}
// ]

// const data = categoriasData.map(async categoria =>{
//     const tempCat = await categorias.create(categoria,{fields:["descripcionCategoria"]})
// })