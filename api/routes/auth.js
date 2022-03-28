const router = require("express").Router()

const UserController = require("../controllers/Auth")
const { adminAuthMiddleware } = require("../middleware/isAuth")


router.post("/login", UserController.login)
router.post("/register", /*adminAuthMiddleware,*/ UserController.register)

module.exports = router