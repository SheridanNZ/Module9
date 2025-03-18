const axios = require('axios');

const DOG_API_URL = 'https://dog.ceo/api';

// Get a random dog image
const getRandomDogImage = async (req, res) => {
  try {
    const response = await axios.get(`${DOG_API_URL}/breeds/image/random`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching random dog image', error: error.message });
  }
};

// Get multiple dog images
const getDogImages = async (req, res) => {
  try {
    const count = req.query.count || 5; // Default to 5 images if no count is given
    const response = await axios.get(`${DOG_API_URL}/breeds/image/random/${count}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dog images', error: error.message });
  }
};

// Get a list of dog breeds
const getDogBreeds = async (req, res) => {
  try {
    const response = await axios.get(`${DOG_API_URL}/breeds/list/all`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dog breeds', error: error.message });
  }
};

module.exports = {
  getRandomDogImage,
  getDogImages,
  getDogBreeds,
};