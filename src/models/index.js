const categorias = require("./categorias");
const post = require("./post");

post.belongsTo(categorias, {
    foreignKey: 'categorias_idcategorias'
});

categorias.hasMany(post,{
    foreignKey:'categorias_idcategorias'
})

module.exports = { post };