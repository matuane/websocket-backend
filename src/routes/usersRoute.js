const { Router } = require("express");
const LoginController = require("../controllers/LoginController.js");

const router = Router();

router.post("/login/signup", LoginController.CriaConta);
router.get("/users", LoginController.GetUsers);
router.get("/users/:id", LoginController.GetUser);

module.exports = router;
