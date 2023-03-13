const { addToLikedMovies, getlikedMovies, removeFromLikedMovies } = require("../controllers/UserController");

const router = require("express").Router();
router.post("/add", addToLikedMovies);
router.get("/liked/:email", getlikedMovies);
router.put("/delete", removeFromLikedMovies);

module.exports = router;