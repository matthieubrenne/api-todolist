// DataTypes est à importer dans chaque fichier de modèle
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Task',{
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    content: {
        type: DataTypes.TEXT, 
        allowNull: false 
    }
}, {
    tableName: 'task',
    underscored: true
})

