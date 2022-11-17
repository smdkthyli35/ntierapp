const express = require("express");

const router = express.Router();

const userController = require("../../controllers/user/userController");

router.get("/getAll", userController.getAll);

router.get("/getById/:userId", userController.getById);

router.post("/create", userController.create);

module.exports = {
  users: router,
};
