const router = require("express").Router()
const adminRouter= require("./adminRoutes")
const authRoute = require("./auth")
router.use("/admin", adminRouter)

router.use("/auth", authRoute)

module.exports = router