const router = require("express").Router()
const adminRouter= require("./adminRoutes")

router.use("/admin", adminRouter)


module.exports = router