const sequelize = require("./models/index.js");
const faker = require('faker');


console.log('Checking Database connection...');

function generateTasks() {
    for(let i=1;i<=30;i++) {
        sequelize.models.Task.create({
            content: faker.random.words(5)
        })
    }
}

function generateTags() {
    for(let i=1;i<=40;i++) {
        sequelize.models.Tag.create({
            name: faker.random.words(3)
        })
    }
}

function generateUsers() {
    for(let i=1;i<=10;i++) {
        sequelize.models.User.create({
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email:faker.internet.email()
        })
    }
}



sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    sequelize.sync({force: true})
    .then(()=> {
        generateTags();
        generateTasks();
        generateUsers();
    });
})
.catch((err) => {
    console.log(err);
})