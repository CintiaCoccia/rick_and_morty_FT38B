const { Router } = require("express");
const ping = require("./../controllers/ping")
const getCharById = require("./../controllers/getCharById")
const postUser = require("./../controllers/postUser");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");

const router = Router();

router.get("/ping", ping)

router.get("/character/:id", getCharById);

router.post("/login", postUser);

router.get("/login", login);

router.post("/fav", postFav);

module.exports = router;