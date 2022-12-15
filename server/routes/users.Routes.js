const express = require("express"); // require express
const router = express.Router(); // create express router

// Connecting to the controller
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
  loginUser,
} = require("../controllers/user.Controller");

// Connecting to the middleware
const userExist = require("../middleware/userExist.middleware");

// Importing the validator
const { validateUserBody } = require("../middleware/Validators");

router.get("/", getAllUsers);
router.post("/register", userExist, validateUserBody, createUser);
router.post("/login", loginUser);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

// exporting the router to be used in the main route index.js
module.exports = router;
