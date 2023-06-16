const { Router } = require("express");
const ping = require("./../controllers/ping")
const getCharById = require("./../controllers/getCharById")
const postUser = require("./../controllers/postUser");
const login = require("../controllers/login");

const router = Router();

router.get("/ping", ping)

router.get("/character/:id", getCharById);

router.post("/login", postUser);

router.get("/login", login)

module.exports = router;