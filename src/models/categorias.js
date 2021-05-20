const { DataTypes } = require ('sequelize');
const sequelize = require ('./../config/db');

const categorias = sequelize.define('categorias',{
    idcategorias:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,        
    },
    descripcionCategoria: {
        type: DataTypes.STRING,
        allowNull:true
    }
}, {
    tableName:'categorias',
    timestamps: false
});

module.exports = categorias;