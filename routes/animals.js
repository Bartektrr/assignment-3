var express = require('express');
var router = express.Router();
var db = require("../models");
var AnimalService = require("../services/AnimalService")
var animalService = new AnimalService(db);

router.get('/', async function(req, res, next) {
  const animals = await animalService.getAll();
  res.render('animals', {animals: animals, user: null});
});

module.exports = router;
