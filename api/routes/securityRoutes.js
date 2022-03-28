const securityRouter = require("express").Router()
const SecurityController= require("../controllers/SecurityController")

securityRouter.get("/myWorkDay/:id", SecurityController.getMyWorkDay)

module.exports= securityRouter