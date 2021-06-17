// DataTypes est à importer dans chaque fichier de modèle
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('User',{
    firstname: {
        type: DataTypes.STRING(60),
        allowNull: false 
    },
    lastname: {
        type: DataTypes.STRING(60), 
        allowNull: false 
    },
    email: {
        type: DataTypes.STRING(90), 
        allowNull: false 
    }
}, {
    tableName: 'user',
    underscored: true
})