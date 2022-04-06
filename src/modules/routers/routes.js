const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  getAllUsers,
  createNewUser,
} = require("../controllers/userController");

router.get("/allUsers", getAllUsers);
router.post(
  "/userCreate",
  [
    check("email", "Введите верный email").notEmpty(),
    check("password", "Пароль должен быть длинее 4 символов!").isLength({
      min: 4,
      max: 50,
    }),
  ],
  createNewUser
);
module.exports = router;