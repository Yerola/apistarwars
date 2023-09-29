const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/", controllers.getFilms );
router.get("/:id", controllers.getFilmById);
router.post("/", controllers.createFilm );
router.delete("/", controllers.deleteFilmById);

module.exports = router;