const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
   'mysql://todo_user:123@localhost/todolist'
)

const Tag = require('./Tag')(sequelize);
const Task = require('./Task')(sequelize);
const User = require('./User')(sequelize);

//-------------- Relations start---------------//

User.hasMany(Task);
Task.belongsTo(User);

Tag.belongsToMany(Task, {through: "tag_task"});
Task.belongsToMany(Tag, {through: "tag_task"});

//-------------- Relations end---------------//




module.exports = sequelize;
