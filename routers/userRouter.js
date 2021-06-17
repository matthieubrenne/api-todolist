const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les users
router.get('/', (req, res) => {
    sequelize.models.User.findAll()
    .then(users => {
        res.send(users);
    })
})
// récupérer un user par son id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.User.findByPk(id)
    .then(myuser => {
        res.send(myuser );
    })
})

module.exports = router;