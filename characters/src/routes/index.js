const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();


router.get("/", controllers.getCharacters);
router.get("/:id", controllers.getCharById);
router.post("/", middlewares.characterValidation , controllers.createCharacter);
router.delete("/", controllers.deleteById);

module.exports = router;