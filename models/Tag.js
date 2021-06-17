// DataTypes est à importer dans chaque fichier de modèle
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Tag',{
    name: {
        type: DataTypes.STRING(60),
        allowNull: false 
    }
}, {
    tableName: 'tag',
    underscored: true
})