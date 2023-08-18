const router = require("express").Router();
const habitController = require("../controller/habit_Controller");

// For rendering different pages and controllers
// home page route
router.get("/", habitController.home);

// adding the habit route
router.post("/add-habit", habitController.add);

// deleting the habit route
router.get("/delete/:id", habitController.habitDelete);

// show the habit route
router.get("/view/:id", habitController.showHabit);

// actions taken by the user
router.post("/active/:id", habitController.takeAction);

module.exports = router;
