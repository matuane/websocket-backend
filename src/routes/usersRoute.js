const { Router } = require("express");
const LoginController = require("../controllers/LoginController.js");

const router = Router();

router.get("/status", (req, res) => {
  res.status(200).json({ message: "OK" });
});

router.get("/users", LoginController.GetUsers);
router.get("/users/:id", LoginController.GetUser);
router.post("/login/signup", LoginController.CriaConta);
router.post("/login/signin", LoginController.VerifyLogin);

module.exports = router;
