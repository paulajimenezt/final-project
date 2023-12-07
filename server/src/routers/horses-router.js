const express = require("express");
const router = express.Router();
const horsesController = require("../controllers/horses-controller");

// GET /horses
router.get("/", horsesController.getAllHorses);

// GET /horses/:id
router.get("/:id", horsesController.getHorseById);

// POST /horses
router.post("/", horsesController.createHorse);

// PATCH /horses/:id
router.patch("/:id", horsesController.updateHorse);

// DELETE /horses/:id
router.delete("/:id", horsesController.deleteHorse);

module.exports = router;
