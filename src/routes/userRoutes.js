const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require(path.resolve(__dirname,"../controlers/userController.js"));

router.get("/user", userController.profile);

module.exports = router;