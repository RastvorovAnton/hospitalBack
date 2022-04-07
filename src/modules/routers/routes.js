const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  getAllUsers,
  createNewUser,
  enterUser,
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
router.post("/enterUser", enterUser);
module.exports = router;