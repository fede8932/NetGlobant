const router = require("express").Router()
const passport = require("passport")

const UserController = require("../controllers/Auth")
const { isAuth } = require("../middleware/isAuth")

router.post("/login", passport.authenticate("local"), UserController.login)
router.post("/register", UserController.register)
router.post("/logout", isAuth, UserController.logout)


module.exports = router