const router = require("express").Router()
const adminRouter= require("./adminRoutes")

router.use("/admin", adminRouter)

const authRoute = require("./auth")

router.use("/auth", authRoute)

module.exports = router