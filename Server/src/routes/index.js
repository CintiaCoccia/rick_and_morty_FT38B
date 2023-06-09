const { Router } = require("express");

const ping = require("./../controllers/ping")
const getCharById = require("./../controllers/getCharById")
const login = require("./../controllers/login")
const { postFav, deleteFav } = require("./../controllers/handleFavorites")

const router = Router();

router.get("/ping", ping)

router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;