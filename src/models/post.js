const { DataTypes } = require ('sequelize');
const sequelize = require ('./../config/db');

const post = sequelize.define('post', {
    idpost:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,        
    },
    titlePost: {
        type: DataTypes.STRING,
        allowNull:true
    },
    contenidoPost: {
        type: DataTypes.STRING,
        allowNull:true
    },
    imagenPost: {
        type: DataTypes.STRING,
        allowNull:true
    },
    fechaPost: {
        type: DataTypes.DATE,
        allowNull:false
    },
    categorias_idcategorias:{
        type:DataTypes.INTEGER,
        allowNull:false        
    },
}, {
    tableName :'post',
    timestamps: false
  });

module.exports = post;