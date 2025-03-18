let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

// Adds a POST route to create a new user
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

router.put("/:id", (req, res) => { // add a PUT route to update existing user based on their id
  Controllers.userController.updateUser(req, res);
});

router.delete("/:id", (req, res) => { // add a DELETE route to update existing user based on their id 
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
