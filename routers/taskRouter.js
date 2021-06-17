const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// recupérer toutes les tasks
router.get('/', (req, res) => {
    sequelize.models.Task.findAll()
    .then(myTasks => {
        res.send(myTasks);
    })
})
// récupérer une task par son id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.Task.findByPk(id)
    .then(myTask => {
        res.send(myTask);
    })
})
// créer une nouvelle task en passant par postman
router.post('/', (req, res ) => {
    // Recevoir ce qu'il y a dans le body 
    // de la requête
    console.log(req.body);
    sequelize.models.Task.create(req.body)
    .then(taskCreated => {
        res.send(taskCreated);
    })
})
// supprimer une task par son id en passant par postman
router.delete('/id:', (req, res) => {
    sequelize.models.Task.destroy ({
        where:{id: req.params.id}
    }).then(() => {
        res.send({info:"task deleted"})
    })  
})
// modifier ou mettre a jour une task en passant par postman
router.patch('/:id', (req, res) => {
    sequelize.models.Task.update(req.body, 
        {where: {id : req.params.id} })
    .then(successUpdated => {
        res.send(successUpdated);
    })
})

module.exports = router;


