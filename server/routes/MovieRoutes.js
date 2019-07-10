const express = require('express');
const router = express.Router();
const { list, show, getLastClass, create, update, remove } = require("../controllers/MovieController");

router.get("/api/movies", list);
router.get("/api/movies/:id", show);
router.post("/api/movies", create);
router.put("/api/movies/:id", update);
router.delete("/api/movies/:id", remove);

module.exports = router;