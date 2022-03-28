const securityRouter = require("express").Router()
const SecurityController= require("../controllers/SecurityController")

securityRouter.get("/myWorkDay/:id", SecurityController.getMyWorkDay)
securityRouter.post("/myEffictiveWorkDay/:id", )
module.exports= securityRouter