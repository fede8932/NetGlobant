const router = require("express").Router()
const UserController = require("../controllers/Auth")
const { adminAuthMiddleware } = require("../middleware/isAuth")

router.post("/login", UserController.login)
router.post("/register",  /* adminAuthMiddleware, */  UserController.register)

router.put("/forgotPasswordSecurity", UserController.forgotPasswordSecurity)
router.put("/forgotPasswordAdmin", UserController.forgotPasswordAdmin)
router.put("/newAdminPassword/:token", UserController.updateAdminPassword)
router.put("/newSecurityPassword/:token", UserController.updateSecurityPassword)

module.exports = router