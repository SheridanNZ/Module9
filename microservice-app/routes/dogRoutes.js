const express = require('express');
const router = express.Router();
const dogController = require('../controllers/dogController');

// Route to get a random dog image
router.get('/random', dogController.getRandomDogImage);

// Route to get multiple dog images
router.get('/images', dogController.getDogImages);

// Route to get a list of dog breeds
router.get('/breeds', dogController.getDogBreeds);

module.exports = router;